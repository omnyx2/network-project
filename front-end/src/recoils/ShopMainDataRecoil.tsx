import { List } from '@mantine/core';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { mainRoutesList } from '../RouteManifast';


const data = {
    francchi: 2
}

export const ShopMainDataRecoil = atom({
    key: 'ShopMainDataRecoil', // unique ID (with respect to other atoms/selectors)
    default: data, // default value (aka initial value)
});
  