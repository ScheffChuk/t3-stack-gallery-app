import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="ml-2 flex flex-wrap items-center gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={index} className="items-center">
            <Image src={image.url} alt="image" width={300} height={300} />
          </div>
        ))}
      </div>
    </main>
  );
}
