"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold text-gray-600">
      <div>Some Photos</div>
      <div className="flex flex-row gap-8">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUpload"
            onClientUploadComplete={() => {
              router.refresh();
            }}
            className="ut-button:variant:outline"
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
