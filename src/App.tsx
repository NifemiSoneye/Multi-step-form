import { useState } from "react";
import Nav from "./components/Nav";
import Step1 from "./components/Step1";
import Footer from "./components/Footer";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
type ErrorType = {
  Name: boolean;
  Email: boolean;
  Phone: boolean;
  Plan: boolean;
  addOns: boolean;
};
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

function App() {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    Name: "",
    Email: "",
    Phone: "",
    plan: {
      name: "",
      price: 0,
      billing: "Monthly", // or "yearly"
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
      price: {
        onlineServicePrice: 0,
        largerStoragePrice: 0,
        customizableProfilePrice: 0,
        total: 0,
      },
    },
  });
  const [error, setError] = useState<ErrorType>({
    Name: false,
    Email: false,
    Phone: false,
    Plan: false,
    addOns: false,
  });
  const handleNext = (): void => {
    if (pageNumber === 1) {
      const newErrors = {
        Name: formData.Name.trim() === "",
        Email: formData.Email.trim() === "",
        Phone: formData.Phone.trim() === "",
        Plan: false,
        addOns: false,
      };
      setError(newErrors);

      if (!Object.values(newErrors).some(Boolean)) {
        setPageNumber((prev) => prev + 1);
      }
    } else if (pageNumber === 2) {
      if (!formData.plan.name) {
        setError((prev) => ({ ...prev, Plan: true }));
        return;
      }
      setError((prev) => ({ ...prev, Plan: false }));
      setPageNumber((prev) => prev + 1);
    } else if (pageNumber === 3) {
      const { onlineService, largerStorage, customizableProfile } =
        formData.addOns;
      const hasAddOn = onlineService || largerStorage || customizableProfile;

      if (!hasAddOn) {
        setError((prev) => ({ ...prev, addOns: true }));
        return;
      }

      setError((prev) => ({ ...prev, addOns: false }));
      setPageNumber((prev) => prev + 1);
    } else if (pageNumber === 4) {
      setPageNumber((prev) => prev + 1);
    }
  };
  const handlePrevious = (): void => setPageNumber((prev) => prev - 1);
  const activePage =
    "bg-[#bfe2fdff] text-black w-7 h-7 rounded-full border border-white flex items-center justify-center m-[0.5rem]";
  const linkBase =
    "w-7 h-7 rounded-full border border-white flex items-center justify-center m-[0.5rem] text-white";
  const normalWhiteSpace =
    "bg-white z-[999] overflow-y-auto h-[55vh] top-[6rem] left-1/2 -translate-x-1/2 absolute  w-[90%] max-w-md rounded-lg shadow-md p-6 lg:h-[70vh] lg:min-w-[50vw] lg:grid lg:grid-cols-[1fr,2fr] p-[1rem]";
  const longerWhiteSpace =
    "bg-white z-[999] h-[75vh] overflow-y-auto max-h-[90vh]  top-[5rem] lg:top-[6rem] left-1/2 -translate-x-1/2 absolute  w-[90%] max-w-md rounded-lg shadow-md p-6 lg:h-[70vh] lg:min-w-[50vw] lg:grid lg:grid-cols-[1fr,2fr] p-[1rem]";
  return (
    <>
      <div className="bg-[#f0f5ffff] min-h-screen">
        <Nav
          pageNumber={pageNumber}
          activePage={activePage}
          linkBase={linkBase}
        />
        {pageNumber === 1 && (
          <Step1
            pageNumber={pageNumber}
            formData={formData}
            error={error}
            setFormData={setFormData}
            handleNext={handleNext}
            activePage={activePage}
            linkBase={linkBase}
            normalWhiteSpace={normalWhiteSpace}
          />
        )}
        {pageNumber === 2 && (
          <Step2
            pageNumber={pageNumber}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            formData={formData}
            setFormData={setFormData}
            error={error}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            activePage={activePage}
            linkBase={linkBase}
            longerWhiteSpace={longerWhiteSpace}
          />
        )}
        {pageNumber === 3 && (
          <Step3
            pageNumber={pageNumber}
            isYearly={isYearly}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            formData={formData}
            setFormData={setFormData}
            error={error}
            activePage={activePage}
            linkBase={linkBase}
            normalWhiteSpace={normalWhiteSpace}
          />
        )}
        {pageNumber === 4 && (
          <Step4
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            formData={formData}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            activePage={activePage}
            linkBase={linkBase}
            normalWhiteSpace={normalWhiteSpace}
          />
        )}
        {pageNumber === 5 && (
          <Step5
            pageNumber={pageNumber}
            activePage={activePage}
            linkBase={linkBase}
            normalWhiteSpace={normalWhiteSpace}
          />
        )}
        <Footer
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          handleNext={handleNext}
        />
      </div>
    </>
  );
}

export default App;
