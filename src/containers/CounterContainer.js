import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={useCallback(() => dispatch(increase()), [dispatch])}
      onDecrease={useCallback(() => dispatch(decrease()),[dispatch])}
    />
  );
};

export default CounterContainer;
