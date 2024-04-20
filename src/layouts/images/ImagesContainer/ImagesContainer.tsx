import ImagesCard from '@/components/imagesCard/ImagesCard';
import Footer from '@/components/footer/Footer';
import styles from './images-container.module.css';

export default function ImagesContainer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imagesView}>
          <h1 className={styles.title}>Images</h1>
          <div className={styles.cardContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <ImagesCard key={i} />
            ))}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
