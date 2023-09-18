import Image from 'next/image';
import styles from './home.module.css';
import homeImage from '../../assets/images/homepage.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.firsSectionContainer}>
        <div className={styles.descriptionContainer}>
          <div>
            <h1 className={styles.title}>
              Open source
              {' '}
              <span className={styles.titleBold}>images</span>
            </h1>
          </div>
          <p className={styles.descriptionSite}>
            Totally free images that you can use on your projects.
          </p>
          <button type="button" className={styles.buttonGetImages}>Get Images</button>
        </div>
        <div className={styles.imageContainer}>

          <Image
            src={homeImage}
            alt="A person drawing happily and meditatively sitting at
                  a small typical Japanese table with a coffee on the
                  table has a Japanese plant and in the background there
                  are several thoughts that the person likes like planets,
                  love."
            width={555}
            layout="responsive"
          />
        </div>
      </main>
    </div>
  );
}
