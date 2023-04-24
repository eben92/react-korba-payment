import {useXCheckout} from 'react-korba-payment';

function App() {
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
    <div className="main">
      <button onClick={handleXCheckoutClick} className="button">
        Pay Now!
      </button>
    </div>
  );
}

export default App;
