import React from "react";
type PropType = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
};

const Footer = ({ pageNumber, setPageNumber, handleNext }: PropType) => {
  const handlePrevious = () => {
    setPageNumber((prev) => prev - 1);
  };
  return (
    <>
      {pageNumber === 1 && (
        <div className="bg-white absolute bottom-0 h-[10vh] w-full z-[999] flex justify-end items-center lg:hidden">
          <button
            className="bg-[#02295aff] h-50 mr-[1rem] py-[0.5rem] border rounded-md text-white px-[1rem]"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      )}
      {pageNumber > 1 && pageNumber < 4 && (
        <div className="bg-white absolute bottom-0 h-[10vh] w-full z-[999] flex justify-between items-center lg:hidden">
          <button
            className="text-[#9699abff] ml-[1rem]"
            onClick={handlePrevious}
          >
            Go Back
          </button>
          <button
            className="bg-[#02295aff] h-50 mr-[1rem] py-[0.5rem] border rounded-md text-white px-[1rem]"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      )}
      {pageNumber === 4 && (
        <div className="bg-white absolute bottom-0 h-[10vh] w-full z-[999] flex justify-between items-center lg:hidden">
          <button
            className="text-[#9699abff] ml-[1rem]"
            onClick={handlePrevious}
          >
            Go Back
          </button>
          <button
            className="bg-[#473dffff] h-50 mr-[1rem] py-[0.5rem] border rounded-md text-white px-[1rem]"
            onClick={handleNext}
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
