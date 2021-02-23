import HttpClient from './http-client';
import teams from './teams';

const httpClientInstance = HttpClient.getInstance();

export const teamsAPI = teams(httpClientInstance);
