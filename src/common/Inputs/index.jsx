const InputDate = ({taskData, onChange}) => (
    <>  
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
    </>

);

export default InputDate;