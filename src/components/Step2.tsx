import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";

type AddOnsType = {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  price: {
    onlineServicePrice: number;
    largerStoragePrice: number;
    customizableProfilePrice: number;
    total: number;
  };
};

type FormDataType = {
  Name: string;
  Email: string;
  Phone: string;
  plan: {
    name: string;
    price: number;
    billing: string;
  };
  addOns: AddOnsType;
};

type PropType = {
  pageNumber: number;
  handleNext: () => void;
  handlePrevious: () => void;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  error: { Name: boolean; Email: boolean; Phone: boolean; Plan: boolean };
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  activePage: string;
  linkBase: string;
  longerWhiteSpace: string;
};

const Step2 = ({
  pageNumber,
  handleNext,
  handlePrevious,
  formData,
  setFormData,
  error,
  isYearly,
  setIsYearly,
  activePage,
  linkBase,
  longerWhiteSpace,
}: PropType) => {
  const arcadeIcon = new URL("../assets/icon-arcade.svg", import.meta.url).href;
  const advancedIcon = new URL("../assets/icon-advanced.svg", import.meta.url)
    .href;
  const proIcon = new URL("../assets/icon-pro.svg", import.meta.url).href;
  const [select, setSelect] = useState<number>(0);
  const unselected = error.Plan
    ? "flex items-center border border-red-500 mt-[0.5rem] p-[0.5rem] rounded-md min-h-[80px] lg:flex-col lg:items-start  lg:w-[7rem] lg:max-h-[150px]"
    : "flex items-center border border-[#9699abff] mt-[0.5rem] p-[0.5rem] rounded-md min-h-[80px] lg:flex-col lg:items-start  lg:w-[7rem] lg:max-h-[150px] hover:border-[#473dffff]";
  const selected =
    "flex items-center border border-[#473dffff] p-[0.5rem] rounded-md min-h-[80px] bg-[#fafbffff] mt-[0.5rem] lg:flex-col lg:items-start lg:w-[7rem] lg:max-h-[150px]";
  const handleSelect = (option: number) => {
    if (option != select) {
      let chosenPlan = { name: "", price: 0 };

      switch (option) {
        case 1:
          chosenPlan = {
            name: "Arcade",
            price: isYearly ? 90 : 9,
          };
          break;
        case 2:
          chosenPlan = {
            name: "Advanced",
            price: isYearly ? 120 : 12,
          };
          break;
        case 3:
          chosenPlan = {
            name: "Pro",
            price: isYearly ? 150 : 15,
          };
          break;
      }
      setSelect(option);
      setFormData((prev) => ({
        ...prev,
        plan: {
          ...prev.plan,
          ...chosenPlan,
          billing: isYearly ? "yearly" : "Monthly",
        },
      }));
    } else {
      setSelect(0);
      setFormData((prev) => ({
        ...prev,
        plan: {
          name: "",
          price: 0,
          billing: "Monthly",
        },
      }));
    }
  };
  /*   useEffect(() => {
    console.log("Updated Data:", formData);
  }, [formData]); */
  const handleToggle = () => {
    setIsYearly((prev) => {
      const newIsYearly = !prev;

      // reset plan in both local state and parent formData
      setSelect(0);
      setFormData((form) => ({
        ...form,
        plan: {
          name: "",
          price: 0,
          billing: newIsYearly ? "yearly" : "Monthly",
        },
      }));

      return newIsYearly;
    });
  };
  return (
    <div className={longerWhiteSpace}>
      <SideNav
        pageNumber={pageNumber}
        activePage={activePage}
        linkBase={linkBase}
      />
      <div className="lg:ml-[2rem] lg:mt-[0.5rem] lg:mr-[5rem]">
        <p className="text-[#02295aff] font-bold text-[1.5rem] ">
          Select your Plan
        </p>
        <p className="text-[#9699abff] pt-[0.5rem]">
          You have the option of monthly or yearly billing
        </p>
        {error.Plan && (
          <p className="text-red-500 font-bold text-sm " aria-live="polite">
            {" "}
            A Plan must be Selected
          </p>
        )}
        <div className="mt-[0.5rem] flex flex-col lg:flex-row lg:gap-[1rem]">
          <div
            className={formData.plan.name === "Arcade" ? selected : unselected}
            onClick={() => handleSelect(1)}
          >
            <img src={arcadeIcon} alt="arcade-icon" />
            <div className="flex flex-col items-start pl-[0.5rem] lg:mt-[2rem]">
              <p className="text-[#02295aff]">Arcade</p>
              <p className="text-[#9699abff]">
                {isYearly ? "$90/yr" : "$9/mo"}
              </p>
              {isYearly && <p className="text-[12px]">2 months free</p>}
            </div>
          </div>
          <div
            className={
              formData.plan.name === "Advanced" ? selected : unselected
            }
            onClick={() => handleSelect(2)}
          >
            <img src={advancedIcon} alt="Advanced-icon" />
            <div className="flex flex-col items-start pl-[0.5rem] lg:mt-[2rem]">
              <p className="text-[#02295aff]">Advanced</p>
              <p className="text-[#9699abff]">
                {isYearly ? "$120/yr" : "$12/mo"}
              </p>
              {isYearly && <p className="text-[12px]">2 months free</p>}
            </div>
          </div>
          <div
            className={formData.plan.name === "Pro" ? selected : unselected}
            onClick={() => handleSelect(3)}
          >
            <img src={proIcon} alt="pro-icon" />
            <div className="flex flex-col items-start pl-[0.5rem] lg:mt-[2rem]">
              <p className="text-[#02295aff]">Pro</p>
              <p className="text-[#9699abff]">
                {isYearly ? "$150/yr" : "$15/mo"}
              </p>
              {isYearly && <p className="text-[12px]">2 months free</p>}
            </div>
          </div>
        </div>
        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-6 bg-[#f8f9fe] rounded-lg p-3 mt-6">
          <span
            className={`font-medium ${
              !isYearly ? "text-[#02295a]" : "text-[#9699ab]"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={handleToggle}
            className="relative w-12 h-6 bg-[#02295a] rounded-full p-1 flex items-center"
          >
            <span
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isYearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`font-medium ${
              isYearly ? "text-[#02295a]" : "text-[#9699ab]"
            }`}
          >
            Yearly
          </span>
        </div>
        <div className="bg-white h-[10vh] w-full z-[999] justify-between items-center hidden lg:flex mt-[2.5rem]">
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

export default Step2;
