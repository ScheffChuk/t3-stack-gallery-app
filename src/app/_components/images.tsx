import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
      {images.map((image) => (
        <div key={image.id}>
          <Link href={`/image/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
              alt={image.name}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
