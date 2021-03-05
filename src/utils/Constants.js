import * as Routes from "./routes"

export const LOGO = "betlovers."

export const HOMEPAGE = {
  HEADER_TITLE: "FOR THE PASSIONATES.",
  WRITE_ITEM_MESSAGE: "Please write item",
  SEARCH_PLACEHOLDER: "Search your team...",
  CLEAR_SEARCH: "Clear search",
  LIVE_GAMES: "LIVE GAMES"
}

export const FIXTURES = {
  NOT_STARTED: "Not Started",
  MATCH_FINISHED: "Match Finished",
  MATCH_CANCELLED: "Match Cancelled",
  SEPARATOR: "-",
  CANCELLED_SEPARATOR: "CANC"
}

export const TEAM_INFO = (teamId) => [
  {
    ID: "1",
    LABEL: "Standings",
    ROUTE: Routes.TEAM_STANDINGS_LINK(teamId)
  },
  {
    ID: "2",
    LABEL: "Last games",
    ROUTE: Routes.TEAM_LAST_FIXTURES_LINK(teamId)
  },
  {
    ID: "3",
    LABEL: "Next games",
    ROUTE: Routes.TEAM_NEXT_FIXTURES_LINK(teamId)
  }
]

export const NO_INFO_AVAILABLE = "No info available"

export const LINKS = [
  {
    id: 1,
    header: "Clubs",
    options: [
      {
        label: "...",
        route: "#"
      }
    ],
  },
  {
    id: 2,
    header: "Fixtures",
    options: [
      {
        label: "Live Games",
        route: "#"
      },
      {
        label: "Last Games",
        route: "#"
      },
      {
        label: "Next Games",
        route: "#"
      },
      {
        label: "...",
        route: "#"
      }
    ]
  },
  {
    id: 3,
    header: "Leagues",
    options: [
      {
        label: "...",
        route: "#"
      }
    ],
  },
  {
    id: 4,
    header: "Predictions",
    options: [
      {
        label: "...",
        route: "#"
      }
    ],
  }
]

export const RANK_COLORS = {
  "Promotion - Champions League (Group Stage)": "#004682",
  "Promotion": "#004682",
  "Championship Round": "#004682",
  "Semi-finals": "#004682",
  "Quarter-finals": "#004682",
  "Final Series": "#004682",
  "Next Round": "#004682",
  "Promotion - Campeonato Paulista (Play Offs)": "#004682",
  "Promotion - Copa de la Liga Profesional (Play Offs)": "#004682",
  "Final Series Play-offs": "#1EA8EC",
  "Promotion - Champions League (Qualification)": "#1EA8EC",
  "UEFA Europa League Play-off": "#1EA8EC",
  "5th-8th Place Play-offs": "#1EA8EC",
  "Promotion Play-off": "#1EA8EC",
  "Promotion - Europa League (Group Stage)": "#7F0029",
  "Promotion - Europa Conference League (Qualification)": "#b7860b",
  "Relegation Play-off": "#bd0000",
  "Relegation Round": "#ff4141",
  "Relegation": "#ff4141"
}

export const OTHER_RANK_COLORS = {
  "(Relegation)": "#bd0000",
  "Relegation -": "#ff4141"
}

export const TABLE = {
  RANK: "Rank",
  CLUB: "Club",
  MATCHES_PLAYED: {
    FULL: "Matches Played",
    ABBREVIATURE: "MP",
  },
  WIN: "Win",
  DRAW: "Draw",
  LOSS: "Loss",
  GOALS_FOR: {
    FULL: "Goals For",
    ABBREVIATURE: "GF"
  },
  GOALS_AGAINST: {
    FULL: "Goals Against",
    ABBREVIATURE: "GA"
  },
  GOALS_DIFF: {
    FULL: "Goals Difference",
    ABBREVIATURE: "GD"
  },
  POINTS: "Points"
}
