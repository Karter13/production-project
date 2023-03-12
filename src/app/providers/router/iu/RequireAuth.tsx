import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePAth } from 'shared/config/routerConfig/routeConfig';

export function RequireAuth({ children }: {children: JSX.Element}) {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={RoutePAth.main} state={{ from: location }} replace />;
    }

    return children;
}
