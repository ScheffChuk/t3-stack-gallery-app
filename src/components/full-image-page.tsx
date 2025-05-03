import Image from "next/image";
import getImage from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src={image.url} className="object-cover" alt={""} width={400} height={400}/>
    </div>
  );
}
