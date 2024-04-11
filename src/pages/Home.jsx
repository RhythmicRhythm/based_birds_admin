import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authentication } from "../firebase-config";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";
import Loader from "./Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  let {
    userAuth: { screenName },
    setUserAuth,
  } = useContext(UserContext);
  const SigninTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        toast.success(re.user.reloadUserInfo.displayName);
        storeInSession("user", JSON.stringify(re.user.reloadUserInfo));
        console.log("user", JSON.stringify(re.user.reloadUserInfo));
        setUserAuth(re.user.reloadUserInfo);
        navigate("/task")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <section className="mt-[300px] mb-10">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
              <span className="block w-full py-2 text-shadow lg:inline">
                BASEDBIRDS
              </span>{" "}
            </h1>
            <p className="px-0 mb-8 text-lg sec_font text-white md:text-xl lg:px-24">
              BasedBirds is a curated collection of 777 unique pieces showcasing
              exceptional artistry,ready for takeoff on the base chain. Our
              meticulously crafted artwork features a distinctive style that
              sets it apart in the digital art landscape.
            </p>
            <p className="px-0 mb-8 text-lg text-gray-100 md:text-xl lg:px-24">
              Roadmap? Take off and find out
            </p>
            <div className="">
          
              <button  onClick={SigninTwitter}
                className="rounded-lg bg-gray-200 px-8 py-4 mt-8 text-sm sm:text-6xl text-gray-600 hover:bg-gray-400"
              >
                {" "}
                Connect X
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
