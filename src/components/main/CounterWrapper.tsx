import React from 'react';
import Counter from './Counter';

export default function CountWrapper() {
  return (
    <div id="countWrapper" className="count_wrapper">
      <Counter target={12147} duration={2000} />
      <Counter target={9583} duration={2000} />
      <Counter target={5345} duration={2000} />
      <Counter target={14344} duration={2000} />
    </div>
  );
}
