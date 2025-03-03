import { getMyImages } from "~/server/queries";
import Image from "next/image";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-[500px] w-[500px]">
          <Image
            src={image.url}
            alt="image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
