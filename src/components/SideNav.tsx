type PropType = {
  pageNumber: number;
  activePage: string;
  linkBase: string;
};
const SideNav = ({ pageNumber, activePage, linkBase }: PropType) => {
  return (
    <>
      <div className="bg-step1 bg-no-repeat bg-contain bg-top mr-[2rem] h-full hidden lg:flex flex-col p-[1rem] ">
        <div className="flex items-center my-[0.5rem]">
          <p className={pageNumber === 1 ? activePage : linkBase}>1</p>
          <div className="flex flex-col text-[12px]">
            <p className="text-[#9699abff]">Step 1</p>
            <p className="text-white font-bold">YOUR INFO</p>
          </div>
        </div>
        <div className="flex items-center my-[0.5rem]">
          <p className={pageNumber === 2 ? activePage : linkBase}>2</p>
          <div className="flex flex-col text-[12px]">
            <p className="text-[#9699abff]">Step 2</p>
            <p className="text-white font-bold">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex items-center my-[0.5rem]">
          <p className={pageNumber === 3 ? activePage : linkBase}>3</p>
          <div className="flex flex-col text-[12px]">
            <p className="text-[#9699abff]">Step 3</p>
            <p className="text-white font-bold">ADD-ONS</p>
          </div>
        </div>
        <div className="flex items-center my-[0.5rem]">
          <p
            className={
              pageNumber === 4 || pageNumber === 5 ? activePage : linkBase
            }
          >
            4
          </p>
          <div className="flex flex-col text-[12px]">
            <p className="text-[#9699abff]">Step 4</p>
            <p className="text-white font-bold">SUMMARY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
