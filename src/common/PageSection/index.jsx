const PageSection = ({title, body, headerMenu, menu}) => (
    // <div className="h-full overflow-hidden">
        <div className="h-full">
            {title ? (
                <div className="border border-solid border-borderGray p-3 bg-primaryGreyColor flex items-center sticky">
                    <h2 className="text-lg/[1] font-bold grow">{title}</h2>
                    {headerMenu}
                </div>
            ) : ""}
            {menu}
            <div className="p-3 h-[calc(100%-91px)] overflow-y-auto">
                {body}
            </div>
        </div>
    // </div>
);

export default PageSection;