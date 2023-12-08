import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
  
    const loginSubmitHandler = async (values) => {
   
      const result = await authService.login(values.email, values.password);
  
      setAuth(result);

      navigate('/');
    };
  
    const registerSubmitHandler = async (values) => {

      const result = await authService.register(values.email, values.password, values.username);
  
      setAuth(result);
      
      navigate('/');
    };
  
    const logoutHandler = async () => {
    
  
      await authService.logout();
  
      setAuth({});
      
      navigate('/');
    };
  
    const values = {
      logoutHandler,
      registerSubmitHandler,
      loginSubmitHandler,
      username: auth.username,
      isAuthenticated: !!auth.email,
      userId: auth._id,
    };
  
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
