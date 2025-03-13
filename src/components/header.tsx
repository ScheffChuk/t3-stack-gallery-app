import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="mb-3 mt-10 flex w-full items-center justify-between p-4 text-xl font-semibold text-gray-600">
      <Link href="/">
        <div>Some Photos</div>
      </Link>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row gap-4 mr-4">
            <SimpleUploadButton />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
