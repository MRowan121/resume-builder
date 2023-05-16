import Pagination from "@/components/Pagination";
import Link from "next/link";

const summary = () => {
  return (
    <div className="mt-16 mx-10 p-4 min-h-screen">
      {/* Back Button */}
      <Link href="/details">
        <button className="text-white bg-violet-600 stdBtn mb-10">
          Go Back
        </button>
      </Link>

      {/* Pagination */}
      <Pagination completed={1} />

      {/* Buttons */}
      <div className="flex space-x-3 justify-center items-center">
        <Link href="/details">
          <button className="text-violet-600 border-[1px] border-violet-600 stdBtn">
            Back
          </button>
        </Link>
        <Link href="">
          <button className="text-white bg-violet-600 stdBtn btnHover">
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default summary;
