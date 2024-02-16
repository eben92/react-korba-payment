export type XCheckoutConfigProps = {
  /**
   * Your merchant ID.
   * @see [Korba Documentation](https://xchange.korba365.com/docs/#xcheckout)
   */
  merchantID: string;

  /**
   * Unique order ID.
   */
  orderID: string;

  /**
   * Optional description of the order.
   */
  description?: string;

  /**
   * The amount to be paid in GH₵.
   */
  amount: number;

  /**
   * The URL to redirect to after payment.
   */
  redirectURL: string;
};

export type XCheckoutRefProps = {
  configure: (config: XCheckoutConfigProps) => void;
  pay: () => void;
  destroy: () => void;
};

export interface XCheckoutHooksReturnProps {
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
   */
  pay: (config: XCheckoutConfigProps) => void;

  /**
   * A boolean flag indicating whether the XCheckout library is loaded.
   */
  isXCheckoutLoaded: boolean;
}

declare global {
  interface Window {
    XCheckout: XCheckoutRefProps;
  }
}

export type UseXCheckoutProps = {
  /**
   * The URL of the XCheckout script.
   * @see [Korba Documentation](https://xchange.korba365.com/docs/#xcheckout)
   */
  scriptSrc: string;
};
