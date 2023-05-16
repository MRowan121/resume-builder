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
        className={`pageNum ${
          i === completed ? "border-2 border-violet-600" : null
        } ${i < completed ? "bg-violet-600" : null}`}
      >
        {i < completed ? <BsCheckLg className="text-3xl" /> : `${i + 1}`}
      </p>
    );
  };

  const displaySteps = steps.map((step, index) => (
    <div
      key={index}
      className="flex justify-center items-center text-lg space-x-4"
    >
      {checkCompletion(index)}
      <p>{step}</p>
      <div
        className={`${index < completed ? "border-purple-600" : null} ${
          index + 1 === 5 ? "hidden" : null
        } w-10 border-[1px] border-white`}
      />
    </div>
  ));

  return <div className="p-5 flex space-x-4">{displaySteps}</div>;
};

export default Pagination;
