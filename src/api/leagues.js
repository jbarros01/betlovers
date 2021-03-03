/* eslint-disable import/no-anonymous-default-export */
export default client => {
  const leaguesPath = 'leagues';
  const leagueTablePath = 'leagueTable';

  const getTeamLeagues = async teamId => {
    try {
      const { data: { api: { leagues }} }  = await client.get(`${leaguesPath}/team/${teamId}`)

      return leagues;
    } catch (e) {
      return e;
    }
  };

  const getLeagueStandings = async leagueId => {
    try {
      const { data: { api: { standings }} }  = await client.get(`${leagueTablePath}/${leagueId}`)

      return standings[0];
    } catch (e) {
      return e;
    }
  };

  return { getTeamLeagues, getLeagueStandings };
};
