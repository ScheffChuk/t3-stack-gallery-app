import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="m-auto w-full">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="items-center">
            <Image src={image.url} alt="image" width={300} height={300} />
          </div>
        ))}
      </div>
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
