import React from "react";
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
  formData: FormDataType;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handlePrevious: () => void;
  activePage: string;
  linkBase: string;
  normalWhiteSpace: string;
};

const Step4 = ({
  pageNumber,
  formData,
  setPageNumber,
  handlePrevious,
  handleNext,
  activePage,
  linkBase,
  normalWhiteSpace,
}: PropType) => {
  return (
    <div className={normalWhiteSpace}>
      <SideNav
        pageNumber={pageNumber}
        activePage={activePage}
        linkBase={linkBase}
      />
      <div className="lg:ml-[2rem] lg:mt-[1rem] lg:mr-[5rem]">
        <p className="text-[#02295aff] font-bold text-[1.5rem]">Finishing up</p>
        <p className="text-[#9699ab] pt-[0.5rem] text-[14px]">
          Double-check everything looks OK before confirming.
        </p>
        <div className="bg-[#f8f9fe] p-[0.75rem] mt-[1rem] rounded-lg">
          <p className="text-[#02295aff] font-semibold">
            {formData.plan.name}({formData.plan.billing})
          </p>
          <div className="flex justify-between items-center">
            <p
              className="text-[#9699ab] underline text-[14px] cursor-pointer hover:text-[#473dffff]"
              onClick={() => setPageNumber(2)}
            >
              Change
            </p>
            <p className="text-[#02295aff] font-semibold">
              ${formData.plan.price}
              {formData.plan.billing === "Monthly" ? "/mo" : "/yr"}
            </p>
          </div>
          <div className="border-t mt-[0.5rem] mb-[0.5rem]">
            {formData.addOns.onlineService && (
              <div className="flex justify-between items-center text-[14px] mt-[0.5rem]">
                <p className="text-[#9699ab]">Online Service</p>
                <p>
                  +${formData.addOns.price.onlineServicePrice}/
                  {formData.plan.billing === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            )}
            {formData.addOns.largerStorage && (
              <div className="flex justify-between items-center text-[14px] mt-[0.5rem]">
                <p className="text-[#9699ab]">Larger Storage</p>
                <p>
                  +${formData.addOns.price.largerStoragePrice}/
                  {formData.plan.billing === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            )}
            {formData.addOns.customizableProfile && (
              <div className="flex justify-between items-center text-[14px] mt-[0.5rem]">
                <p className="text-[#9699ab]">Customizable Profile</p>
                <p>
                  +${formData.addOns.price.customizableProfilePrice}/
                  {formData.plan.billing === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" flex justify-between items-center mt-[1rem] mx-[0.5rem]">
          <p className=" text-[#9699ab] text-[14px]">
            Total (
            {formData.plan.billing === "Monthly" ? "per month" : "per year"})
          </p>
          <p className="text-[#473dffff] font-semibold">
            +${formData.addOns.price.total}
            {formData.plan.billing === "Monthly" ? "/mo" : "/yr"}
          </p>
        </div>
        <div className="bg-white h-[10vh] w-full z-[999] justify-between items-center hidden lg:flex mt-[5rem]">
          <button
            className="text-[#9699abff] ml-[1rem] hover:text-black"
            onClick={handlePrevious}
          >
            Go Back
          </button>
          <button
            className="bg-[#473dffff] h-50 py-[0.5rem] px-[1rem] border rounded-md text-white hover:opacity-50  "
            onClick={handleNext}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
