
export const BasicTypes = () => {


  const name: string = "Nilah";
  const age: number = 2;
  const isActive: boolean = true;

  const powers: string[] = ["react", "angular", "vue"];



  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} - {age} - {isActive ? "Activo" : "Inactivo"}
      <p>{powers.join(", ")}</p>
    </>
  )
}
