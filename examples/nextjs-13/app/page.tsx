import Image from 'next/image';
import {Inter} from 'next/font/google';
import styles from './page.module.css';
import {useXCheckout} from 'react-korba-payment';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  const {handleXCheckoutClick} = useXCheckout({
    config: {
      merchantID: '<your_merchant_id>',
      orderID: '<unique_order_id>',
      description: 'Ordered goods',
      amount: 1.2,
      redirectURL: 'http://www.yourawesomeapp.com',
    },
    scriptSrc: 'https://paywithkorba.s3-eu-west-1.amazonaws.com/test-checkout.js',
  });

  return (
    <main className={styles.main}>
      <button onClick={handleXCheckoutClick} className={styles.button}>
        Pay Now!
      </button>
    </main>
  );
}
