import styles from './page.module.css';
import CheckoutButton from './CheckoutButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <CheckoutButton />
    </main>
  );
}
