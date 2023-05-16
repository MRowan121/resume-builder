
const Pagination = () => {
    return (
        <div className="flex justify-center items-center text-lg p-5 space-x-4">
            <p className="pageNum border-2 border-violet-600">1</p>
            <p>Personal Details</p>
            <div className="w-10 border-[1px] border-white"></div>
            <div className="pageNum">2</div>
            <p>Summary</p>
            <div className="w-10 border-[1px] border-white"></div>
            <p className="pageNum">3</p>
            <p>Work History</p>
            <div className="w-10 border-[1px] border-white"></div>
            <p className="pageNum">4</p>
            <p>Skills</p>
            <div className="w-10 border-[1px] border-white"></div>
            <p className="pageNum">5</p>
            <p>Education</p>
        </div>
    )
}

export default Pagination