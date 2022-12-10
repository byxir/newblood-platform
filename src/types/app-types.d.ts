//types for tourneys & scrims: scheduled and completed (also ongoing)

type IScheduledTourney = {
  id: string;
  image: string;
  title: string;
  titleDate: string;
  description: string;
  descriptionDate: string;
  price: string;
};

type ITourney = {
  id: string;
  image: string;
  title: string;
  description: string;
  compactDate: string;
  additionalInfo?: string;

  matches: Array<{
    id: string;

    teamPerformances: Array<{
      id: string;
      teamName: string;
      place: number;

      kills: Array<{
        player: string;
        amount: number;
      }>;

      killsTotal: number;

      ptsDeltas: Array<{
        id: string;
        playerName: string;
        ptsDelta: number;
      }>;

      ptsDeltaTotal: number;
    }>;
  }>;

  tourneyPtsDeltas: Array<{
    id: string;
    teamName: string;
    ptsDelta: number;
  }>;
};

//types for players: inline and full page

type IPlayer = {
  id: string;
  image: string;
  name: string;
  teamName: string;
  placement: number;
  pts: number;
  mainLegend: string;

  infoCards: Array<string>;
};

type IPlayerFull = {
  basicInfo: IPlayer;

  clips: Array<string>;
  achievements: Array<string>;

  history: Array<ITourney>;
};

//types for teams: inline and full page

type ITeam = {
  id: string;
  image?: string;
  name: string;
  placement: number;
  pts: number;
  players: Array<IPlayer>;
};

type ITeamFull = {
  basicInfo: ITeam;

  banner?: string;

  history: Array<ITourney>;
};
