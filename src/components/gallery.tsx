import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export async function Gallery() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-5 px-16">
      {images.map((image) => (
        <div key={image.id}>
          <Link href={`/image/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "cover" }}
              width={300}
              height={300}
              alt={image.name}
              className="h-60 w-60 rounded-sm"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
