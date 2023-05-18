"use client";

import Pagination from "@/components/Pagination";
import { useState } from "react";
import DetailsForm from "@/components/Forms/DetailsForm";
import SummaryForm from "@/components/Forms/SummaryForm";
import WorkForm from "@/components/Forms/WorkForm";
import SkillsForm from "@/components/Forms/SkillsForm";
import EducationForm from "@/components/Forms/EducationForm";

const resumeForm = () => {
  const [pageNum, setPageNum] = useState(1);

  const handleBackClick = () => {
    setPageNum(pageNum - 1);
  };

  const handleNextClick = () => {
    setPageNum(pageNum + 1);
  };

  return (
    <>
      <div className="mt-16 mx-auto px-4 max-w-[960px]">
        {/* Back Button */}
        <button className="text-white bg-violet-600 stdBtn mb-10">
          Go Back
        </button>

        {/* Pagination */}
        <Pagination currentPage={pageNum} />

        {/* Forms */}
        <DetailsForm currentPage={pageNum} />
        <SummaryForm currentPage={pageNum} />
        <WorkForm currentPage={pageNum} />
        <SkillsForm currentPage={pageNum} />
        <EducationForm currentPage={pageNum} />

        {/* Buttons */}
        <div className="flex space-x-3 justify-center items-center">
          <button
            className="text-violet-600 border-[1px] border-violet-600 stdBtn"
            onClick={() => handleBackClick()}
          >
            Back
          </button>
          <button
            className="text-white bg-violet-600 stdBtn btnHover"
            onClick={() => handleNextClick()}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default resumeForm;
