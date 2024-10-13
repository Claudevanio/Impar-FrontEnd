

export default function SearchInput() {
    return (
        <div className="flex justify-center py-6">
            <div className="bg-white rounded-xl shadow-md flex items-center px-4 py-2 w-full">
                <input
                    type="text"
                    placeholder="Digite aqui sua busca..."
                    className="w-full px-4 py-2 outline-none rounded-full text-gray-600"
                />
                <div className="ml-2">
                    <img src="/lupa.svg" alt="Lupa" className="w-6 h-6 text-gray-500" />
                </div>
            </div>
        </div>
    );
}