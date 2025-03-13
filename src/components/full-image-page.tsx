import getImage from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <img src={image.url} className="object-cover w-80" />
    </div>
  );
}
