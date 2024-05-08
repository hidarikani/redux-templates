import { useState } from 'react';
import { ActionButton, TextField } from '@adobe/react-spectrum'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import * as styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <ActionButton
          onPress={() => dispatch(decrement())}
        >
          -
        </ActionButton>
        <span>{count}</span>
        <ActionButton
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </ActionButton>
      </div>
      <div className={styles.row}>
        <TextField
          label="Increment amount"
          value={incrementAmount}
          onChange={setIncrementAmount}
        />
        <ActionButton
          onPress={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </ActionButton>
        <ActionButton
          onPress={() => {
            void dispatch(incrementAsync(incrementValue));
          }}
        >
          Add Async
        </ActionButton>
        <ActionButton
          onPress={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </ActionButton>
      </div>
    </div>
  );
}
