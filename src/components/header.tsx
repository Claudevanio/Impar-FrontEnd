import { Input } from './ui/input';

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
                    <Input
                        placeholder='Digite aqui sua busca...'
                        containerClassName='text-gray-600'
                        className='placeholder:text-gray-600'
                        iconRight={
                            <div className="ml-2">
                                <img src="/lupa.svg" alt="Lupa" className="w-6 h-6 text-gray-500" />
                            </div>
                        }
                    />
                </div>
            </div>
        </header>
    );
}