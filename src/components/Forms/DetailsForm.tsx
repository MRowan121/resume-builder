type PageProps = {
  currentPage: number;
};

const DetailsForm = ({ currentPage }: PageProps) => {
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
            className="detailsForm"
            required
            autoComplete="off"
          />
        </div>
      </div>
      {/* Job Title */}
      <div className="p-2 basis-1/3">
        <div className="flex flex-col">
          <label htmlFor="job-title" className="mb-1 text-sm break-words">
            Job Title<sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            id="job-title"
            className="detailsForm"
            required
            autoComplete="off"
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
            className="detailsForm"
            required
            autoComplete="off"
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
            className="detailsForm"
            required
            autoComplete="off"
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
            className="detailsForm"
            autoComplete="off"
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
            className="detailsForm"
            autoComplete="off"
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
            className="detailsForm"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
