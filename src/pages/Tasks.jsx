import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Tasks = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    userAuth: { displayName, screenName },
    setUserAuth,
  } = useContext(UserContext);

  console.log(screenName);

  const applyWaitlist = async (e) => {
    e.preventDefault();

    let form = new FormData(formElement);
    console.log(form);
  

    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;

      let { twitter_username, wallet_address, post_link } = formData;
    }
    console.log(formData);
    setIsSubmiting(true);
    //https://basedbirds-server.onrender.com
    axios
      .post("https://basedbirds-server.onrender.com/", formData)
      .then(({ data }) => {
        console.log(data);
        navigate("/success");
      })
      .catch(({ response }) => {
        toast.error(response.data.message);
        console.log(response);
        setIsSubmiting(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    if (screenName) {
      axios
        .get(`https://basedbirds-server.onrender.com/${screenName}`)
        .then(({ data }) => {
          setLoading(false);
          navigate(`/success`);
        })
        .catch(({ response }) => {
          console.log(response.data.message);
          setLoading(false);
        });
    }
  }, [screenName]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Toaster />
      <div className="flex justify-center items-center guardians">
        <div className=" p-4 container w-full items-center mt-44">
          <h1 className="text-white text-2xl guardians">
            <span className="text-4xl sec_c"></span>
          </h1>

          <form
            id="formElement"
            onSubmit={applyWaitlist}
            className="max-w-6xl mx-auto flex flex-col justify-center items-center text-white"
          >
            <div className="text-center mb-6 mt-8 w-full hidden">
              <input
                type="text"
                name="twitter_username"
                value={screenName}
                className="bg-white bg-opacity-20 w-full px-6 py-4 sm:py-6 border-4 border-gray-600 focus:outline-none
                   focus:border-yellow-500 text-sm sm:text-xl rounded-lg placeholder:italic placeholder:text-red-100"
                required
              />
            </div>

            <div className="text-left mb-6 mt-8 w-full ">
              <h1 className="text-sm text-green-400 ">Task 1</h1>
              <p className="text-sm">Follow the flock</p>
              <div className="text-center mt-8 w-full rounded-md bg-white bg-opacity-20 border-4 border-gray-600 px-6 py-4 text-lg sm:text-2xl font-bold text-white hover:bg-opacity-40">
                <a
                  href="https://twitter.com/based_birds"
                  className="twitter-follow-button "
                >
                  Follow the Flock
                </a>
              </div>
            </div>
            <div className="text-left mb-6 mt-8 w-full ">
              <h1 className="text-sm text-green-400 ">Task 2</h1>
              <p className="text-xs">Take off </p>
              <div className="text-center mt-8 w-full rounded-md bg-white bg-opacity-20 border-4 border-gray-600 px-6 py-4 text-lg sm:text-2xl font-bold text-white hover:bg-opacity-40">
                <a
                  href={`https://twitter.com/intent/tweet?text=GET READY FOR TAKEOFF WITH @BASED_BIRDS 🦅 `}
                  className=""
                >
                  Take Off
                </a>
              </div>
            </div>

            <div className="text-left mb-6 mt-8 w-full ">
              <h1 className="text-sm text-green-400 ">Task 3</h1>
              <p className="text-xs mb-4">Enter your Take off post link</p>
              <input
                type="text"
                name="post_link"
                placeholder="Take Off Post Link"
                className="bg-white bg-opacity-20 w-full px-6 py-4 sm:py-6 border-4 border-gray-600 focus:outline-none
                   focus:border-blue-200 text-sm sm:text-xl rounded-lg guardians placeholder:text-red-100"
              />
            </div>
            <div className="text-left mb-6 mt-8 w-full ">
              <h1 className="text-sm text-green-400 ">Task 4</h1>
              <p className="text-xs mb-4">Enter your walet address</p>
              <input
                type="text"
                name="wallet_address"
                placeholder="input wallet address"
                className="bg-white bg-opacity-20 w-full px-6 py-4 sm:py-6 border-4 border-gray-600 focus:outline-none
                   focus:border-blue-200 text-sm sm:text-xl rounded-lg guardians placeholder:text-red-100"
                required
              />
            </div>

            {isSubmiting ? (
              <button
                disabled
                className="text-center mt-8 w-full rounded-md sec_color px-6 py-4 text-lg sm:text-3xl font-bold text-white hover:bg-gray-400"
              >
                Submitting ...
              </button>
            ) : (
              <button className="text-center mt-8 w-full rounded-md sec_color px-6 py-4 text-lg sm:text-3xl font-bold text-white hover:bg-gray-400">
                Proceed to Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
