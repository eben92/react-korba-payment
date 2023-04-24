'use client';
import styles from './page.module.css';
import {useXCheckout} from 'react-korba-payment';

export default function CheckoutButton() {
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
    <button onClick={handleXCheckoutClick} className={styles.button}>
      Pay Now!
    </button>
  );
}
