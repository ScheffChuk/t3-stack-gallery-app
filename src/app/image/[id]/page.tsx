import FullPageImageView from "~/app/_components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <div>
      <FullPageImageView id={idAsNumber} />
    </div>
  );
}
