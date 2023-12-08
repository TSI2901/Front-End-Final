import { useContext, useEffect } from "react"

import AuthContext from "../../context/authContext"

export default function Logout() {
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        logoutHandler()
    }, []);

    return null;
}   
    