import React, { useRef } from "react";
import toggleIcon from "../assets/crossIcon.png";
import sentIcon from "../assets/sent.png";
import inputPhoneRing from "../assets/ring.png";

function Popup({ onClose }) {
  const popupRef = useRef();
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={popupRef}
      onClick={closePopup}
      className="font-oswald w-full fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center"
    >
      <img onClick={onClose} sizes={48} src={toggleIcon} alt="" srcset="" />
      <div className="mt-4 relative w-[382px] h-fit pb-12 bg-[rgba(106,180,127,1)] rotate-[-1.992deg]">
        <div className="absolute w-full bg-[rgba(230,234,248,1)] pl-[1.125rem] py-2 -top-2  font-normal text-[rgba(64,66,71,1)] text-[0.9rem] rotate-[-1.339deg] ">
          <span>You can send a voice/whatsapp note on +91-84699 06603</span>
        </div>
        <div className="text-[rgba(254,229,229,1)] mt-14 px-10">
          <span className="font-semibold text-2xl tracking-[0.48px]">
            LEAVE A MESSAGE, <br />
            WE'LL REACH OUT
          </span>
          <form className="mt-4 flex flex-col gap-3 font-worksSans" action="">
            <div className="py-3 pl-4 mr-3 w-full border-[1px] border-s-white inline-flex items-center whitespace-nowrap">
              <span className="inline-flex font-semibold text-sm tracking-wide">
                YOUR NAME
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.07569 4.11411L4.3036 0.469769C4.24718 0.353071 4.07432 0.422937 4.11078 0.546912L5.24677 4.44445C5.27114 4.53013 5.1857 4.60702 5.1043 4.57035L1.73805 3.06499C1.59108 2.99808 1.47746 3.20954 1.61156 3.29946L4.6777 5.36335C4.75047 5.41385 4.73523 5.52768 4.64857 5.55241L0.80499 6.68643C0.682816 6.72334 0.71842 6.90634 0.845598 6.89202L4.82366 6.43799C4.91065 6.42688 4.97117 6.52759 4.92145 6.60139L2.69635 9.97846C2.62506 10.0868 2.77097 10.2037 2.85828 10.1108L5.61703 7.16838C5.67815 7.1034 5.78637 7.13945 5.7952 7.23003L6.23205 11.2688C6.24626 11.3978 6.43184 11.3935 6.43999 11.2639L6.68731 7.20914C6.69194 7.12052 6.79831 7.07717 6.8624 7.13922L9.75586 9.94932C9.84742 10.038 9.9877 9.91439 9.91142 9.8095L7.53068 6.54028C7.47755 6.4689 7.5333 6.36546 7.62071 6.37249L11.6157 6.63981C11.7434 6.64817 11.7703 6.46143 11.6466 6.43255L7.75416 5.47968C7.66866 5.45899 7.64589 5.34604 7.71621 5.2922L10.9463 2.89248C11.0496 2.81517 10.9519 2.65631 10.8392 2.71342L7.25524 4.52225C7.17565 4.56269 7.0867 4.48988 7.10704 4.40316L8.05928 0.454447C8.0899 0.328902 7.91402 0.269472 7.86307 0.386415L6.2635 4.10971C6.22741 4.19226 6.11338 4.19493 6.07569 4.11411Z"
                    fill="#537AFF"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Enter Name"
                className="
                focus:outline-none focus:ring-0 bg-transparent placeholder:text-[rgba(248,248,248,1)] text-white placeholder:text-lg placeholder:font-worksSans placeholder:tracking-wider placeholder:font-normal font-normal text-lg ml-7 tracking-wider w-full"
              />
            </div>
            <div className="py-3 px-3 w-full border-[1px] border-s-white inline-flex items-center whitespace-nowrap">
              <span className="relative inline-flex font-semibold text-sm tracking-wide">
                EMAIL/PHONE{" "}
                <img
                  className="absolute right-[7px] -top-[0.6rem]"
                  src={inputPhoneRing}
                  alt=""
                  srcset=""
                />
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.07569 4.11411L4.3036 0.469769C4.24718 0.353071 4.07432 0.422937 4.11078 0.546912L5.24677 4.44445C5.27114 4.53013 5.1857 4.60702 5.1043 4.57035L1.73805 3.06499C1.59108 2.99808 1.47746 3.20954 1.61156 3.29946L4.6777 5.36335C4.75047 5.41385 4.73523 5.52768 4.64857 5.55241L0.80499 6.68643C0.682816 6.72334 0.71842 6.90634 0.845598 6.89202L4.82366 6.43799C4.91065 6.42688 4.97117 6.52759 4.92145 6.60139L2.69635 9.97846C2.62506 10.0868 2.77097 10.2037 2.85828 10.1108L5.61703 7.16838C5.67815 7.1034 5.78637 7.13945 5.7952 7.23003L6.23205 11.2688C6.24626 11.3978 6.43184 11.3935 6.43999 11.2639L6.68731 7.20914C6.69194 7.12052 6.79831 7.07717 6.8624 7.13922L9.75586 9.94932C9.84742 10.038 9.9877 9.91439 9.91142 9.8095L7.53068 6.54028C7.47755 6.4689 7.5333 6.36546 7.62071 6.37249L11.6157 6.63981C11.7434 6.64817 11.7703 6.46143 11.6466 6.43255L7.75416 5.47968C7.66866 5.45899 7.64589 5.34604 7.71621 5.2922L10.9463 2.89248C11.0496 2.81517 10.9519 2.65631 10.8392 2.71342L7.25524 4.52225C7.17565 4.56269 7.0867 4.48988 7.10704 4.40316L8.05928 0.454447C8.0899 0.328902 7.91402 0.269472 7.86307 0.386415L6.2635 4.10971C6.22741 4.19226 6.11338 4.19493 6.07569 4.11411Z"
                    fill="#537AFF"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder=""
                className="
                w-full focus:outline-none focus:ring-0 bg-transparent placeholder:text-white placeholder:text-lg placeholder:font-worksSans placeholder:tracking-widest placeholder:font-light font-light ml-7 tracking-widest"
              />
            </div>
            <div className="flex flex-col">
              <span className="inline-flex font-semibold text-sm tracking-wide">
                WHAT’S ON YOUR MIND?{" "}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.07569 4.11411L4.3036 0.469769C4.24718 0.353071 4.07432 0.422937 4.11078 0.546912L5.24677 4.44445C5.27114 4.53013 5.1857 4.60702 5.1043 4.57035L1.73805 3.06499C1.59108 2.99808 1.47746 3.20954 1.61156 3.29946L4.6777 5.36335C4.75047 5.41385 4.73523 5.52768 4.64857 5.55241L0.80499 6.68643C0.682816 6.72334 0.71842 6.90634 0.845598 6.89202L4.82366 6.43799C4.91065 6.42688 4.97117 6.52759 4.92145 6.60139L2.69635 9.97846C2.62506 10.0868 2.77097 10.2037 2.85828 10.1108L5.61703 7.16838C5.67815 7.1034 5.78637 7.13945 5.7952 7.23003L6.23205 11.2688C6.24626 11.3978 6.43184 11.3935 6.43999 11.2639L6.68731 7.20914C6.69194 7.12052 6.79831 7.07717 6.8624 7.13922L9.75586 9.94932C9.84742 10.038 9.9877 9.91439 9.91142 9.8095L7.53068 6.54028C7.47755 6.4689 7.5333 6.36546 7.62071 6.37249L11.6157 6.63981C11.7434 6.64817 11.7703 6.46143 11.6466 6.43255L7.75416 5.47968C7.66866 5.45899 7.64589 5.34604 7.71621 5.2922L10.9463 2.89248C11.0496 2.81517 10.9519 2.65631 10.8392 2.71342L7.25524 4.52225C7.17565 4.56269 7.0867 4.48988 7.10704 4.40316L8.05928 0.454447C8.0899 0.328902 7.91402 0.269472 7.86307 0.386415L6.2635 4.10971C6.22741 4.19226 6.11338 4.19493 6.07569 4.11411Z"
                    fill="#537AFF"
                  />
                </svg>
              </span>
              <div className="inline-flex justify-between gap-2 relative">
                <input
                  type="text"
                  placeholder="Type here"
                  className=" 
                focus:outline-none w-full focus:ring-0 mt-4 bg-transparent tracking-wider font-normal text-lg placeholder:text-[rgba(248,248,248,1)] placeholder:font-normal placeholder:tracking-wider placeholder:text-lg"
                />
                <span className="tooltip inline-flex items-center absolute top-[3.1rem] px-2 text-[0.75rem] font-normal bg-[rgba(216,255,105,1)] text-black py-[1px] italic w-full z-30">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.86196 4.61697L3.92877 0.641326C3.86722 0.514019 3.67865 0.590237 3.71842 0.725482L4.95767 4.97735C4.98427 5.07081 4.89106 5.1547 4.80226 5.11469L1.12999 3.47248C0.96965 3.39948 0.845709 3.63017 0.991992 3.72826L4.33687 5.97978C4.41626 6.03487 4.39964 6.15905 4.3051 6.18603L0.112102 7.42314C-0.021179 7.4634 0.0176623 7.66304 0.156401 7.64742L4.49611 7.15212C4.591 7.13999 4.65703 7.24986 4.60278 7.33036L2.1754 11.0144C2.09763 11.1326 2.25681 11.2601 2.35205 11.1589L5.3616 7.94891C5.42827 7.87802 5.54634 7.91735 5.55597 8.01616L6.03253 12.4221C6.04803 12.5628 6.25048 12.5581 6.25937 12.4167L6.52917 7.99337C6.53423 7.89669 6.65027 7.8494 6.72018 7.91709L9.87669 10.9827C9.97657 11.0794 10.1296 10.9445 10.0464 10.8301L7.44922 7.26371C7.39126 7.18583 7.45207 7.07299 7.54743 7.08066L11.9056 7.37228C12.0449 7.3814 12.0743 7.17768 11.9393 7.14618L7.69301 6.10669C7.59975 6.08411 7.5749 5.9609 7.65161 5.90216L11.1753 3.28429C11.288 3.19994 11.1815 3.02665 11.0585 3.08895L7.14874 5.06221C7.06192 5.10634 6.96488 5.0269 6.98707 4.9323L8.02588 0.624612C8.05928 0.487653 7.8674 0.42282 7.81182 0.550395L6.06685 4.61217C6.02747 4.70222 5.90307 4.70514 5.86196 4.61697Z"
                      fill="#FEE5E5"
                    />
                  </svg>
                  That doesn't look right
                </span>
                <img
                  className="py-2 px-4 translate-y-[1px] bg-[rgba(83,122,255,1)]"
                  src={sentIcon}
                  sizes={23}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-full h-[2px] bg-white "></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
