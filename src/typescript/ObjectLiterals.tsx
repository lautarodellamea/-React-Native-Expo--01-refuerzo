
export const ObjectLiterals = () => {

  interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address
  }

  interface Address {
    country: string;
    houseNo: number;
    street: string;
  }

  const person: Person = {
    age: 2,
    firstName: "Nilah",
    lastName: "Della Mea",
    address: {
      country: "Noruega",
      houseNo: 2,
      street: "Calle 1"
    }

  }



  return (
    <>
      <h3>Objectos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  )
}
