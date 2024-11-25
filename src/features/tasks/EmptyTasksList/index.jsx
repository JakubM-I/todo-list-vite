const EmptyTasksList = () => {
    return (
        <div className="grow">
            <p className="text-center mb-2">Dodaj swoje pierwsze zadanie</p>
            <span className="flex justify-center items-center gap-1">
                <p>lub</p><button>wczytaj przykładowe zadania</button>
            </span>
        </div>
    )
};

export default EmptyTasksList;