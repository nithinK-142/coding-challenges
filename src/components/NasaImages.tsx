import { useEffect, useState } from "react";

interface NasaImageResponse {
  collection: {
    items: { links?: { href: string; render: string }[] }[];
  };
}
const NasaImages = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("https://images-api.nasa.gov/search?q=moon");
      const result: NasaImageResponse = await response.json();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //   @ts-expect-error
      const imageurls: string[] = result.collection.items.flatMap((item) =>
        item.links
          ?.filter((link) => link.render === "image")
          .map((image) => image.href)
      );
      setImages(imageurls);
    };
    fetchImages();
  }, []);

  console.log(images.length);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="NASA Image" />
      ))}
    </div>
  );
};

export default NasaImages;
