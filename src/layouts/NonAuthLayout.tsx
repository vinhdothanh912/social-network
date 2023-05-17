import { Navigate, Outlet } from 'react-router-dom';

import { RoutePaths } from 'src/routes/routes-constants';

interface IProps {
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

const NonAuthLayout = ({ children, isAuthenticated }: IProps) => {
  if (isAuthenticated) return <Navigate to={RoutePaths.HOME} />;

  return (
    <>
      {children} <Outlet />
    </>
  );
};

export default NonAuthLayout;
