import data from './responses/bwexport.json';
import { http, HttpResponse } from 'msw';

export const localDataHandler = [
  http.get('/localData', () => {
    console.debug('Fetching Local Data');

    return HttpResponse.json(data);
  })
];
