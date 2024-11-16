const PageSection = ({title, body, menu}) => (
    <div className="border border-solid border-borderGray">
        {title ? (
            <div className="border-b border-solid border-b-borderGray p-3 bg-primaryGreyColor flex items-center">
                <h2 className="text-lg/[1] font-bold grow">{title}</h2>
                {menu}
            </div>
        ) : ""}
        <div className="p-3">
            {body}
        </div>
    </div>
);

export default PageSection;