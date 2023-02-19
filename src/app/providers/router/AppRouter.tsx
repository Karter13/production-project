import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (

    <Routes>
        {
            Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))
        }
    </Routes>

);

export default AppRouter;
