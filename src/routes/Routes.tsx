import { Suspense } from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { NonAuthLayout } from 'src/layouts';
import { getItem } from 'src/utils/storage-utils';
import { EAuthToken } from 'src/variables/enums/storage';
import { RoutePaths } from './routes-constants';

// non-auth pages
import LoginPage from 'src/pages/login/LoginPage';
import RegisterPage from 'src/pages/register/RegisterPage';

// auth pages
// import HomePage from 'src/pages/home/HomePage';

const Routes = () => {
  const accessToken = getItem(EAuthToken.ACCESS_TOKEN);

  return (
    <Suspense>
      <ReactRoutes>
        {/* public route */}

        {/* non auth */}
        <Route element={<NonAuthLayout isAuthenticated={!!accessToken} />}>
          <Route path={RoutePaths.LOGIN} element={<LoginPage />} />
          <Route path={RoutePaths.REGISTER} element={<RegisterPage />} />
          <Route path="*" element={<LoginPage />} />
        </Route>

        {/*auth */}
        {/* <Route element={<AuthLayout isAuthenticated={!!accessToken} />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route> */}
      </ReactRoutes>
    </Suspense>
  );
};

export default Routes;
