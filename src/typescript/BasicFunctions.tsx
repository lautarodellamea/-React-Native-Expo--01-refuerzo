
// si tenemos una funcion que no depende de ningun hook podemos ponerla de esta manera afuera
// de eseta forma si se renderiza el componente no se crea de nuevo una asignacion en memoria de la funcion
const addTwoNumbers = (a: number, b: number): number => {
  return a + b
}

export const BasicFunctions = () => {


  return (
    <>
      <h3>Funciones Basicas</h3>
      <p>El resultado es de sumar 3 y 5 es: {addTwoNumbers(3, 5)}</p>
    </>
  )
}
