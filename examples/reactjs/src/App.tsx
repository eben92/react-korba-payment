import React from 'react';
import {useXCheckout} from 'react-korba-payment/libs';

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
    <div className="flex items-center justify-center h-screen">
      <button onClick={handleXCheckoutClick} className="bg-blue-500 text-white px-4 py-2">
        Pay
      </button>
    </div>
  );
}

export default App;
