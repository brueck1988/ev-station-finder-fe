import httpClient from 'modules/common/http.client';
import { CreateUserResponse, CreateUserRequest } from 'modules/user/user.models';

export const signUpUser = (createUserRequest: CreateUserRequest): Promise<CreateUserResponse> => {
  return httpClient.post(`api/v1/users`, createUserRequest).then(resp => resp.data.data);
}
