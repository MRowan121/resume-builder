import { useState } from "react";

type PageProps = {
  currentPage: number;
};

const DetailsForm = ({ currentPage }: PageProps) => {
  const [details, setDetails] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    portfolio: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`flex flex-wrap my-10 ${currentPage === 1 ? null : "hidden"}`}
    >
      {/* Name */}
      <div className="p-2 basis-2/3">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm break-words">
            Name<sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            placeholder="Your name"
            id="name"
            name="name"
            className="detailsForm"
            required
            autoComplete="off"
            // value={details.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* Job Title */}
      <div className="p-2 basis-1/3">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 text-sm break-words">
            Job Title<sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            id="title"
            name="title"
            className="detailsForm"
            required
            autoComplete="off"
            // value={details.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* Email */}
      <div className="p-2 basis-full">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm break-words">
            Email<sup className="text-red-500">*</sup>
          </label>
          <input
            type="email"
            placeholder="Your email"
            id="email"
            name="email"
            className="detailsForm"
            required
            autoComplete="off"
            // value={details.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* Contact */}
      <div className="p-2 basis-1/3">
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm break-words">
            Contact Number<sup className="text-red-500">*</sup>
          </label>
          <input
            type="tel"
            placeholder="Contact"
            id="phone"
            name="phone"
            className="detailsForm"
            required
            autoComplete="off"
            // value={details.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* GitHub */}
      <div className="p-2 basis-1/3">
        <div className="flex flex-col">
          <label htmlFor="github" className="mb-1 text-sm break-words">
            GitHub
          </label>
          <input
            type="text"
            placeholder="GitHub"
            id="github"
            name="github"
            className="detailsForm"
            autoComplete="off"
            // value={details.github}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* LinkedIn */}
      <div className="p-2 basis-1/3">
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="mb-1 text-sm break-words">
            LinkedIn
          </label>
          <input
            type="text"
            placeholder="LinkedIn"
            id="linkedin"
            name="linkedin"
            className="detailsForm"
            autoComplete="off"
            // value={details.linkedin}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* Portfolio */}
      <div className="p-2 basis-full">
        <div className="flex flex-col">
          <label htmlFor="portfolio" className="mb-1 text-sm break-words">
            Portfolio Website
          </label>
          <input
            type="text"
            placeholder="Your portfolio website"
            id="portfolio"
            name="portfolio"
            className="detailsForm"
            autoComplete="off"
            // value={details.portfolio}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
