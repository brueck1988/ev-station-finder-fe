import httpClient from 'modules/common/http.client';
import { EvStation } from 'modules/ev-station/ev-station.model';

export interface SearchHeroesRequestParams {
  superheroName?: string;
  superheroIds?: number[];
}

export const getEvStations = (location: string): Promise<EvStation[]> => {
  return httpClient.get(`api/v1/stations?location=${location}`).then(resp => resp.data.data);
}
