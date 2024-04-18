import {useXCheckout} from 'react-korba-payment';
import './App.css';

function App() {
  const {pay} = useXCheckout({
    // replace with your Korba XCheckout script URL
    scriptSrc: 'https://testxchange.korba365.com/api/v1.0/website_checkout/', 
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
