const CategoryList = () => {
    return (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
            <li className="border border-borderGray p-2">
                <h2 className="text-primaryTextColor text-base">Osobiste</h2>
            </li>
            <li className="border border-borderGray p-2">
                <h2 className="text-primaryTextColor text-base">Praca</h2>
            </li>
            <li className="border border-borderGray p-2">
                <h2 className="text-primaryTextColor text-base">Domowe</h2>
            </li>
            <li className="border border-borderGray p-2">
                <h2 className="text-primaryTextColor text-base">Wakacje</h2>
            </li>
        </ul>
    )
};

export default CategoryList;