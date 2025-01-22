const InputDate = ({taskData, onChange}) => (
    <div className="relative border border-solid border-borderGray rounded cursor-pointer flex items-center  bg-primaryLightColor">
        <input 
            className={`appearance-none h-[22px] min-w-[85px] block text-xs/[1] pl-1 py-[5px] pr-4 focus:outline-none cursor-pointer bg-primaryLightColor 
            [&::-webkit-calendar-picker-indicator]:opacity-0
            [&::-webkit-calendar-picker-indicator]:absolute
            [&::-webkit-calendar-picker-indicator]:top-0
            [&::-webkit-calendar-picker-indicator]:right-0
            [&::-webkit-calendar-picker-indicator]:w-full
            [&::-webkit-calendar-picker-indicator]:h-full
            [&::-webkit-calendar-picker-indicator]:cursor-pointer 
            ${!taskData ? 
            "[&::-webkit-datetime-edit-text]:hidden [&::-webkit-datetime-edit]:hidden [&::-webkit-datetime-edit-fields-wrapper]:hidden " 
            : 
            "[&::-webkit-datetime-edit-text]:visible [&::-webkit-datetime-edit]:visible [&::-webkit-datetime-edit-fields-wrapper]:visible "}
            `}
            type="date"
            name="date"
            placeholder="dd.mm.rrrr"
            value={taskData}
            onChange={onChange}
        />
        {!taskData && (
            <span className="absolute left-0 top-[-50%] translate-y-[50%] text-xs/[1] p-[5px] pr-[18px] pointer-events-none whitespace-nowrap">
                Termin
            </span>)
        }
        <div className="absolute inset-y-0 right-0 pr-[2px] flex items-center pointer-events-none">
            <svg 
                className="h-[13px] w-[13px] text-gray-400" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
            </svg>
        </div>
    </div>
);

export default InputDate;