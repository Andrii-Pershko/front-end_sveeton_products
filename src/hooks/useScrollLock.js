import { useEffect } from 'react';

function useScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Повернути прокрутку при видаленні компонента
    };
  }, [isLocked]);
}

export default useScrollLock;
