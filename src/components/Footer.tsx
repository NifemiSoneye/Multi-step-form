
import { useDispatch, useSelector } from "react-redux";
import { previousPage } from "../store/navigationSlice";
import { type RootState } from "../store/store";
type PropType = {
  handleNext: () => void;
};

const Footer = ({ handleNext }: PropType) => {
  const pageNumber = useSelector((state : RootState) => state.navigation.pageNumber )
  const dispatch = useDispatch();
  const handlePrevious = () => {
    dispatch(previousPage());
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
