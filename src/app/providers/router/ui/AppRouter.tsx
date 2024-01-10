import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";
import {Suspense} from "react";

interface AppRouterProps {
    className?: string;
}
export const AppRouter = () => {
    
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Routes>
                {
                    Object.values(RouteConfig)
                        .map(({path, element}) => (
                            <Route
                                key={path}
                                path={path}
                                element = {element}
                            />
                        ))}
            </Routes>
        </Suspense>
    );
};