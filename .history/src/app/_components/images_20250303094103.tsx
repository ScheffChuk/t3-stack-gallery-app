import { getMyImages } from "~/server/queries";
import Image from "next/image";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="w-auto h-auto grid grid-cols-1 justify-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.url} alt="image" w-auto h-auto />
        </div>
      ))}
    </div>
  );
}
