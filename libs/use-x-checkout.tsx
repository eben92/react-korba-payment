import React, {useEffect, useRef} from 'react';

export type ICheckoutConfig = {
  merchantID: string;
  orderID: string;
  description: string;
  amount: number;
  redirectURL: string;
};

export type TXCheckoutRef = {
  configure: (config: ICheckoutConfig) => void;
  pay: () => void;
  destroy: () => void;
};

interface ICheckoutHooks {
  handleXCheckoutClick: () => void;
}

declare global {
  interface Window {
    XCheckout: TXCheckoutRef;
  }
}

type TUseXCheckoutProps = {
  config: ICheckoutConfig;
  scriptSrc: string;
};

export default function useXCheckout({config, scriptSrc}: TUseXCheckoutProps): ICheckoutHooks {
  const xcheckoutRef = useRef<TXCheckoutRef | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => {
      xcheckoutRef.current = window.XCheckout;
      xcheckoutRef.current.configure(config);
    };
    document.head.appendChild(script);

    return () => {
      if (xcheckoutRef.current !== null && typeof xcheckoutRef.current.destroy === 'function') {
        xcheckoutRef.current.destroy();
        xcheckoutRef.current = null;
      }
      document.head.removeChild(script);
    };
  }, [config, scriptSrc]);

  const handleXCheckoutClick = (): void => {
    if (xcheckoutRef.current !== null) {
      xcheckoutRef.current.pay();
    } else {
      console.warn('XCheckout library is not yet loaded');
    }
  };

  return {handleXCheckoutClick};
}
