import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sign } from "crypto";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold text-gray-600">
      <div>In Memories of Vivian Maier</div>
      <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
}