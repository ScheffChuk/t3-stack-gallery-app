import Image from "next/image";
import getImage, { deleteImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src={image.url}
        className="object-cover"
        alt={""}
        width={400}
        height={400}
      />
      <form
        action={async () => {
          "use server";
          await deleteImage(props.id);
        }}
      >
        <Button type="submit" variant={"destructive"}>
          Delete
        </Button>
      </form>
    </div>
  );
}
