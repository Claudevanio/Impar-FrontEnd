import SearchInput from './searchInput';

export default function Header() {
    return (
        <header>
            <div className="relative">
                <img
                    src="/fundo-busca.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 mx-48 md:mt-10 xl:mt-32">
                    <SearchInput />
                </div>
            </div>
        </header>
    );
}