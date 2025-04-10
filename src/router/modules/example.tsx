import { lazy } from 'react';

// 注意，如果直接写到element处会导致router/index.tsx中的children报错，应该是类型不符
const Index = lazy(() => import('@/pages/Example/Index'));
const View = lazy(() => import('@/pages/Example/View'));

export default [
  {
    path: 'examples',
    element: <Index />,
  },
  {
    path: 'example/:id',
    element: <View />,
  },
];
