import Button from '@/components/common/button'
import Navbar from '@/components/navbar/navbar'
import React from 'react'
import Image from "next/image";
import Heroimage from '../pages/landing/landingAssets/heroimage.png'



const landing = () => {
  return (
    <div className="bg-center bg-[url('/bg-image.png')] bg-[#212121] text-white h-[150vh] w-fit home overflow-x-hidden ">
      <Navbar />
      <div className="flex flex-row ml-[7vw] mt-[17vh] space-x-[7vw] ">
        <div>
          <div className="text-5xl">
            Introducing the
            <span className="text-[#FFFF6D]"> future of fashion</span> with our
            web3 clothing store e-commerce
          </div>
          <div className="flex flex-col">
            <div className="mt-16 text-xl">
              Join the revolution of sustainable fashion today.Check out our
              latest arrivals and stay up-to-date with the newest trends in
              sustainable fashion. Sign up for our newsletter to receive
              exclusive updates, promotions and sustainable fashion tips.
              Experience the future of fashion today! Shop now and join the
              revolution of sustainable fashion.
            </div>
            <div className=" flex flex-row space-x-24 mt-[11vh]">
              <Button filled className="text-2xl">
                Explore Shop
              </Button>
              <Button className="text-white text-2xl border-2 border-[#FFFF6D]">
                Know more
              </Button>
            </div>
          </div>
        </div>
       
        <div className="flex flex-col">
          <div className="w-[39vw]">
            <Image src={Heroimage} alt="Picture of the author" />
          </div>
          <div className="mt-10 text-7xl ml-9 text-[#FFFF6D]">
            web3 * Fashion * AR
          </div>
        </div>
      </div>
      <div className="flex flex-row m-[7vw] space-x-[7vw]"></div>
      <div>
        <div className="bg-[#FFFF6D] h-1 w-full mt-[-10vh]"></div>
        <div className="text-center text-[7vw] text-[#FFFF6D]  border-[#FFFF6D]  md:justify-evenly">
          METAVERSE SHOPPING
        </div>
        <div className="bg-[#FFFF6D] h-1 w-full"></div>
      </div>
    </div>
  );
}

export default landing
