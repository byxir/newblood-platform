import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "SCRIMS", href: "#", current: true },
  { name: "TEAMS", href: "#", current: false },
  { name: "PLAYERS", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface ISidebar {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebar) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-95" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-sidebarBg">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex-1 overflow-y-auto pt-5">
                    <div className="mr-8 grid h-20 items-center justify-items-end bg-redAccent">
                      <img
                        src="../../logowhite.png"
                        alt=""
                        className="mr-3 w-3/4"
                      />
                    </div>
                    <nav className="grid h-[calc(100%-5rem)] grid-rows-[max-content_max-content_max-content] content-center justify-end justify-items-end gap-4 p-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-sidebarBg text-white"
                              : "text-white hover:bg-sidebarBg hover:text-white",
                            "group flex w-max items-center rounded-md px-2 py-2 text-2xl font-extralight"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="grid h-48 justify-center">
                    <div className="grid w-max grid-rows-[max-content_max-content] justify-center gap-4">
                      <div className="h-20 w-20 justify-self-center">
                        <img
                          src="https://cdn.inprnt.com/thumbs/5f/80/5f80b304bb13450634af50be3b0e6357.jpg"
                          alt="profile picture"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-[max-content_max-content] content-center gap-3">
                        <div className="grid grid-rows-2">
                          <div className="h-max text-right text-xl">#5</div>
                          <div className="h-max text-right">
                            <span className="text-lg">387</span>
                            <span className="text-xs">pts</span>
                          </div>
                        </div>
                        <div className="grid items-center justify-center">
                          <img
                            src="../../masters.png"
                            alt="rank icon"
                            className="w-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-60 md:flex-col lg:w-64 xl:w-72">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-sidebarBg">
            <div className="flex flex-1 flex-col overflow-y-auto pt-8 pb-4">
              <div className="mr-8 grid h-20 items-center justify-items-end bg-redAccent">
                <img src="../../logowhite.png" alt="" className="mr-3 w-3/4" />
              </div>
              <nav className="grid h-full grid-rows-[max-content_max-content_max-content] content-center justify-end justify-items-end gap-4 md:p-3 lg:p-5">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-sidebarBg text-white"
                        : "text-white hover:bg-sidebarBg hover:text-white",
                      "group flex w-max items-center rounded-md px-2 py-2 text-4xl"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="grid h-48 justify-center">
              <div className="grid w-max grid-rows-[max-content_max-content] justify-center gap-4">
                <div className="h-20 w-20 justify-self-center">
                  <img
                    src="https://cdn.inprnt.com/thumbs/5f/80/5f80b304bb13450634af50be3b0e6357.jpg"
                    alt="profile picture"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-[max-content_max-content] content-center gap-3">
                  <div className="grid grid-rows-2">
                    <div className="h-max text-right text-xl">#5</div>
                    <div className="h-max text-right">
                      <span className="text-lg">387</span>
                      <span className="text-xs">pts</span>
                    </div>
                  </div>
                  <div className="grid items-center justify-center">
                    <img
                      src="../../masters.png"
                      alt="rank icon"
                      className="w-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:pl-60 lg:pl-64 xl:pl-72">
          <div className="sticky top-0 z-10 grid grid-cols-2 items-center justify-between justify-items-end bg-sidebarBg md:hidden">
            <div className="grid h-full w-36 items-center justify-items-end justify-self-start">
              <img src="../../logowhite.png" alt="logo" className="mr-1 w-32" />
            </div>
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 grid h-12 w-12 items-center justify-center text-white hover:text-gray-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="grid w-full justify-items-center bg-bg">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
