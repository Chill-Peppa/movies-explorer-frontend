import React from 'react';

//пользовательский хук изменения ширины экрана (для пагинации)
const useResize = () => {
  const [size, setSize] = React.useState({ width: 0 });

  React.useEffect(() => {
    const handleGetWidth = () => {
      setSize({ width: window.innerWidth });
    };

    handleGetWidth();

    window.addEventListener('resize', handleGetWidth);
    //удаляем листнер, чтобы их не вешалось миллион
    return () => {
      window.removeEventListener('resize', handleGetWidth);
    };
  }, []);

  console.log('window width:', size);
  return size;
};

export default useResize;
