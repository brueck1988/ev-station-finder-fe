export interface EvStation {
  id: number;
  type: string;
  attributes: {
    name: string
    distance: number,
    status: string,
    hours: string,
    ev_network: string,
    street_address: string,
    city: string,
    state: string,
    zip_code: number,
    api_id: number,
    is_favorited: string
  };
}
// ToDo: Consider properly inserting JSON into object by renaming with camelCase and eliminating attributes hash