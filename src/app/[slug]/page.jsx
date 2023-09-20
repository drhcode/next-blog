import Image from 'next/image';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Link from 'next/link';
import Comments from '@/components/comments/Comments';

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <Link href='/slug' className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/p1.jpeg' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>16.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat omnis nisi
              fuga rerum quae vitae blanditiis autem, aperiam labore magnam! Vitae repudiandae rem
              maxime eaque animi ullam qui laudantium.
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero nihil iure,
              suscipits
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, exercitationem hic.
              Iusto, mollitia distinctio aspernatur, magnam magni reprehenderit ex eius odio ipsa,
              qui asperiores. Odio iure officia amet alias voluptatem?
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default singlePage;
