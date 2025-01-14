import './App.css'
import { FormsPage } from './components/FormPage'
import { AuthProvider } from './context/AuthContext'
// import { BasicTypes } from './typescript/BasicTypes'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicFunctions } from './typescript/BasicFunctions'
// import { Counter } from './components/Counter'
// import { LoginPage } from './components/LoginPage'
// import { UsersPage } from './components/UserPage'

function App() {

  return (
    <AuthProvider>
      <div className='flex flex-col justify-center items-center h-svh'>
        <h1 className='text-4xl mb-5'>React + TypeScript</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App
