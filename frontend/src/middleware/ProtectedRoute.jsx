import {Navigate, Outlet} from 'react-router-dom';

export const ProtectedRoute = ({isAllowed}) => {

    return (
        isAllowed ? <Outlet/> : <Navigate to="/login"/>
    );
};