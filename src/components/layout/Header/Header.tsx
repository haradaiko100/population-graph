import styles from './Header.module.css';

export const Header = () => {
  return (
    <div>
      <header className={styles.container}>
        <h1 className={styles.title}>都道府県別の人口推移</h1>
      </header>
    </div>
  );
};
