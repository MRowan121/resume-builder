import { BsCheckLg } from "react-icons/bs";

type PageProps = {
  completed: number;
};

const Pagination = ({ completed }: PageProps) => {
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
          ${i === completed ? "border-2 border-violet-600" : null} 
          ${i < completed ? "bg-violet-600" : null}
        `}
      >
        {i < completed ? <BsCheckLg className="text-3xl" /> : `${i + 1}`}
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
          ${index < completed ? "bg-violet-600" : "bg-white"} 
          ${index + 1 === 5 ? "hidden" : null} 
           h-[2px] flex-1 mx-4 block
        `}
      />
    </>
  ));

  return <div className="py-5 flex items-center">{displaySteps}</div>;
};

export default Pagination;
