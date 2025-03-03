import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="items-center">
          <Image src={image.url} alt="image" width={300} height={300} />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in{" "}
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
