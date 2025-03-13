import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Gallery } from "../components/gallery";
import Footer from "~/components/footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in{" "}
        </div>
      </SignedOut>
      <SignedIn>
        <Gallery />
      </SignedIn>
      <Footer />
    </main>
  );
}
