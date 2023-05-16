import Image from "next/image";
import Link from "next/link";
import formImage from "../utilities/form-image.png";

export default function Home() {
  return (
    <main className="mt-16 mx-10 p-4 min-h-screen">
      <header className="flex justify-between items-center font-semibold">
        <h2 className="text-xl">
          <span className="text-violet-600">NextJS</span> Resume Builder
        </h2>
        <Link href="/resume-form/details">
          <button className="text-violet-600 border-[1px] border-violet-600 stdBtn btnHover">
            Create Resume
          </button>
        </Link>
      </header>
      <section className="pt-20 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">
          <span className="text-violet-600">Build</span> and{" "}
          <span className="text-violet-600">optimize</span> your developer
          resume
        </h1>
        <p className="text-xl mt-5 mb-24">
          Completely free to use, create, & download Clean ATS-friendly resume
          format to ensure you get seen by recruiters
        </p>
        <Image src={formImage} alt="form" width={900} />
        <Link href="/resume-form/details">
          <button className="text-white bg-violet-600 mt-7 stdBtn btnHover">
            Create Resume
          </button>
        </Link>
      </section>
    </main>
  );
}
