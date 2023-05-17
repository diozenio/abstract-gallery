import GalleryContainer from "./Container";
import GalleryImage from "./Image";
import styles from "./styles.module.scss";

export default function GalleryPage() {
  return (
    <div className={styles.container}>
      <section className={styles.textSection}>The — Abstract Gallery</section>
      <GalleryContainer>
        <GalleryImage src="src/assets/gallery/adrianna-geo-1rBg5YSi00c-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/alp-ancel-WKQt_X-SKFI-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/birmingham-museums-trust-5EUh-tq31eA-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/europeana-5TK1F5VfdIk-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/joel-filipe-QwoNAhbmLLo-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/jon-tyson-QL0FAxaq2z0-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/milad-fakurian-PGdW_bHDbpI-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/orfeas-green-G5A5ZNjS2tE-unsplash.jpg" />
        <GalleryImage src="src/assets/gallery/steve-johnson-zkNT5mikUuo-unsplash.jpg" />
      </GalleryContainer>
    </div>
  );
}
