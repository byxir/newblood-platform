import { type NextPage } from "next";
import { tourneys } from "../utils/tempdata";

import { trpc } from "../utils/trpc";

const Scrims: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="grid h-screen w-full items-center justify-items-center">
      <div className="grid w-full grid-rows-[max-content_max-content] justify-items-center gap-16 py-8">
        <div className="text-center text-5xl lg:text-6xl">UPCOMING SCRIMS</div>
        <div className="w-11/12 max-w-5xl border-t-2 border-subline not-italic">
          {tourneys.map((tourney) => (
            <div
              className="md: grid gap-3 border-b-2 border-subline p-5 lg:grid-rows-[max-content_max-content] lg:gap-7 xl:h-44 xl:grid-cols-[22%_56%_16%] xl:grid-rows-1"
              key={tourney.id}
            >
              <div className="grid h-full items-center lg:row-span-2 xl:row-span-1">
                <img src={tourney.image} />
              </div>
              <div className="grid">
                <div className="pt-3 text-3xl font-light">
                  {tourney.title} {tourney.titleDate}
                </div>
                <div className="text-lg text-subtext">
                  {tourney.descriptionDate} {tourney.description}
                </div>
              </div>
              <div className="grid grid-rows-[max-content_max-content] content-center justify-items-center gap-2 pt-3 lg:col-start-2 lg:gap-4 lg:justify-self-start lg:pt-0 xl:col-start-3 xl:justify-self-center">
                <div className="text-xl font-bold">{tourney.price}</div>
                <div className="grid h-10 w-36 grid-cols-[max-content_max-content] items-center justify-center justify-items-center gap-1 bg-redAccent">
                  <p>О турнире</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Scrims;
