import React from "react";

function TrendingList() {
  return (
    <div className="container max-w-full p-10">
      <h5 className="text-5xl">Trending in the box</h5>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 max-w-50">
        {/* 1 */}
        <div className="p-5">
          <div className="overflow-hidden hover:scale-105 transform transition-all duration-150 shadow-lg rounded-2xl h-90 w-96 m-auto cursor-pointer">
            <img
              alt="eggs"
              src="/images/pottery.jpeg"
              className="rounded-t-lg"
            />
            <div className="bg-white w-full p-4 relative">
              <p className="text-gray-800 text-xl font-medium mb-2">Pottery</p>
              <p className="text-gray-600 text-xs">
                Learn pottery from the best.
              </p>
              <div className="flex flex-wrap justify-starts items-center mt-6">
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #pottery
                </div>
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #skillbox_pottery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="p-5">
          <div className="overflow-hidden hover:scale-105 transform transition-all duration-150 shadow-lg rounded-2xl h-90 w-96  m-auto cursor-pointer">
            <img
              alt="eggs"
              src="/images/bitcoin.jpeg"
              className="rounded-t-lg"
            />
            <div className="bg-white w-full p-4 relative">
              <p className="text-gray-800 text-xl font-medium mb-2">Bitcoin</p>
              <p className="text-gray-600 text-xs">
                Learn about the most popular digital curreny from experts.
              </p>
              <div className="flex flex-wrap justify-starts items-center mt-6">
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #bitcoin
                </div>
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #skillbox_bitcoin
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="p-5">
          <div className="overflow-hidden hover:scale-105 transform transition-all duration-150 shadow-lg rounded-2xl h-90 w-96  m-auto cursor-pointer">
            <img alt="eggs" src="/images/piano.jpeg" className="rounded-t-lg" />
            <div className="bg-white w-full p-4 relative">
              <p className="text-gray-800 text-xl font-medium mb-2">Piano</p>
              <p className="text-gray-600 text-xs">Learn piano.</p>
              <div className="flex flex-wrap justify-starts items-center mt-6">
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #piano
                </div>
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #skillbox_piano
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="p-5">
          <div className="overflow-hidden hover:scale-105 transform transition-all duration-150 shadow-lg rounded-2xl h-90 w-96  m-auto cursor-pointer">
            <img
              alt="eggs"
              src="/images/cooking.jpeg"
              className="rounded-t-lg"
            />
            <div className="bg-white w-full p-4 relative">
              <p className="text-gray-800 text-xl font-medium mb-2">Cooking</p>
              <p className="text-gray-600 text-xs">
                Want to learn to cook? Skillbox is the place to be.
              </p>
              <div className="flex flex-wrap justify-starts items-center mt-6">
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #cooking
                </div>
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #skillbox_cooking
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="p-5">
          <div className="overflow-hidden hover:scale-105 transform transition-all duration-150 shadow-lg rounded-2xl h-90 w-96  m-auto cursor-pointer">
            <img
              alt="eggs"
              src="/images/carRepair.jpeg"
              className="rounded-t-lg"
            />
            <div className="bg-white w-full p-4 relative">
              <p className="text-gray-800 text-xl font-medium mb-2">
                Car Repair
              </p>
              <p className="text-gray-600 text-xs">
                Learn to fix your car yourself.
              </p>
              <div className="flex flex-wrap justify-starts items-center mt-6">
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #mechanic
                </div>
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #skillbox_mechanic
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="p-5">
          <div className="overflow-hidden hover:scale-105 transform transition-all duration-150 shadow-lg rounded-2xl h-90 w-96  m-auto cursor-pointer">
            <img
              alt="eggs"
              src="/images/guitar.jpeg"
              className="rounded-t-lg"
            />
            <div className="bg-white w-full p-4 relative">
              <p className="text-gray-800 text-xl font-medium mb-2">Guitar</p>
              <p className="text-gray-600 text-xs">
                Learn ins and outs of Guitar playing.
              </p>
              <div className="flex flex-wrap justify-starts items-center mt-6">
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #guitar
                </div>
                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #skillbox_guitar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingList;
