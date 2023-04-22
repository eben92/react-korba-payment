import {renderHook, act} from '@testing-library/react-hooks';
import useXCheckout, {ICheckoutConfig, TXCheckoutRef} from '../use-x-checkout';

// Define a mock implementation of XCheckoutRef
const mockXCheckout: TXCheckoutRef = {
  configure: jest.fn(),
  pay: jest.fn(),
  destroy: jest.fn(),
};

// Assign the mock implementation to window.XCheckout
declare global {
  interface Window {
    XCheckout: TXCheckoutRef;
  }
}

window.XCheckout = mockXCheckout;

describe('useXCheckout', () => {
  const config: ICheckoutConfig = {
    merchantID: '123',
    orderID: '456',
    description: 'Test Order',
    amount: 100,
    redirectURL: 'https://example.com/redirect',
  };
  const scriptSrc = 'https://paywithkorba.s3-eu-west-1.amazonaws.com/test-checkout.js';

  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.resetAllMocks();
  });

  it('should configure XCheckout with the provided config', () => {
    renderHook(() => useXCheckout({config, scriptSrc}));

    expect(mockXCheckout.configure).toHaveBeenCalledWith(config);
  });

  it('should call XCheckout.pay when handleXCheckoutClick is called', () => {
    const {result} = renderHook(() => useXCheckout({config, scriptSrc}));
    act(() => {
      result.current.handleXCheckoutClick();
    });

    expect(mockXCheckout.pay).toHaveBeenCalled();
  });

  it('should call XCheckout.destroy on unmount', () => {
    const {unmount} = renderHook(() => useXCheckout({config, scriptSrc}));
    unmount();

    expect(mockXCheckout.destroy).toHaveBeenCalled();
  });
});
