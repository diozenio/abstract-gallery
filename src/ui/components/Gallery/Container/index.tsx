import { PropsWithChildren } from "react";
import "./styles.scss";

export default function GalleryContainer({ children }: PropsWithChildren) {
  return (
    <section className={"galleryContainer"}>
      <div className={"track"}>{children}</div>
    </section>
  );
}
