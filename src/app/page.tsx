import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://a62hf8ma2t.ufs.sh/f/0Yxydo4BUqoViZAZP4edAozcSJNQ3lEFT8yrjCgBDMstkf1h",
  "https://a62hf8ma2t.ufs.sh/f/0Yxydo4BUqoVUrb1GuDdBDmx0ijqA843CE2aQfOyFlrckX7e",
  "https://a62hf8ma2t.ufs.sh/f/0Yxydo4BUqoVUrb1GuDdBDmx0ijqA843CE2aQfOyFlrckX7e",
  "https://a62hf8ma2t.ufs.sh/f/0Yxydo4BUqoVDu69QDZ0pZdc8qMQ6gtmOeFX0o2VIEaBHny5",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap items-center gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="image" width={1080} height={768} />
          </div>
        ))}
      </div>
    </main>
  );
}
