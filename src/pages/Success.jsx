import { UserContext } from "../App";
import { useContext, useState, useEffect } from "react";

const Success = () => {
  const {
    userAuth: { displayName, screenName },
    setUserAuth,
  } = useContext(UserContext);
  return (
    <div>
      <div className="justify-center items-center flex-1 max-w-4xl py-4 mx-auto lg:py-6 px-8">
        <div className="text-center mt-32">
          <h1 className="text-[18px] sm:text-[25px] mb-6 text-left">
            Dear {displayName}
          </h1>

          <p className="text-lg sm:text-2xl mb-6 text-white sec_font font-bold">
            Thank you for spreading your wings and submitting your application.
            If your application takes flight and is accepted, your soaring
            wallet will be added to the Flockfolio. Best of luck as you prepare
            to join the Based flock!
          </p>
          <div className="text-center mt-8 w-full rounded-md bg-white bg-opacity-20 border-4 border-gray-600 px-6 py-4 text-lg sm:text-2xl font-bold text-white hover:bg-opacity-40">
            <a
              href={`https://twitter.com/intent/tweet?text=I'VE JOINED THE FLOCK WITH @BASED_BIRDS 🦅 `}
              className=""
            >
              Share with the flock
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
