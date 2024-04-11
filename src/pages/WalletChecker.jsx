import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";



const WalletChecker = () => {
  const [inputAddress, setInputAddress] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isWalletAccepted = walletAddresses.includes(inputAddress);
    // if (isWalletAccepted) {
    //   toast.success('Congratulations! You are on the whitelist and eligible for mint.');
    // } else {
    //   toast.error('Sorry, Wallet is not on the Whitelist.');
    // }
    console.log("checked =");
  };



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div>
       <Toaster />
      
      <section className="flex flex-col items-center mt-34 px-4">
        <div className="justify-center items-center flex-1 max-w-4xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="text-center mt-32">
            <h1 className="text-[45px] sm:text-[100px] text-red-600">
              Kamilist Checker
            </h1>

            <p className="text-lg sm:text-2xl text-white font-sec font-bold">
              The first 5v5 shooter web3 game on SeiNetwork
            </p>
          
            <p className="text-lg sm:text-2xl mt-8 mb-8 text-white font-sec font-bold">
              Check your eligibility status
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text-left mb-6">
                <label className="w-full mb-2 text-lg text-white">
                  Input Sei Wallet Address
                  <span className="text-orange-400 text-sm mb-3">
                    * (required)
                  </span>
                </label>
                <input
                  type="text"
                  name="discord_username"
                  value={inputAddress}
                  onChange={(e) => setInputAddress(e.target.value)}
                  className="bg-transparent text-white px-6 py-6 border-4 border-gray-600 focus:outline-none rounded-lg
                   focus:border-red-500 placeholder:italic placeholder:text-red-100"
                  required
                />
              </div>
              <button className="rounded-md bg-red-600 px-8 py-4 text-xl sm:text-6xl text-white">
                {" "}
                Check Status
              </button>
            </form>
          </div>

          {/* <div className="mt-8">
            <img src={art4} className="w-auto rounded-xl" alt="" />
          </div> */}
        </div>
      </section>
   
    </div>
  );
};

export default WalletChecker;
