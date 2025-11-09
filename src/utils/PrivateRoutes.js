import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        const position = sessionStorage.getItem("position");
        if (position) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);


    if (auth === null) {
        return <div>Loading...</div>;
    }

    return auth ? <Outlet /> : <Navigate to="/login" />;
}

