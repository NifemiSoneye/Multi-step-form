import SideNav from "./SideNav";
import { useSelector } from "react-redux";
import { type RootState } from "../store/store";

type PropType = {
  activePage: string;
  linkBase: string;
  normalWhiteSpace: string;
};

const Step5 = ({ activePage, linkBase, normalWhiteSpace }: PropType) => {
  const pageNumber = useSelector(
    (state: RootState) => state.navigation.pageNumber
  );
  const thankIcon = new URL("../assets/icon-thank-you.svg", import.meta.url)
    .href;
  return (
    <div className={normalWhiteSpace}>
      <SideNav
        pageNumber={pageNumber}
        activePage={activePage}
        linkBase={linkBase}
      />
      <div className="flex flex-col items-center justify-center  mt-[3rem] text-center mx-[0.5rem] lg:mt-[1.5rem]">
        <img
          src={thankIcon}
          alt="  Thank-you"
          className="h-[50px] w-[50px] mb-[1rem] lg:h-[70px] lg:w-[70px] "
        />
        <div>
          <p className="text-[#02295aff] text-[1.5rem] font-bold lg:mb-[0.5rem]">
            Thank you!
          </p>
          <p className="text-[#9699ab] text-nowrap text-[14px] lg:hidden">
            Thanks for confirming your subscription!
          </p>
          <p className="text-[#9699ab] text-[14px] lg:hidden ">
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
          </p>
          <p className="text-[#9699ab] text-[1rem] hidden lg:block  ">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step5;
