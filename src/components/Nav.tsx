type PropType = {
  pageNumber: number;
  activePage: string;
  linkBase: string;
};

const Nav = ({ pageNumber, linkBase, activePage }: PropType) => {
  return (
    <div className="bg-step2 w-full h-40 bg-no-repeat bg-cover bg-top font-bold text-white lg:hidden ">
      <div className="pt-[1rem] flex justify-center">
        <p className={pageNumber === 1 ? activePage : linkBase}>1</p>
        <p className={pageNumber === 2 ? activePage : linkBase}>2</p>
        <p className={pageNumber === 3 ? activePage : linkBase}>3</p>
        <p
          className={
            pageNumber === 4 || pageNumber === 5 ? activePage : linkBase
          }
        >
          4
        </p>
      </div>
    </div>
  );
};

export default Nav;
