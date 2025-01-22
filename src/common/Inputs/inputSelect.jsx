const InputSelect = ({ taskData, onChange, children }) => (
    <div className="relative border border-solid border-borderGray rounded cursor-pointer">
        <select
            className="appearance-none block text-xs/[1] p-[5px] pr-[20px] focus:outline-none cursor-pointer bg-primaryLightColor"
            value={taskData}
            onChange={onChange}
        >
            {children}
        </select>
        <div className="absolute inset-y-0 right-0 pr-[2px] flex items-center pointer-events-none">
            <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    </div>
);

export default InputSelect