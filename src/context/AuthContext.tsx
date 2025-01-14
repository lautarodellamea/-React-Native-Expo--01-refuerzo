import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
  checking = 'checking',
  authenticated = 'authenticated',
  notAuthenticated = 'not-authenticated'
}

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  status: AuthStatus;
  token?: string;
  user?: User;

  isChecking: boolean
  isAuthenticated: boolean

  loginWithEmailPassword: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps);

// Custom hook para que sea mas sencillo de usar el context
export const useAuthContext = () => useContext(AuthContext);

// Provider: esto permite que el contexto sea usado en otros componentes
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>()



  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.notAuthenticated);
    }, 1500);
  }, [])

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log(email, password)
    setUser({
      name: 'Nilah',
      email: email
    })

    setStatus(AuthStatus.authenticated)
  }

  const logout = () => {
    setUser(undefined)
    setStatus(AuthStatus.notAuthenticated)
  }


  return (
    <AuthContext.Provider value={{
      status: status,
      user: user,

      // Getter
      isChecking: status === AuthStatus.checking,
      isAuthenticated: status === AuthStatus.authenticated,

      // Metodos
      loginWithEmailPassword,
      logout

    }}>
      {children}
    </AuthContext.Provider>
  )

}