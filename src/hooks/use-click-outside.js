import { useEffect, useState } from 'react';

export function useClickOutside(ref, callback) {
    useEffect(() => {
        if (!ref?.current) {
            return;
        }

        function clickHandler(e) {
            if (!ref) return;

            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }

        document.addEventListener('mousedown', clickHandler);

        return () => {
            document.removeEventListener('mousedown', clickHandler);
        }
    }, [ref, callback]);
}
