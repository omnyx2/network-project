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


const data = [
    {
      title: "Best forests to visit in North America",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      
      article: "ayho"
    },
    {
      title: "Hawaii beaches review: better than you think",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      
      article: "하은이"
    },
    {
      title: "Mountains at night: 12 best locations to enjoy the view",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      
      article: "바부팅이"
      
    },
    {
      title: "Aurora in Norway: when to visit for best experience",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      
      article: "히히"
    },
    {
      title: "Best places to visit this winter",
      category: "Tourism",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      
      article: "사랑해"
    },
    {
      title: "Active volcanos reviews: travel at your own risk",
      category: "Tature",
      image:
        "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      
      article: "요~ 좋다"
    },
  ];



export const ShopOuterCardState = atom({
    key: 'ShopinnerCardState', // unique ID (with respect to other atoms/selectors)
    default: data, // default value (aka initial value)
});
  