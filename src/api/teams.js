/* eslint-disable import/no-anonymous-default-export */
export default client => {
  const path = 'teams';

  const searchTeam = async name => {
    try {
      const { data: { api: { teams }} }  = await client.get(`${path}/search/${name}`)

      return teams;
    } catch (e) {
      return e;
    }
  };

  return { searchTeam };
};
