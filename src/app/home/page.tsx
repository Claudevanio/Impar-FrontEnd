"use client"
import CardList from "@/components/cardList";
import Header from "@/components/header";
import CustomButton from "@/components/newCardButton";
import NewCardModal from "@/components/newCardModal";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { CardService } from "@/services/cardService";
import { ICard } from "@/types/card";
import { useEffect, useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [cards, setCards] = useState<ICard[] | []>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);


    const getCards = async (page: number) => {
        setLoading(true);
        const res = await CardService.GetAll({ Page: page, Size: 8 });

        setCards(res.itens);
        setHasNextPage(res.pagination.page < res.pagination.totalPages)
        setLoading(false);
    }

    const searchCards = async (name: string) => {
        setLoading(true);
        const res = await CardService.GetAll({ Page: 1, Size: 8, Name: name });

        setCards(res.itens);
        setLoading(false);
    }

    useEffect(() => {
        getCards(currentPage);
    }, [currentPage]);

    return (
        <main className="min-h-screen bg-gray-100 items-center font-normal">
            <Header searchCards={searchCards} updateData={getCards} />

            <div className="mx-48">
                <div className="flex flex-row justify-between mt-6">
                    <div className="text-center py-8">
                        <h1 className="text-3xl  text-primary font-thin">Resultado de busca</h1>
                    </div>

                    <div className="flex justify-center py-4">
                        <CustomButton text="Novo Card" onClick={handleOpen} />
                    </div>
                </div>
                <CardList cards={cards} loading={loading} updateData={getCards} />

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => setCurrentPage(1)}>{currentPage}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext aria-disabled={true} onClick={() => setCurrentPage(prev => prev + 1)} href="#" className={`${!hasNextPage ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
                                }`} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <NewCardModal isOpen={isOpen} setIsOpen={handleOpen} updateData={getCards} />
        </main>
    )
}
