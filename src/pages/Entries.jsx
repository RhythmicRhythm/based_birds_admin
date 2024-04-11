import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-paginate";

const Entries = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 50;

  const [loading, setLoading] = useState(true);

  const [looading, setLooading] = useState(false);

  const [lading, setLading] = useState(false);

  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    async function getCoursesData() {
      axios
        .get("https://basedbirds-server.onrender.com/")
        .then(({ data }) => {
          setLoading(false);
          console.log(data);
          setData(data);
          setTotalPages(Math.ceil(data.length / itemsPerPage));
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
    getCoursesData();
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const dataToCSV = [
    // Define header row for CSV
    [
      "#",
     
      "Twitter Username",
      
      "Wallet Address",
      "Post Link",
      
    ],
    // Map courses data to CSV rows
    ...data.map((item, index) => [
      index + 1,
      item.twitter_username,
      item.wallet_address,
      item.post_link,
    ]),
  ];

  return (
    <div className="animate_bg">
      <Toaster />

      <div className="mt-24">
        {loading ? (
          <div className="flex h-screen justify-center items-center">
            <h1 className="text-2xl sm:text-6xl h_animate text-white font-bold">
              {" "}
              Admin List Loading ...
            </h1>
          </div>
        ) : (
          <div className="px-4">
            <div className="mx-auto flex max-w-[700px] justify-center items-center px-2">
              <div className="flex w-full flex-col items-center mt-10">
                <h1 className="text-[30px] sm:text-[80px] ">
                  BASEDBIRDS
                </h1>
                <p className="text-4xl text-white mb-8">Admin Pannel</p>
              </div>
            </div>
            {/* component */}
            <div className="flex flex-col  overflow-x-auto text-white font-sans mt-8">
              <div className="flex flex-col sm:flex-row justify-between px-6">
                <div className="mt-2">
                  <CSVLink
                    className="rounded-md bg-transparent border-4 border-gray-400 px-8 py-4 text-base font-bold text-white "
                    data={dataToCSV}
                    filename="whitelist.csv"
                  >
                    Download CSV
                  </CSVLink>
                </div>
              </div>

              <div className=""></div>
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b-4 font-bold border-gray-300 text-lg">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            #
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Twitter Username
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Wallet Address
                          </th>
                          <th scope="col" className="px-6 py-4">
                             Post Link
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {subset.map((item, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-400"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-lg">
                              {index + 1 + startIndex}
                            </td>

                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.twitter_username}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.wallet_address}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.post_link}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="ml-10 p-10 text-white text-xs def_font">
                <ReactPaginate
                  pageCount={totalPages}
                  onPageChange={handlePageChange}
                  forcePage={currentPage}
                  pageRangeDisplayed={1}
                  nextLabel=">>"
                  previousLabel="<<"
                  containerClassName="flex"
                  pageClassName="px-4 py-1"
                  breakClassName="px-2 py-1"
                  previousClassName="px-2 py-1"
                  nextClassName="px-2 py-1"
                  activeClassName="px-2 py-1 bg-gray-500 rounded-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Entries;
