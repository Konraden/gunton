import { Button } from '@nextui-org/react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ListView from '../../components/ListView/listView.component';
import { ColumnMap } from '../../models/columnMap.model';
import { IVault } from '../../models/vault.model';
import './Home.css';

function Home() {
  const vaults: IVault[] = useLoaderData() as IVault[];
  const navigate = useNavigate();

  const buildHeaders = () => {
    const headers: ColumnMap[] = [];
    headers.push({
      displayValue: 'Vault Name',
      valueProperty: 'vaultName'
    });
    headers.push({
      displayValue: 'Number of Secrets',
      valueProperty: 'depositBoxes',
      transformer: (items) => items?.length ?? 0
    });
    headers.push({
      displayValue: 'Open Vault',
      transformer: (vault: IVault) => (
        <Button
          onPress={() => {
            navigate(`/vault/${vault.vaultId}`);
          }}
        >
          Open Vault
        </Button>
      )
    });

    return headers;
  };

  const buildVaultList = () => {
    return <ListView headers={buildHeaders()} data={vaults} />;
  };

  const buildHomePage = () => {
    return <div>{buildVaultList()}</div>;
  };

  return buildHomePage();
}

export default Home;
