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
import { useXCheckout } from 'react-korba-payment';

function App() {
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
        className="button"
      >
        Pay Now!
      </button>
  );

export default App;
```

###### Next.JS 13

Next.js 13 introduces a new app/ directory folder structure. By default it uses React Server Components. To use `react-korba-payment` in those components, you need to convert them into client-side component by adding a
'use client'; at the top of your file. `react-korba-payment` only works in client-side components.

```javascript
'use client';
import React from 'react';
import { useXCheckout } from 'react-korba-payment';

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
Don't forget to [follow me on twitter](https://x.com/tswwws)!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
