import React from "react";

export default function Nav({ logout, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <>
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-2 text-neutral-400 shadow-lg hover:text-neutral-500 focus:text-neutral-500 dark:bg-neutral-600 lg:py-4">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="ml-2">
              <a
                className="text-xl text-neutral-100 dark:text-neutral-200"
                href="#"
              >
                Routeyplanz
              </a>
              <span className="ml-4">
              Hi, {localStorage.getItem('name')}! You are logged in.
              </span>
            </div>
            <div flex-items-center>
                <button
                  onClick={logout}
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="mr-2 inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-100 transition duration-150 ease-in-out hover:bg-neutral-700 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
                >
                  Logout
                </button>
              </div>
          </div>
        </nav>
      </>
    );
  } else {
  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-500 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            <a
              className="text-xl text-neutral-100 dark:text-neutral-200"
              href="#"
            >
              Routeyplanz
            </a>
          </div>
        </div>
      </nav>
    </>
  );
  }
}
