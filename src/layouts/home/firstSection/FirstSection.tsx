import Image from 'next/image';
import Link from 'next/link';
import MadeWithLove from '@/components/madeWithLove/madeWithLove';
import styles from './first-section.module.css';
import homeImage from '../../../assets/images/homepage.svg';

export default function FirstSection() {
  return (
    <div className={styles.container}>
      <main className={styles.firsSectionContainer}>
        <div className={styles.descriptionContainer}>
          <div>
            <h1 className={styles.title}>
              Open Source
              {' '}
              <span className={styles.titleBold}>Images</span>
            </h1>
          </div>
          <p className={styles.descriptionSite}>
            Totally free images that you can use on your projects.
          </p>
          <Link href="./get-images" className={styles.buttonGetImages}>Get Images</Link>
          <div className={styles.madeWithLoveContainer}>
            <MadeWithLove />
          </div>
        </div>

        <div className={styles.imageContainer}>

          <Image
            src={homeImage}
            alt="A person drawing happily and meditatively sitting at
                  a small typical Japanese table with a coffee on the
                  table has a Japanese plant and in the background there
                  are several thoughts that the person likes like planets,
                  love."
            style={{ width: '100%', height: '100%' }}
            priority
          />

        </div>
      </main>
    </div>
  );
}
