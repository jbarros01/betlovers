/* eslint-disable import/no-anonymous-default-export */
export default client => {
  const path = 'teams';

  const searchTeam = async name => {
    try {
      const { data: { response: teams } }  = await client.get(`${path}?search=${name}`)

      return teams;
    } catch (e) {
      return e;
    }
  };

  const getTeam = async teamId => {
    try {
      const { data: { response: teams } }  = await client.get(`${path}/team/${teamId}`)

      return teams[0];
    } catch (e) {
      return e;
    }
  };

  return { searchTeam, getTeam };
};
