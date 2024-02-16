import {useEffect, useRef, useState} from 'react';
import type {
  XCheckoutRefProps,
  XCheckoutHooksReturnProps,
  UseXCheckoutProps,
  XCheckoutConfigProps,
} from './types';

/**
 * Custom hook for integrating Korba XCheckout into a React component.
 *
 * @param scriptSrc - The source URL of the XCheckout script.
 * @returns An object containing the `pay` function and a boolean indicating whether XCheckout is loaded.
 *
 * @example
 * import { useXCheckout } from 'react-korba-payment';
 *
 * const { pay, isXCheckoutLoaded } = useXCheckout({ scriptSrc: 'https://paywithkorba.s3-eu-west-1.amazonaws.com/test-checkout.js' }); // replace with your XCheckout script URL
 *
 * @see UseXCheckoutProps
 * @see XCheckoutHooksReturnProps
 *
 * @see [Package Documentation](https://github.com/eben92/react-korba-payment#readme)
 * @see [Korba Documentation](https://xchange.korba365.com/docs/#xcheckout)
 */
export default function useXCheckout({scriptSrc}: UseXCheckoutProps): XCheckoutHooksReturnProps {
  const xCheckoutRef = useRef<XCheckoutRefProps | null>(null);
  const [isXCheckoutLoaded, setIsXCheckoutLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => {
      xCheckoutRef.current = window.XCheckout;
    };

    const handleScriptLoad = () => {
      xCheckoutRef.current = window.XCheckout;
      setIsXCheckoutLoaded(true);
    };

    script.addEventListener('load', handleScriptLoad);
    document.head.appendChild(script);

    return () => {
      if (xCheckoutRef.current !== null && typeof xCheckoutRef.current.destroy === 'function') {
        xCheckoutRef.current.destroy();
        xCheckoutRef.current = null;
      }
      document.head.removeChild(script);

      setIsXCheckoutLoaded(false);
    };
  }, []);

  /**
   * Executes the XCheckout process with the provided configuration.
   * If the XCheckout library is not yet loaded, a warning message is logged.
   * @param config - The configuration object for XCheckout.
   * @returns void
   * @example
   * const config = {
   *  merchantID: 'merchant-id', // your merchant ID.
   *  orderID: 'order-id', // unique order ID
   *  description: 'description', // optional
   *  amount: 100, // in GH₵
   *  redirectURL: 'https://example.com/redirect',
   * };
   * onXCheckout(config);
   * @see XCheckoutConfigProps
   *
   */
  const pay = (config: XCheckoutConfigProps): void => {
    if (xCheckoutRef.current !== null) {
      xCheckoutRef.current.configure(config);

      xCheckoutRef.current.pay();
      return;
    }

    console.warn('XCheckout library is not yet loaded');
  };

  return {pay, isXCheckoutLoaded};
}
