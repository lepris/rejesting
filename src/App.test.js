import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { sum } from '../src/components/math';

describe('Examining the syntax of Jest tests', () => {
  test('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });
});