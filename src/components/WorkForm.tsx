const WorkForm = () => {
  return (
    <div className="flex flex-wrap my-10">
      {/* Company */}
      <div className="p-2 basis-2/3">
        <div className="flex flex-col">
          <label htmlFor="companyName" className="mb-1 text-sm break-words">
            Company<sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            id="companyName"
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
      {/* Company Website */}
      <div className="p-2 basis-2/3">
        <div className="flex flex-col">
          <label htmlFor="companyWebsite" className="mb-1 text-sm break-words">
            Company Website
          </label>
          <input
            type="text"
            placeholder="Company website"
            id="companyWebsite"
            className="detailsForm"
            required
            autoComplete="off"
          />
        </div>
      </div>
      {/* Employment Type */}
      <div className="p-2 basis-1/3">
        <div className="flex flex-col">
          <label htmlFor="employmentType" className="mb-1 text-sm break-words">
            Employment Type<sup className="text-red-500">*</sup>
          </label>
          <input
            type="tel"
            placeholder="Select employment type"
            id="employmentType"
            className="detailsForm"
            required
            autoComplete="off"
          />
        </div>
      </div>
      {/* Country */}
      <div className="p-2 basis-1/2">
        <div className="flex flex-col">
          <label htmlFor="country" className="mb-1 text-sm break-words">
            Country
          </label>
          <input
            type="text"
            placeholder="Country"
            id="country"
            className="detailsForm"
            autoComplete="off"
          />
        </div>
      </div>
      {/* City */}
      <div className="p-2 basis-1/2">
        <div className="flex flex-col">
          <label htmlFor="city" className="mb-1 text-sm break-words">
            City
          </label>
          <input
            type="text"
            placeholder="City"
            id="city"
            className="detailsForm"
            autoComplete="off"
          />
        </div>
      </div>
      {/* From Date */}
      <div className="p-2 basis-1/2">
        <div className="flex flex-col">
          <label htmlFor="fromDate" className="mb-1 text-sm break-words">
            From<sup className="text-red-500">*</sup>
          </label>
          <input
            type="date"
            // placeholder="Your portfolio website"
            id="fromDate"
            className="detailsForm"
            autoComplete="off"
          />
        </div>
      </div>
      {/* To Date */}
      <div className="p-2 basis-1/2">
        <div className="flex flex-col">
          <label htmlFor="toDate" className="mb-1 text-sm break-words">
            To<sup className="text-red-500">*</sup>
          </label>
          <input
            type="date"
            // placeholder="Your portfolio website"
            id="toDate"
            className="detailsForm"
            autoComplete="off"
          />
        </div>
      </div>
      {/* Current Job */}
      <div className="p-2 basis-1/2 max-w-[50%]">
        <div className="flex items-center">
          <input
            type="checkbox"
            // placeholder="Your portfolio website"
            id="currentJob"
            // className="detailsForm"
            className="h-5 w-5 bg-neutral-400 rounded"
            autoComplete="off"
          />
          <label htmlFor="currentJob" className="mb-1 pl-3 text-sm break-words">
            I currently work here
          </label>
        </div>
      </div>
      {/* Technologies */}
      <div className="p-2 basis-full">
        <div className="flex flex-col">
          <label htmlFor="technologies" className="mb-1 text-sm break-words">
            Technologies
          </label>
          <input
            type="text"
            // placeholder="Your portfolio website"
            id="technologies"
            className="detailsForm"
            autoComplete="off"
          />
        </div>
      </div>
      {/* Description */}
      <div className="p-2 basis-full">
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1 text-sm break-words">
            Description<sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            // placeholder="Your portfolio website"
            id="description"
            className="detailsForm"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkForm;
