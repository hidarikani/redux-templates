import { useState } from 'react';
import { ActionButton, TextField } from '@adobe/react-spectrum';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <ActionButton onPress={() => dispatch(decrement())}>-</ActionButton>
        <span>{count}</span>
        <ActionButton
          aria-label="Increment value"
          onPress={() => dispatch(increment())}
        >
          +
        </ActionButton>
      </div>
      <div>
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
        <ActionButton onPress={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </ActionButton>
      </div>
    </div>
  );
}
