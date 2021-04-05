export const HOME = '/';
export const TEAM_INFO = '/teams/:teamId/info';
export const TEAM_INFO_LINK = teamId => `/teams/${teamId}/info`;
export const TEAM_FIXTURES = '/teams/:teamId/fixtures';
export const TEAM_FIXTURES_LINK = teamId => `/teams/${teamId}/fixtures`;
export const TEAM_LAST_FIXTURES = '/teams/:teamId/fixtures/last';
export const TEAM_LAST_FIXTURES_LINK = teamId => `/teams/${teamId}/fixtures/last`
export const TEAM_NEXT_FIXTURES = '/teams/:teamId/fixtures/next';
export const TEAM_NEXT_FIXTURES_LINK = teamId => `/teams/${teamId}/fixtures/next`
export const TEAM_STANDINGS = `/teams/:teamId/standings`
export const TEAM_STANDINGS_LINK = teamId => `/teams/${teamId}/standings`
