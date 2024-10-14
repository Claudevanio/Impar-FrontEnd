"use client"
import { useCallback, useEffect, useState } from 'react';
import { Input } from './ui/input';
import { useDebounce } from '@/hooks/use-debounce';

interface HeaderProps {
    searchCards: (name: string) => void;
    updateData: (page: number) => void;
}

export default function Header({ searchCards, updateData }: HeaderProps) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchResult = useCallback(() => {
        searchCards(searchTerm);
    }, [searchTerm, searchCards]);

    const { debouncedFunction } = useDebounce(handleSearchResult, 800);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    useEffect(() => {
        if (searchTerm.length > 0) {
            debouncedFunction();
            return;
        }

        updateData(1);
    }, [searchTerm]);

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
                        className='placeholder:text-gray-400 text-xl'
                        value={searchTerm}
                        onChange={handleSearch}
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