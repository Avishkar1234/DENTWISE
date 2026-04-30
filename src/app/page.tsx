"use client";

import {
  SignedOut,
  SignOutButton,
  SignUpButton,
  SignedIn,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col m-2 p-2 text-white bg-black rounded-2xl w-fit gap-2 mb-3">
      <h1 className="mb-2 bg-blue-500">Home Page</h1>
      <SignedOut>
        <SignUpButton mode="modal">SignUp</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
