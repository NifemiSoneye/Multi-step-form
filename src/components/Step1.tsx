import SideNav from "./SideNav";
import { useSelector, useDispatch } from "react-redux";
import { setPersonalInfo } from "../store/formSlice";
import { type RootState } from "../store/store";

type PropType = {
  pageNumber: number;
  error: { Name: boolean; Email: boolean; Phone: boolean; Plan: boolean };
  handleNext: () => void;
  activePage: string;
  linkBase: string;
  normalWhiteSpace: string;
};
const Step1 = ({
  pageNumber,
  error,
  handleNext,
  activePage,
  linkBase,
  normalWhiteSpace,
}: PropType) => {
  const formData = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setPersonalInfo({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <>
      <div className={normalWhiteSpace}>
        <SideNav
          pageNumber={pageNumber}
          activePage={activePage}
          linkBase={linkBase}
        />
        {pageNumber === 1 && (
          <div className="lg:ml-[2rem] lg:mt-[1rem] lg:mr-[5rem]">
            <p className="text-[#02295aff] font-bold text-[1.5rem]">
              Personal info
            </p>
            <p className="text-[#9699abff] pt-[0.5rem]">
              Please provide your name, email address, and phone number.
            </p>
            <div className="mt-[1rem]">
              <div className="flex flex-col mb-[0.5rem]">
                <label
                  htmlFor="Name"
                  className="flex justify-between text-[12px] text-[#02295aff]"
                >
                  Name{" "}
                  {error.Name && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </label>
                <input
                  name="Name"
                  type="text"
                  placeholder="e.g Stephen King"
                  value={formData.Name}
                  onChange={handleChange}
                  className={`border p-[0.3rem] hover:border-[#473dffff] ${
                    error.Name ? "border-red-500" : "border-[#9699abff]"
                  }`}
                />
              </div>
              <div className="flex flex-col mb-[0.5rem]">
                <label
                  htmlFor="Email Address"
                  className="flex justify-between text-[12px] text-[#02295aff]"
                >
                  Email Address{" "}
                  {error.Email && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </label>
                <input
                  name="Email"
                  type="text"
                  placeholder="e.g stephenking@lorem.com"
                  className={`border p-[0.3rem] hover:border-[#473dffff] ${
                    error.Email ? "border-red-500" : "border-[#9699abff]"
                  }`}
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mb-[0.5rem]">
                <label
                  htmlFor="Phone Number"
                  className="flex justify-between text-[12px] text-[#02295aff]"
                >
                  Phone Number{" "}
                  {error.Phone && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="e.g +1 234 567 890"
                  className={`border p-[0.3rem]  hover:border-[#473dffff] ${
                    error.Phone ? "border-red-500" : "border-[#9699abff]"
                  }`}
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="bg-white h-[10vh] w-full z-[999] justify-end items-center hidden lg:flex">
              <button
                className="bg-[#02295aff] h-50 py-[0.5rem] px-[1rem] border rounded-md text-white mt-[5rem] hover:opacity-90"
                onClick={handleNext}
              >
                Next Step
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Step1;
