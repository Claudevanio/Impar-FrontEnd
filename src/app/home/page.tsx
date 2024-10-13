"use client"
import CardList from "@/components/cardList";
import Header from "@/components/header";
import CustomButton from "@/components/newCardButton";
import NewCardModal from "@/components/newCardModal";
import { CardService } from "@/services/cardService";
import { ICard } from "@/types/card";
import { useEffect, useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [cards, setCards] = useState<ICard[] | []>([]);
    const [loading, setLoading] = useState(true);

    const handleOpen = () => setIsOpen(!isOpen);


    const getCards = async () => {
        setLoading(true);
        const res = await CardService.GetAll({ Page: 1 });

        setCards(res.itens);
        setLoading(false);
    }

    useEffect(() => {
        getCards();
    }, []);

    return (
        <main className="min-h-screen bg-gray-100 items-center">
            <Header />

            <div className="mx-48">
                <div className="flex flex-row justify-between mt-6">
                    <div className="text-center py-8">
                        <h1 className="text-3xl font-semibold text-purple-700">Resultado de busca</h1>
                    </div>

                    <div className="flex justify-center py-4">
                        <CustomButton text="Novo Card" onClick={handleOpen} />
                    </div>
                </div>
                <CardList cards={cards} loading={loading}/>
            </div>

            <NewCardModal isOpen={isOpen} setIsOpen={handleOpen} />
        </main>
    )
}
