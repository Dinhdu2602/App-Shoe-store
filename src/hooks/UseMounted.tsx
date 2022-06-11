import { useEffect } from 'react'; 3K (gzipped: 1.3K)
import { useRef } from 'react'; 3K (gzipped: 1.3K)

export const UseMounted = () => {
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
};