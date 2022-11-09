import { List } from '@mantine/core';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

// 가맹용 페이지의 Nav는 다음과 같다
export const subHomeNavState = atom({
  key: 'subHomeNavState', // unique ID (with respect to other atoms/selectors)
  default: 'Search', // default value (aka initial value)
});

// interface order {
//  id, menu_item(options), num, order_time, order_date, order_table, order_state
// }
export const orderQueue = atom({
  key: 'orderQueue', // unique ID (with respect to other atoms/selectors)
  default: [],// default value (aka initial value)
})