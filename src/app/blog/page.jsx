import styles from './blog.module.css';
import Menu from '@/components/menu/Menu';
import CardList from '@/components/cardList/CardList';

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
