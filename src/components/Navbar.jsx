import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import photo from "./photo.png";

const option = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ setSortBy }) {
  const [navigation, setNavigation] = useState([
    { name: "Best Match", href: "#", current: true },
    { name: "Highest Rated", href: "#", current: false },
    { name: "Most Reviewed", href: "#", current: false },
  ]);

  const handleSortButtonClick = (name) => {
    setSortBy(option[name]);

    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === name
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };

  return (
    <Disclosure
      as="nav"
      className="bg-gray-700 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 border-b-2 border-gray-600 shadow-lg shadow-black/50 outline-1 outline-gray-900 transition-shadow duration-300 mb-8"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-white text-2xl font-bold ml-16">Best Munch</h1>
            <div className="flex items-center">
              <img alt="Company Logo" src={photo} className="h-8 w-auto" />
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSortButtonClick(item.name)}
                  className={classNames(
                    item.current
                      ? "bg-black text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium hover:ease-in-out duration-300 effect3:hover"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => handleSortButtonClick(item.name)}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium hover:ease-in-out duration-300 effect3:hover "
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
