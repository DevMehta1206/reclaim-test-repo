import React from "react";

const Cards = () => {
  return (
    <div id="blog ">
      <div className="max-w-screen-xl m-auto">
        <div className=" space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Latest Articles
          </h2>

          <div className="w-full py-5">
            <SelectButton text={"All"} />
            <SelectButton text={"CGC"} />
            <SelectButton text={"CGC"} />
            <SelectButton text={"CGC"} />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SingleCard
            image={
              "https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            }
          />
          <SingleCard
            image={
              "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            }
          />
          <SingleCard
            image={
              "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            }
          />
        </div>
      </div>
    </div>
  );
};

export const SelectButton = ({ text, action }) => {
  return (
    <button
      type="button"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {text}
    </button>
  );
};

export const SingleCard = ({ image }) => {
  return (
    <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt="art cover"
          loading="lazy"
          width={1000}
          height={667}
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 relative">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          De fuga fugiat lorem ispum laboriosam expedita.
        </h3>
        <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
          Voluptates harum aliquam totam, doloribus eum impedit atque!
          Temporibus...
        </p>
        <a className="inline-block" href="#">
          <span className="text-info dark:text-blue-300">Read more</span>
        </a>
      </div>
    </div>
  );
};
export default Cards;
