import { Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    
    if (!token) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" state={{ from: window.history.location }} />
    }
    // authorized so return child components
    return children;
}