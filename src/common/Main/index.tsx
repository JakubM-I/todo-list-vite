const MainElement = ({children}: {children: React.ReactElement}) => (
        <main className="p-0 mobile-l:p-[15px] h-full">
            {children}
        </main>
    );

export default MainElement;