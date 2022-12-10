import { type NextPage } from "next";
import { scrims } from "../utils/tempdata";

import { trpc } from "../utils/trpc";

const Scrims: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="grid h-screen w-full items-center justify-items-center">
      <div className="grid w-full grid-rows-[max-content_max-content] justify-items-center gap-16">
        <div className="text-center text-6xl tracking-wide">
          UPCOMING SCRIMS
        </div>
        <div className="w-11/12 max-w-5xl border-t-2 border-subline not-italic">
          {scrims.map((scrim) => (
            <div
              className="grid h-44 grid-cols-[22%_56%_16%] gap-7 border-b-2 border-subline p-5"
              key={scrim.title}
            >
              <div className="grid h-full items-center">
                <img src={scrim.image} />
              </div>
              <div className="grid">
                <div className="pt-3 text-3xl font-light">
                  {scrim.title} {scrim.titleDate}
                </div>
                <div className="text-lg text-subtext">
                  {scrim.descriptionDate} {scrim.description}
                </div>
              </div>
              <div className="grid grid-rows-[max-content_max-content] content-center justify-items-center gap-4">
                <div className="text-xl font-bold">{scrim.price}</div>
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
      </div>
    </div>
  );
};

export default Scrims;
