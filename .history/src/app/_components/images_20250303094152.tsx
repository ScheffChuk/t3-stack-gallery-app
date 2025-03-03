import { getMyImages } from "~/server/queries";
import Image from "next/image";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={index} className="w-auto h-auto">
          <Image src={image.url} alt="image" width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
