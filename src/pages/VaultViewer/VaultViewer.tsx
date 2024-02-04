import { useLoaderData } from 'react-router-dom';
import DepositBox from '../../components/DepositBox/depositBox.component';
import { IVault } from '../../models/vault.model';
import './VaultViewer.css';

function VaultViewer() {
  const vault: IVault = useLoaderData() as IVault;

  const buildBoxes = () => {
    console.log(`found boxes: `, vault);
    return vault.depositBoxes?.map((db) => <DepositBox depositBox={db} />);
  };

  return <div className="VaultViewer">{buildBoxes()}</div>;
}

export default VaultViewer;
