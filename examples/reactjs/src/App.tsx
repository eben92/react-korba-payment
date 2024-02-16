import {useXCheckout} from 'react-korba-payment';
import './App.css';

function App() {
  const {pay} = useXCheckout({
    scriptSrc: 'https://paywithkorba.s3-eu-west-1.amazonaws.com/test-checkout.js', // replace with your XCheckout script URL
  });

  return (
    <div className="main">
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
        className="button"
      >
        Pay Now!
      </button>
    </div>
  );
}

export default App;
