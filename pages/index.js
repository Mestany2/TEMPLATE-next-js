// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';

import Counter from '../components/Counter';

function Home() {
  const myAnimals = [{ animalName: 'Elephant' }, { animalName: 'Cat' }, { animalName: 'Dog' }];

  return (
    <>
      <h1>Animal Counter</h1>
      {myAnimals.map((animal) => (
        <Counter theName={animal.animalName} />))}
    </>
  );
}

export default Home;
