export type ICheckoutConfigProps = {
  merchantID: string;
  orderID: string;
  description: string;
  amount: number;
  redirectURL: string;
};

export type TXCheckoutRefProps = {
  configure: (config: ICheckoutConfigProps) => void;
  pay: () => void;
  destroy: () => void;
};

export interface ICheckoutHooksProps {
  handleXCheckoutClick: () => void;
}

declare global {
  interface Window {
    XCheckout: TXCheckoutRefProps;
  }
}

export type TUseXCheckoutProps = {
  config: ICheckoutConfigProps;
  scriptSrc: string;
};
