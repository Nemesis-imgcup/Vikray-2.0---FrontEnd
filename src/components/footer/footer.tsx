import React from 'react'


const footer = () => {
  return (
    <footer className="flex flex-row space-x-[11vw] bg-black py-20">
      <div className="text-5xl font-bold  ml-16 mr-6">
        A step <span className="text-[#FFFF6D]">forward</span> towards{" "}
        <span className="text-[#FFFF6D]">web3</span>
      </div>
      <div className="text-lg font-semibold">
        Phone <br /> +91 123456789
      </div>
      <div className="text-lg font-semibold">
        Email <br /> vikray.web3@gmail.com
      </div>
      <div>
        <div className="text-lg font-semibold">Socials</div>
      </div>
    </footer>
  );
}
export default footer