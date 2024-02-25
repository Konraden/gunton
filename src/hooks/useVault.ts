import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IVault } from '../models/vault.model';
import { API } from '../services/DataService/api.data.service';

export async function useVault(): Promise<IVault | undefined> {
  const [vault, setVault] = useState();
  const { vaultId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      //
    };

    fetch();
  });

  return vault;
}
