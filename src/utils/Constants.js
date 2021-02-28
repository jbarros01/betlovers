import * as Routes from "./routes"

export const LOGO = "betlovers."

export const HOMEPAGE = {
  HEADER_TITLE: "FOR THE PASSIONATES.",
  WRITE_ITEM_MESSAGE: "Please write item",
  SEARCH_PLACEHOLDER: "Search your team..."
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
        label: "Last Matches",
        route: "#"
      },
      {
        label: "Next Matches",
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
