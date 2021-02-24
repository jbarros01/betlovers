import HttpClient from './http-client';
import teams from './teams';
import fixtures from './fixtures';

const httpClientInstance = HttpClient.getInstance();

export const teamsAPI = teams(httpClientInstance);
export const fixturesAPI = fixtures(httpClientInstance);
