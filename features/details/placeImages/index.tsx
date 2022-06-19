import IMAGES from "@/constants/static/images";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

type Props = {
  images: Array<{ id: string; src: string }>;
};

export default function PlaceImages({ images }: Props) {
  if (!images.length)
    return (
      <Image alt="not found" height={540} src={IMAGES.NO_IMAGE} width={800} />
    );

  return (
    <ImageList cols={3} gap={2}>
      {images.map(({ id, src }) => (
        <ImageListItem key={id}>
          <Image
            alt="not found"
            blurDataURL={IMAGES.NO_IMAGE}
            height={"250px"}
            layout="responsive"
            placeholder="blur"
            priority
            src={src}
            width={"250px"}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
