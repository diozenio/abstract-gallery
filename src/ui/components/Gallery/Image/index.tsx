import "./styles.scss";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function GalleryImage({ src, ...rest }: ImageProps) {
  return (
    <img
      className={"image"}
      draggable={false}
      src={src}
      {...rest}
      onMouseEnter={(e) => {
        e.currentTarget.className = "imageHover" + " " + "image";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.className = "image";
      }}
    />
  );
}
