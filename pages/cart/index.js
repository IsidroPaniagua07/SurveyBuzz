import React from 'react'

const index = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-fit h-1/5 flex items-center justify-center font-RobotoMono font-bold text-7xl">
        <div className="flex h-fit w-fit bg-gray-100 rounded-2xl shadow justify-center items-center">
          Cart
        </div>
      </div>
      <div className="w-3/4 h-1/2 text-left font-Roboto text-xl">
        <div className="flex h-full w-full justify-center items-center">
          Welcome to Caudill’s Crafts! We’re a family run, Disney-inspired
          apparel shop, whose mission is to add a little bit of magic into your
          everyday wardrobe. All of our apparel is 100% Handmade with love and
          magic, and available for Women, Men and Children. Feel free to take a
          look, browse, and reach out with any questions!
        </div>
      </div>
    </div>
  )
}

export default index