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

###### React.JS

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

###### Next.JS 13

Next.js 13 introduces a new app/ directory folder structure. By default it uses React Server Components. To use `react-korba-payment` in those components, you need to convert them into client-side component by adding a
'use client'; at the top of your file. `react-korba-payment` only works in client-side components.

```javascript
'use client';
import React from 'react';
import {useXCheckout} from 'react-korba-payment';

function CheckoutButton() {
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
    <button onClick={handleXCheckoutClick} className="bg-blue-500 text-white px-4 py-2">
      Pay
    </button>
  );
}

export default CheckoutButton;
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
