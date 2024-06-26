import React from "react";
import Navbar from "../components/Navbar";
import pixel from "../assets/pixel2.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="flex items-center  px-6 mt-24">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 md:text-center mb-20">
            <p className="mb-2 text-xl font-semibold text-rose-700 dark:text-gray-400">
              About Us
            </p>
            <h2 className="pb-2 text-6xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              Why Sei Nobodies
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-rose-400"></div>
              <div className="flex-1 h-2 bg-rose-600"></div>
              <div className="flex-1 h-2 bg-rose-400"></div>
            </div>
          </div>

          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src={pixel}
                alt=""
                className="relative z-40 object-cover w-full h-96"
              />
              <ul className="mb-10 hidden lg:block">
                <li className="flex items-center mb-4 mt-4 text-lg text-white">
                  <span className="mr-3 text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Decentralized Governance
                </li>
                <p className="text-sm text-gray-400 font-sans">
                  The $NOBODY ecosystem is governed by its community. Token
                  holders will have the power to shape the future of the project
                  by participating in key decisions through a decentralized
                  governance model.
                </p>

                <li className="flex items-center mb-4 mt-4 text-lg text-white">
                  <span className="mr-3 text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Innovative Tokenomics
                </li>
                <p className="text-sm text-gray-400 font-sans">
                  $NOBODY introduces a carefully designed tokenomics model that
                  ensures fair distribution, incentivizes long-term holding, and
                  aligns the interests of the community with the success of the
                  project.
                </p>
              </ul>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-rose-500 dark:text-gray-300">
                $NOBODY Token Launch Preview
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                As the eagerly anticipated $NOBODY token prepares for its
                imminent launch, the Seinobodies community is abuzz with
                excitement over its innovative features and unique value
                propositions. Set to revolutionize the space, $NOBODY stands out
                with a distinctive approach that includes rewarding holders of
                delisted NFTs.
              </p>

              <p className="text-4xl font-bold text-rose-600">Key Features</p>
              <ul className="mb-10 mt-8">
                <li className="flex items-center mb-4 mt-4 text-lg text-white">
                  <span className="mr-3 text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  NFT Holder Rewards
                </li>
                <p className="text-base text-gray-400 font-sans">
                  One of the groundbreaking features of $NOBODY is its
                  commitment to supporting holders. Rewards for holders would be
                  taken at intervals for delisted NFTs. Holders who have
                  delisted their NFTs will receive exclusive rewards when
                  snapshot is taken before the commencement of each reward,
                  providing them with continued value.
                </p>

                <li className="flex items-center mb-4 mt-4 text-lg text-white">
                  <span className="mr-3 text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Community-Centric Approach
                </li>
                <p className="text-sm text-gray-400 font-sans">
                  $NOBODY embraces a community-centric philosophy, encouraging
                  active participation and engagement. The token launch will be
                  accompanied by community-driven initiatives, fostering a sense
                  of ownership among early adopters.
                </p>
              </ul>
              <ul className="mb-10  lg:hidden">
                <li className="flex items-center mb-4 mt-4 text-lg text-white">
                  <span className="mr-3 text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Decentralized Governance
                </li>
                <p className="text-sm text-gray-400 font-sans">
                  The $NOBODY ecosystem is governed by its community. Token
                  holders will have the power to shape the future of the project
                  by participating in key decisions through a decentralized
                  governance model.
                </p>

                <li className="flex items-center mb-4 mt-4 text-lg text-white">
                  <span className="mr-3 text-rose-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Innovative Tokenomics
                </li>
                <p className="text-sm text-gray-400 font-sans">
                  $NOBODY introduces a carefully designed tokenomics model that
                  ensures fair distribution, incentivizes long-term holding, and
                  aligns the interests of the community with the success of the
                  project.
                </p>
              </ul>
            </div>
          </div>

          <div className="px-4 mb-10 md:text-center md:mb-20">
            <h2 className="pb-2 text-2xl font-bold text-gray-800  dark:text-gray-300">
              NFT Holder Rewards Explained
            </h2>

            <p className="mb-2 text-sm font-semibold text-rose-700 dark:text-gray-400">
              Upon the launch of $NOBODY, holders of NFTs that have been
              delisted from various platforms will be eligible for exclusive
              rewards. These rewards may include additional $NOBODY tokens,
              access to special features within the $NOBODY ecosystem, or
              participation in unique events and airdrops. This pioneering
              approach aims to provide support and value to individuals who may
              have faced challenges due to NFT delistings, creating a bridge
              between the traditional NFT space and the innovative $NOBODY
              ecosystem.
            </p>
          </div>

          <div className="px-4 mb-10 md:text-center md:mb-20">
            <h2 className="pb-2 text-2xl font-bold text-gray-800  dark:text-gray-300">
              Future Development
            </h2>

            <p className="mb-2 text-sm font-semibold text-rose-700 dark:text-gray-400">
              The $NOBODY team is committed to delivering on its promises and
              has a comprehensive roadmap that includes further enhancements to
              its ecosystem, strategic partnerships, and the continuous
              development of features that cater to the evolving needs of the
              community. As the Seinobodies community eagerly awaits the $NOBODY
              token launch, it's clear that this project is poised to make waves
              with its creative features, community focus, and commitment to
              rewarding those who have faced challenges in the dynamic NFT
              landscape. Stay tuned for more updates as $NOBODY prepares to
              redefine the future of decentralized finance and NFTs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
