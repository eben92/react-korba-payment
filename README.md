# react-korba-payment

This is a react library for implementing korba payment gateway

Full Documentation 👉👉 [Korba Documentation](https://xchange.korba365.com/docs/)

## Get Started

The minimum supported version of React is v16.8. If you use an older version, upgrade React to use this library.

### Install

```sh
npm i react-korba-payment
```

or with `yarn`

```sh
yarn add react-korba-payment
```

### Usage

#### Using the hooks

```javascript
import React from 'react';
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
    <div className="flex items-center justify-center h-screen">
      <button onClick={handleXCheckoutClick} className="bg-blue-500 text-white px-4 py-2">
        Pay
      </button>
    </div>
  );
}

export default App;
```

Please checkout [Korba Documentation](https://xchange.korba365.com/docs/) for more.

## Deployment

REMEMBER TO CHANGE THE `scriptSrc` TO PRODUCTION `scriptSrc` BEFORE DEPLOYING TO PRODUCTION.

## Contributing

If you would like to contribute to React Korba Payment(js),

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

Don't forget to [follow me on instagram](https://instagram.com/1rutmann)!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details




