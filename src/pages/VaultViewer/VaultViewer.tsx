import { useLoaderData, useParams, useState } from 'react-router-dom';
import DepositBox from '../../components/DepositBox/depositBox.component';
import { IVault } from '../../models/vault.model';
import { useVault } from '../../hooks/useVault';
import './VaultViewer.css';
import { useEffect } from 'react';
import { API } from '../../services/DataService/api.data.service';

function VaultViewer() {
  const [vault, setVault] = useState();
  const { vaultId } = useParams();

  useEffect(() => {
    const v = await API.GET(`/vault/${vaultId}`);
    setVault(v);
  });

  const buildBoxes = () => {
    console.log(`found boxes: `, vault);
    return vault?.depositBoxes?.map((db, idx) => (
      <DepositBox depositBox={db} key={idx} />
    ));
  };

  return <div className="VaultViewer">{buildBoxes()}</div>;
}

export default VaultViewer;
