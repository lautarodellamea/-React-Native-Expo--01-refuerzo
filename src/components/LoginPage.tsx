import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { user, isChecking, isAuthenticated, loginWithEmailPassword, logout } = useAuthContext();

  if (isChecking) return <h3>Verificando sesion...</h3>;


  return (
    <>
      {
        isAuthenticated
          ? (
            <>
              <h3>Autenticado, Bienvenido</h3>
              <pre>
                {JSON.stringify(user, null, 2)}
              </pre>
              <button onClick={() => logout()} className="bg-blue-500 p-2 text-white rounded-xl mt-2">Cerrar sesion</button>
            </>

          )
          : (
            <>
              <h3>Ingresar a la aplicacion</h3>
              <button onClick={() => loginWithEmailPassword('nilah@example.com', '123456')} className="bg-blue-500 p-2 text-white rounded-xl mt-2">Ingresar</button>
            </>

          )
      }

      <span>{status}</span>
    </>
  )
}
