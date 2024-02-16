import type { XCheckoutHooksReturnProps, UseXCheckoutProps } from './types';
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
export default function useXCheckout({ scriptSrc }: UseXCheckoutProps): XCheckoutHooksReturnProps;
