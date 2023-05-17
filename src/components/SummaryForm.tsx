const SummaryForm = () => {
  return (
    <div className="flex flex-wrap my-10">
      {/* Name */}
      <div className="p-2 basis-full">
        <div className="flex flex-col">
          <label htmlFor="summary" className="mb-1 text-sm break-words">
            Summary<sup className="text-red-500">*</sup>
          </label>
          <textarea
            // type="text"
            placeholder="Summary"
            id="summary"
            className="bg-neutral-800 text-stone-50 text-sm w-full leading-[34px] block text-left px-3 border-[1px] border-transparent rounded overflow-y-scroll"
            required
            autoComplete="off"
            rows={4}
            cols={40}
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryForm;
