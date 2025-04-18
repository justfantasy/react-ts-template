import { useParams } from 'react-router-dom';

import { useCounterStore } from '@/store';

import styles from './index.module.scss';

export default function Index() {
  const { id } = useParams();
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <>
      <div className={styles.red}>这是详情页面{id}</div>
      <div>{count}</div>
      <button onClick={() => increment(100)}>点我+100</button>
    </>
  );
}
