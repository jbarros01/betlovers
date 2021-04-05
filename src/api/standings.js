/* eslint-disable import/no-anonymous-default-export */
export default client => {
  const standingsPath = 'standings';

  const getStandings = async query => {
    try {
      const { data: { response } } = await client.get(`${standingsPath}${query}`)

      return response[0].league.standings[0];
    } catch (e) {
      return e;
    }
  };

  return { getStandings };
};
