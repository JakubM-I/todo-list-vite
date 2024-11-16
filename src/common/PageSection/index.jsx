const PageSection = ({title, body}) => (
    <div className="border border-solid border-borderGray">
        <div className="border-b border-solid border-b-borderGray p-3 bg-primaryGreyColor flex">
        <h2 className="text-lg/[1] font-bold grow">{title}</h2>
        </div>
       
        <div className="p-3">
            {body}
        </div>
    </div>
);

export default PageSection;