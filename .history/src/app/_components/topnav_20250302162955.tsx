"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold text-gray-600">
      <div>In Memories of Vivian Maier</div>
      <div className="flex flex-row gap-8">
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUpload" className="size-20" />
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
}