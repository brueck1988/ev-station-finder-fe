import httpClient from 'modules/common/http.client';
import { EvStation } from 'modules/ev-station/ev-station.model';

export const getEvStations = (location: string): Promise<EvStation[]> => {
  return httpClient.get(`api/v1/stations?location=${location}`).then(resp => resp.data.data as EvStation[]); //ToDo: consider refactor of .data.data
}
