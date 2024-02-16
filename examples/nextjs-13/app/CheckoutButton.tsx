'use client';
import styles from './page.module.css';
import {useXCheckout} from 'react-korba-payment';

export default function CheckoutButton() {
  const {pay} = useXCheckout({
    scriptSrc: 'https://paywithkorba.s3-eu-west-1.amazonaws.com/test-checkout.js', // replace with your XCheckout script URL
  });

  return (
    <button
      onClick={() => {
        pay({
          merchantID: '<your_merchant_id>',
          orderID: '<unique_order_id>',
          description: 'Ordered goods',
          amount: 1.2, // in GH₵
          redirectURL: 'http://www.yourawesomeapp.com',
        });
      }}
      className={styles.button}
    >
      Pay Now!
    </button>
  );
}
