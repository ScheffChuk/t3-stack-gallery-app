import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold text-gray-600">
      <Link href="/">
        <div>Some Photos</div>
      </Link>
      <div className="flex flex-row gap-8">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
