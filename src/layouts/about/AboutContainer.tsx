import Link from 'next/link';
import Image from 'next/image';
import Informations from './Informations';
import styles from './about-container.module.css';
import Linkedin from '../../assets/icons/linkedin.svg';

export default function AboutContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <section>
          <Informations.Title title="Welcome 👋" />
          <Informations.Info info="This site arose from a desire to contribute in some way to the community and unite my passions for developing and drawing.
Vectoo is dedicated to offering a collection of original vector designs, crafted with love and available for free for your projects."
          />
        </section>
        <Informations.Divider />
        <section>
          <Informations.Title title="About license" />
          <Informations.Info info="You're granted full freedom to use them without any attribution or costs. However, that you refrain from attempting to replicate our platform, redistribute the illustrations, or develop integrations for them." />
        </section>
        <Informations.Divider />
        <section>
          <Informations.Title title="Contact" />
          <Link
            className={styles.link}
            href="https://www.linkedin.com/in/felipe-sou/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Linkedin} alt="link para o linkedin" />
          </Link>

        </section>
        {/* <section>
          <h2>Contato</h2>
          <p>
            Entre em contato conosco em
            {' '}
            <a href="mailto:contato@empresa.com">contato@empresa.com</a>
          </p>
        </section> */}
      </div>
    </div>
  );
}
