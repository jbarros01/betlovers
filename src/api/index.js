import HttpClient from './http-client';
import teams from './teams';
import fixtures from './fixtures';
import leagues from './leagues';
import standings from './standings';

const httpClientInstance = HttpClient.getInstance();

export const teamsAPI = teams(httpClientInstance);
export const fixturesAPI = fixtures(httpClientInstance);
export const leaguesAPI = leagues(httpClientInstance);
export const standingsAPI = standings(httpClientInstance);
