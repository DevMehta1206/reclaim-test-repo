import React from "react";
import { SelectButton, SingleCard } from "../../components/Cards";
import { Link } from "react-router-dom";

const Lost = () => {
  return (
    <>
      <div id="blog ">
        <div className="max-w-screen-xl m-auto pt-24 pb-20">
          <div className=" space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              Lost Articles
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

      <FixedButton />
    </>
  );
};

const FixedButton = () => {
  return (
    <Link
      to="/lost-registration"
      type="button"
      className="fixed bottom-4 right-4 z-50 text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-normal rounded-3xl md:text-lg text-sm px-6 py-2.5 text-center mr-2 mb-2 hover:scale-105 animate-bounce"
    >
      Register for Lost Item
    </Link>
  );
};

export default Lost;
