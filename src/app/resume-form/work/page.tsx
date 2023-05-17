import DetailsForm from "@/components/DetailsForm";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const work = () => {
  return (
    <>
      <div className="mt-16 mx-auto px-4 max-w-[960px]">
        {/* Back Button */}
        <Link href="/resume-form/summary">
          <button className="text-white bg-violet-600 stdBtn mb-10">
            Go Back
          </button>
        </Link>

        {/* Pagination */}
        <Pagination completed={2} />

        {/* Inputs */}
        <DetailsForm />

        {/* Buttons */}
        <div className="flex space-x-3 justify-center items-center">
          <Link href="/resume-form/summary">
            <button className="text-violet-600 border-[1px] border-violet-600 stdBtn">
              Back
            </button>
          </Link>
          <Link href="/resume-form/skills">
            <button className="text-white bg-violet-600 stdBtn btnHover">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default work;
