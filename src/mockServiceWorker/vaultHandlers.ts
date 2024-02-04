import vaults from './responses/vaultExample.json';
import { http, HttpResponse } from 'msw';

export const vaultHandlers = [
  http.get('/vaults', ({ params }) => {
    return HttpResponse.json(vaults);
  }),
  http.get('/vault/:vaultId', ({ params }) => {
    const { vaultId } = params;
    console.log(`Fetching for Vault Id: ${vaultId}`);
    const vault = vaults.find((v) => v.vaultId === vaultId);
    console.log('found vault', vault);
    return HttpResponse.json(vault);
  })
];
