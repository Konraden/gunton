import { useLoaderData } from 'react-router-dom';
import { DepositBox } from '../../models/depositBox.model';
import './Home.css';

function Home() {
  const depositBox: DepositBox = useLoaderData() as DepositBox;

  return (
    <div className="Home">
      Home Page!
      {depositBox.items.map((s) => (
        <div>{s.name}</div>
      ))}
    </div>
  );
}

export default Home;
