import { lazy } from 'react';

const View = lazy(() => import('@/pages/Github/View'));

export default [
  {
    path: 'github/:user/:id',
    element: <View />,
  },
];
