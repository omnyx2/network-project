import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function RecoilRootProvider({children}) {
  return (
    <RecoilRoot>
    { children }
    </RecoilRoot>
  );
}

export default RecoilRootProvider;

