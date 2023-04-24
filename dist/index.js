'use strict';

var react = require('react');

function useXCheckout({ config, scriptSrc }) {
    const xcheckoutRef = react.useRef(null);
    react.useEffect(() => {
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
    const handleXCheckoutClick = () => {
        if (xcheckoutRef.current !== null) {
            xcheckoutRef.current.pay();
        }
        else {
            console.warn('XCheckout library is not yet loaded');
        }
    };
    return { handleXCheckoutClick };
}

exports.useXCheckout = useXCheckout;
//# sourceMappingURL=index.js.map