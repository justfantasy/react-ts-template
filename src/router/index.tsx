import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Layout from '@/layouts';

const modules: Record<string, { default: RouteObject[] }> = import.meta.glob(
  './modules/*.tsx',
  { eager: true },
);
const routes = Object.values(modules).reduce((acc, module) => {
  return [...acc, ...module.default];
}, [] as RouteObject[]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...routes],
  },
]);

export default router;
