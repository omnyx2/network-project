import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
 

const orderData = [];
export const OrderAllDataRecoil = atom({
    key: 'OrderAllDataRecoil', // unique ID (with respect to other atoms/selectors)
    default: orderData, // default value (aka initial value)
});
  