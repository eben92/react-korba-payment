export type XCheckoutConfigProps = {
    merchantID: string;
    orderID: string;
    description?: string;
    amount: number;
    redirectURL: string;
};
export type XCheckoutRefProps = {
    configure: (config: XCheckoutConfigProps) => void;
    pay: () => void;
    destroy: () => void;
};
export interface XCheckoutHooksReturnProps {
    pay: (config: XCheckoutConfigProps) => void;
    isXCheckoutLoaded: boolean;
}
declare global {
    interface Window {
        XCheckout: XCheckoutRefProps;
    }
}
export type UseXCheckoutProps = {
    scriptSrc: string;
};
