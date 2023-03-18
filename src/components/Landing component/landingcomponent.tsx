import React from 'react'
import Image from "next/image";
import Button from '@/components/common/button'
import {ComponentImage, Feat1, Feat2, Feat3, Heroimage2} from '../../assets/landingAssets/index'



const landingcomponent = () => {
  return (
    <>
      <div className="md:flex flex-row m-[7vw] md:space-x-[7vw] md:space-y-4">
        <div className="text-xl font-medium">
          Experience the future of fashion today! Shop now and join the
          revolution of sustainable fashion. Visit our website now to explore
          our collection and shop sustainably. Don't miss out on the opportunity
          to be a part of the sustainable fashion movement Join our mission to
          create a better future for fashion, where sustainability meets style.
        </div>
        <div className="lg:w-[250vw] ">
          <Image src={ComponentImage} alt="Picture of component" />
        </div>
      </div>
      <div className="md:flex flex-row md:space-x-7 m-5">
        <div className="flex">
          <Image
            className="flex w-[15vw] h-[25vh]"
            src={Feat1}
            alt="Picture of feature"
          />
          <div className=" text-2xl mt-20 pl-4">
            Mint your own NFTs for the brand products you buy
          </div>
        </div>
        <div className="flex">
          <Image
            className="w-[15vw] h-[25vh]"
            src={Feat2}
            alt="Picture of feature"
          />
          <div className=" text-2xl mt-20 pl-4">
            Connnect your different social medias with your avatars and assets
          </div>
        </div>
        <div className="flex">
          <Image
            className="w-[15vw] h-[25vh]"
            src={Feat3}
            alt="Picture of feature"
          />
          <div className=" text-2xl mt-20 pl-4">
            Mint your own NFTs for the brand products you buy
          </div>
        </div>
      </div>
      <div className="md:flex flex-row md:space-x-[7vw] m-[7vw]">
        <div className="mt-[16vh]">
          <div className="flex space-x-2">
            <div className="bg-[#FFFF6D] w-3 h-14"></div>
            <div className="text-5xl">YOUR WAY TOWARDS METAVERSE</div>
          </div>
          <div className="mt-9">
            Experience the intersection of cutting-edge technology, style and
            sustainability with our web3 clothing store e-commerce. Discover
            eco-friendly fashion that elevates your wardrobe while reducing your
            carbon footprint. Our blockchain integration guarantees secure
            payments and unparalleled customer service. Embrace sustainable
            fashion today with stylish and ethically sourced items designed by
            experts in both fashion and blockchain technology. Enjoy a seamless
            shopping experience with our user-friendly interface and fast
            shipping options to make an impact on future generations through
            conscious purchasing habits. Join the revolution now!
          </div>
          <div className='mt-9'>
            <Button filled>Web3 Shooping</Button>
          </div>
        </div>
        <div>
          <Image
            className="w-[210vw]"
            src={Heroimage2}
            alt="Picture of heroimage2"
          />
        </div>
      </div>
    </>
  );
}

export default landingcomponent
