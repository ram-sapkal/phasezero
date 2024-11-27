import "./index.css";
import Popup from "./popup/popup";
import telephone from "./assets/telephone.png";
import logo from "./assets/logo.png";
import handImage1 from "./assets/hand1.png";
import handImage2 from "./assets/hand2.png";
import { useState } from "react";

function App() {

  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
      <div className="w-full">

        <div className="h-[4.438rem] w-full mx-auto max-w-[600px] bg-[rgba(230,234,248,1)]"></div>
        <div className="relative mx-auto max-w-[600px] font-oswald bg-lines-pattern">
          <div className="absolute left-5 top-0 h-full w-[2px] bg-[rgba(230,234,248,1)]"></div>
          <div className="absolute left-3 top-0 h-full w-[2px] bg-[rgba(230,234,248,1)]"></div>
          <div className="absolute right-5 top-0 h-full w-[2px] bg-[rgba(230,234,248,1)]"></div>
          <div className="absolute right-3 top-0 h-full w-[2px] bg-[rgba(230,234,248,1)]"></div>
          <div className="px-5 w-full mb-10 flex flex-col gap-[3.3rem]">
            <div className="flex mt-[2px] justify-between">
              <img className="w-auto h-[98px]" src={logo} alt="" srcset="" />
              <img
              onClick={() => setShowPopup(true)}
                className="w-auto h-[98px]"
                src={telephone}
                alt=""
                srcset=""
              />
            </div>
            <div className="w-full h-fit">
              <div className="bg-[rgba(243,245,251,1)] border-t-2 border-b-2 border-s-[rgba(230,234,248,1)] py-5 px-10 flex flex-col gap-3">
                <div className="">
                  <img
                    className="h-[126px] leading-[0px] w-auto border-b-4 border-black block"
                    src={handImage1}
                    alt=""
                    srcset=""
                  ></img>
                </div>
                <span className="block w-[300px] text-[32px] font-bold text-gray-800 leading-8">
                  Setting, building or scaling up a product?
                </span>
              </div>
              <div className="mt-[0.3rem] bg-[rgba(243,245,251,1)] border-t-2 border-b-2 border-s-[rgba(230,234,248,1)] py-5 px-10 flex flex-col gap-3">
                <div className="">
                  <img
                    className="h-[126px] leading-[0px] w-auto border-b-4 border-black block"
                    src={handImage2}
                    alt=""
                    srcset=""
                  ></img>
                </div>
                <span className="block w-[300px] text-[32px] font-bold text-[rgba(83,122,255,1)] leading-8">
                  We build data-backed designs for businesses
                </span>
              </div>
            </div>
            <div className="h-[6.1rem] bg-[rgba(106,180,127,1)] mx-8 flex justify-center items-center"
              >
              <span className="text-white font-bold text-lg ">
                CHECK OUT LINKTREE
              </span>
            </div>
          </div>
          <div className="w-full h-[3rem] bg-[rgba(222,144,165,1)] flex justify-center items-center">
            <span className="text-[rgba(254,229,229,1)] font-normal text-lg">
              We are releasing our new website in phases. Stay tuned.{" "}
            </span>
          </div>
          { showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </div>
        
      </div>
    </>
  );
}

export default App;
