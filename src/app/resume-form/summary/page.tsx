import Pagination from "@/components/Pagination";
import SummaryForm from "@/components/SummaryForm";
import Link from "next/link";

const summary = () => {
  return (
    <>
      <div className="mt-16 mx-auto p-4 max-w-[960px]">
        {/* Back Button */}
        <Link href="/resume-form/details">
          <button className="text-white bg-violet-600 stdBtn mb-10">
            Go Back
          </button>
        </Link>

        {/* Pagination */}
        <Pagination completed={1} />

        {/* Inputs */}
        <SummaryForm />

        {/* Buttons */}
        <div className="flex space-x-3 justify-center items-center">
          <Link href="/resume-form/details">
            <button className="text-violet-600 border-[1px] border-violet-600 stdBtn">
              Back
            </button>
          </Link>
          <Link href="/resume-form/work">
            <button className="text-white bg-violet-600 stdBtn btnHover">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default summary;
