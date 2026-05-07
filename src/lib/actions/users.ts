"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser() {
  try {
    const user = await currentUser();
    if (!user) return;

    const dbUser = await prisma.user.upsert({
      where: { email: user.emailAddresses[0].emailAddress },
      update: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phoneNumbers[0]?.phoneNumber,
      },
      create: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0].emailAddress,
        phone: user.phoneNumbers[0]?.phoneNumber,
      },
    });

    return dbUser;
  } catch (error) {
    console.error("Error in syncUser server action", error);
  }
}
