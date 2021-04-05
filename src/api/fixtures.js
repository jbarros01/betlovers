/* eslint-disable import/no-anonymous-default-export */
export default client => {
  const path = 'fixtures';

  const getTeamLastFixtures = async (teamId, quantity = 10) => {
    try {
      const { data: { response: fixtures }} = await client.get(`${path}/team/${teamId}/last/${quantity}`)

      return fixtures;
    } catch (e) {
      return e;
    }
  };

  const getTeamNextFixtures = async (teamId, quantity = 10) => {
    try {
      const { data: { response: fixtures }} = await client.get(`${path}/team/${teamId}/next/${quantity}`)

      return fixtures;
    } catch (e) {
      return e;
    }
  };

  const getLiveFixtures = async () => {
    try {
      const { data: { response: fixtures }} = await client.get(`${path}?live=all`)

      return fixtures;
    } catch (e) {
      return e;
    }
  };

  return { getTeamLastFixtures, getTeamNextFixtures, getLiveFixtures };
};
