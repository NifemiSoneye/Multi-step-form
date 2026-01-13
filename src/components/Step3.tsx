import { useEffect } from "react";
import SideNav from "./SideNav";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddOn, recalculateAddOnPrices } from "../store/formSlice";
import { type RootState } from "../store/store";

type ErrorType = {
  Name: boolean;
  Email: boolean;
  Phone: boolean;
  Plan: boolean;
  addOns: boolean;
};

type PropType = {
  pageNumber: number;
  handleNext: () => void;
  handlePrevious: () => void;
  error: ErrorType;
  activePage: string;
  linkBase: string;
  normalWhiteSpace: string;
};

const Step3 = ({
  pageNumber,
  handleNext,
  handlePrevious,
  error,
  activePage,
  linkBase,
  normalWhiteSpace,
}: PropType) => {
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const isYearly = useSelector((state: RootState) => state.navigation.isYearly);
  const checkIcon = new URL("../assets/icon-checkmark.svg", import.meta.url)
    .href;
  const handleTick = (option: number) => {
    if (option === 1) {
      dispatch(toggleAddOn("onlineService"));
    } else if (option === 2) {
      dispatch(toggleAddOn("largerStorage"));
    } else if (option === 3) {
      dispatch(toggleAddOn("customizableProfile"));
    }
  };
  useEffect(() => {
    dispatch(recalculateAddOnPrices());
  }, [formData.plan.billing, dispatch]);
  /*   useEffect(() => {
    console.log("Updated Data:", formData);
  }, [formData]); */
  const unPicked =
    "flex items-center justify-between border border-[#9699ab] rounded-lg p-[0.5rem] lg:p-[0.75rem] hover:border-[#473dffff] ";
  const picked =
    "flex items-center justify-between border border-[#473dffff] rounded-lg p-[0.5rem] bg-[#fafbffff] lg:p-[0.75rem]";
  const unClickedBtn = "border border-[#9699ab] h-5 w-5 rounded-sm mr-[0.5rem]";
  const clickedBtn =
    "border border-[#9699ab] h-5 w-5 rounded-sm mr-[0.5rem] bg-[#473dffff] flex items-center justify-center";

  return (
    <div className={normalWhiteSpace}>
      <SideNav
        pageNumber={pageNumber}
        activePage={activePage}
        linkBase={linkBase}
      />
      <div className="lg:ml-[2rem] lg:mt-[1rem] lg:mr-[5rem]">
        <p className="text-[#02295aff] font-bold text-[1.5rem]">Pick add-ons</p>
        <p className="text-[#9699ab] pt-[0.5rem]">
          Add ons help enhance your gaming experience.
        </p>
        <div className="mt-[0.5rem] flex flex-col lg:flex-column gap-[0.5rem] lg:mt-[1rem] ">
          {error.addOns && (
            <p className="text-red-500">Please Select An Add-on</p>
          )}
          <div className={formData.addOns.onlineService ? picked : unPicked}>
            <div className="flex items-center justify-around">
              <button
                className={
                  formData.addOns.onlineService ? clickedBtn : unClickedBtn
                }
                onClick={() => handleTick(1)}
              >
                {formData.addOns.onlineService && (
                  <img src={checkIcon} alt="check" />
                )}
              </button>
              <div className="flex flex-col">
                <p className="font-semibold">Online Service</p>
                <p className="text-[12px] text-[#9699ab]">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <p className="text-[#473dffff] text-[14px]">
              {isYearly ? "+10$/yr" : "+$1/mo"}
            </p>
          </div>
          <div className={formData.addOns.largerStorage ? picked : unPicked}>
            <div className="flex items-center justify-around">
              <button
                className={
                  formData.addOns.largerStorage ? clickedBtn : unClickedBtn
                }
                onClick={() => handleTick(2)}
              >
                {formData.addOns.largerStorage && (
                  <img src={checkIcon} alt="check" />
                )}
              </button>
              <div className="flex flex-col">
                <p className="font-semibold">Larger Storage</p>
                <p className="text-[12px] text-[#9699ab]">
                  Extra 1TB of cloud save
                </p>
              </div>
            </div>
            <p className="text-[#473dffff] text-[14px]">
              {isYearly ? "+20$/yr" : "+$2/mo"}
            </p>
          </div>
          <div
            className={formData.addOns.customizableProfile ? picked : unPicked}
          >
            <div className="flex items-center justify-around">
              <button
                className={
                  formData.addOns.customizableProfile
                    ? clickedBtn
                    : unClickedBtn
                }
                onClick={() => handleTick(3)}
              >
                {formData.addOns.customizableProfile && (
                  <img src={checkIcon} alt="check" />
                )}
              </button>
              <div className="flex flex-col">
                <p className="font-semibold">Customizable profile</p>
                <p className="text-[12px] text-[#9699ab]">
                  Custom theme on your profile
                </p>
              </div>
            </div>
            <p className="text-[#473dffff] text-[14px]">
              {isYearly ? "+20$/yr" : "+$2/mo"}
            </p>
          </div>
        </div>
        <div className="bg-white h-[10vh] w-full z-[999] justify-between items-center hidden lg:flex mt-[2rem]">
          <button
            className="text-[#9699abff] ml-[1rem] hover:text-black"
            onClick={handlePrevious}
          >
            Go Back
          </button>
          <button
            className="bg-[#02295aff] h-50 py-[0.5rem] px-[1rem] border rounded-md text-white  hover:opacity-90"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
