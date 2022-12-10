import { teams } from "../utils/tempdata";

const Teams = () => {
  return (
    <div className="max-w-8xl md:p-6 lg:p-8 xl:p-11">
      <div className="mb-16 text-6xl">Team Leaderboard</div>
      <div className="grid grid-cols-3 gap-14 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <div
            className="group grid w-96 cursor-pointer grid-rows-[max-content_auto] border-2 border-focusElement p-6 hover:bg-focusElement hover:text-bg lg:h-64"
            key={team.id}
          >
            <div className="grid grid-cols-[max-content_auto] gap-x-6 border-b-2 border-focusElement pb-6 group-hover:border-bg">
              <div className="grid h-32 w-32 items-center justify-items-center rounded-full bg-focusElement group-hover:bg-bg">
                {team.image ? (
                  <img
                    src={team.image}
                    alt="team profile picture"
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <div className="relative grid grid-cols-1 grid-rows-1">
                    <img
                      src="../../apexiconblack.png"
                      alt="team profile picture"
                      className="group-hover:none row-span-1 grid h-20 w-20"
                    />
                    <img
                      src="../../apexiconwhite.png"
                      alt="team profile picture"
                      className="absolute row-span-1 hidden h-20 w-20 group-hover:block"
                    />
                  </div>
                )}
              </div>
              <div className="items-between grid grid-rows-[max-content_max-content_max-content] content-between">
                <div className="grid h-8 grid-cols-[max-content_max-content] items-center gap-2">
                  <div className="h-8 w-8">
                    <img
                      src={
                        team.players[0]?.image
                          ? team.players[0].image
                          : "../../profileicon.png"
                      }
                      alt="player 3 profile picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>{team.players[0]?.name}</div>
                </div>
                <div className="grid h-8 grid-cols-[max-content_max-content] items-center gap-2">
                  <div className="h-8 w-8">
                    <img
                      src={
                        team.players[1]?.image
                          ? team.players[1].image
                          : "../../profileicon.png"
                      }
                      alt="player 3 profile picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>{team.players[1]?.name}</div>
                </div>
                <div className="grid h-8 grid-cols-[max-content_140px] items-center gap-2">
                  <div className="h-8 w-8">
                    <img
                      src={
                        team.players[2]?.image
                          ? team.players[2].image
                          : "../../profileicon.png"
                      }
                      alt="player 3 profile picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>{team.players[2]?.name}</div>
                </div>
              </div>
            </div>
            <div className="mt-2 grid w-full grid-cols-[max-content_max-content] items-center justify-between">
              <div className="text-3xl">{team.name}</div>
              <span className="text-2xl">
                {team.pts}
                <span className="text-lg">pts</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
