import axios from 'axios';
import { ResponseSearchUsers } from '../model/UserState';

class GithubUserService {
  findUsers = (login: string): Promise<ResponseSearchUsers> => {
    return axios
      .get<ResponseSearchUsers>(`https://api.github.com/search/users?q=${login}`)
      .then((response) => response.data);
  };
}

export default new GithubUserService();
