export interface CreateUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  password: string;
}

export interface CreateUserResponse {
  token: string;
  type: string;
}