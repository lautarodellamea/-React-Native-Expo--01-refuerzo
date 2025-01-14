import { useEffect, useRef, useState } from 'react';
import { User } from '../interfaces/reqres.response';
import { loadUsersAction } from '../actions/load-users.action';


export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1); // si quisieramos usar y mostrar la pagina en el componente si usariamos un useState ya que este dispara la rerenderizacion, el useRef no

  useEffect(() => {
    loadUsersAction(1).then(setUsers);
  }, []);

  /* MI FORMA */
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const users = await loadUsersAction(1);
  //     setUsers(users);
  //   };

  //   fetchUsers();
  // }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsersAction(currentPageRef.current);

    // verifico porque al hacer la peticion me devuelve un array vacio cuando no hay usuarios
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;

    const users = await loadUsersAction(currentPageRef.current);
    setUsers(users);
  };

  return {
    users,

    nextPage,
    prevPage,
  };
};