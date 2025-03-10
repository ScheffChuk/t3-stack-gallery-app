import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center md:grid-cols-3 lg:grid-cols-5 gap-4 m-3">
      {images.map((image) => (
        <div key={image.id}>
          <Link href={`/image/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "cover" }}
              width={300}
              height={300}
              alt={image.name}
              className="rounded-sm w-60 h-60"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
