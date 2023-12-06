import {
  lazy,
  LazyExoticComponent,
  Fragment,
  Suspense,
  ReactNode
} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

interface GuardProps {
  children: ReactNode;
}

interface RouteObject {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
  children?: RouteObject[];
  guard?: LazyExoticComponent<(props: GuardProps) => JSX.Element> | undefined;
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazy(async () => await import('@/layouts/DashboardLayout')),
    children: [
      {
        path: '',
        element: lazy(async () => await import('@/pages/Home'))
      },
      {
        path: '/user/:id',
        element: lazy(async () => await import('@/pages/User'))
      }
    ],
    guard: lazy(async () => await import('@/guards/AuthGuard'))
  },
  {
    path: '/login',
    element: lazy(async () => await import('@/pages/Login'))
  },
  {
    path: '/signup',
    element: lazy(async () => await import('@/pages/Signup'))
  },
  {
    path: '*',
    element: lazy(async () => await import('@/pages/NotFound'))
  }
];

const renderRoutes = (routes: RouteObject[]) => {
  return routes.map(({ path, element, children, guard }) => {
    const Element = element || Fragment;
    const Guard = guard || Fragment;
    return (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<CircularProgress />}>
            <Guard>
              <Element />
            </Guard>
          </Suspense>
        }
      >
        {children && renderRoutes(children)}
      </Route>
    );
  });
};

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
