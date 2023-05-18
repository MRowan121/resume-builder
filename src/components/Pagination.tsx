import { BsCheckLg } from "react-icons/bs";

type PageProps = {
  currentPage: number;
};

const Pagination = ({ currentPage }: PageProps) => {
  const steps = [
    "Personal Details",
    "Summary",
    "Work History",
    "Skills",
    "Education",
  ];

  const checkCompletion = (i: number) => {
    return (
      <p
        className={`
          pageNum 
          ${i === currentPage - 1 ? "border-2 border-violet-600" : null} 
          ${i < currentPage - 1 ? "bg-violet-600" : null}
        `}
      >
        {i < currentPage - 1 ? <BsCheckLg className="text-3xl" /> : `${i + 1}`}
      </p>
    );
  };

  const displaySteps = steps.map((step, index) => (
    <>
      <div key={index} className="flex justify-center items-center ">
        {checkCompletion(index)}
        <p className="ml-4">{step}</p>
      </div>
      <div
        className={`
          ${index < currentPage - 1 ? "bg-violet-600" : "bg-white"} 
          ${index + 1 === 5 ? "hidden" : null} 
           h-[2px] flex-1 mx-4 block
        `}
      />
    </>
  ));

  return <div className="py-5 flex items-center">{displaySteps}</div>;
};

export default Pagination;
