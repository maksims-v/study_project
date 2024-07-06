import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className={styles.btn}>{count}</div>
      <button onClick={increment}>Жми</button>
    </>
  );
};
export default Counter;
