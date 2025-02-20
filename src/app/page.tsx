import Image from "next/image";
import ImageData from "public/mock_images.json";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  return (
    <main>
      <div className="ml-2 flex flex-wrap items-center gap-4">
        {/* {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))} */}
        {ImageData.map((item, index) => (
          <div key={index}>
            <Image
              src={item.url}
              alt="image"
              width={300}
              height={300}
              className="p-2"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
