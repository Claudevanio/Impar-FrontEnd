import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CardService } from "@/services/cardService";
import { ICreateCard } from "@/types/card";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

interface NewCardModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
}

export default function NewCardModal({ isOpen, setIsOpen }: NewCardModalProps) {

    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("Nenhum arquivo selecionado");
    const [cardName, setCardName] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
            setFileName(file.name);
        }
    };

    const handleCreateCard = async () => {
        if (!cardName || !imageBase64) {
            setErrorMessage("Por favor, preencha todos os campos.");
            return;
        }

        const cardData: ICreateCard = {
            name: cardName,
            base64: imageBase64,
        };

        const res = await CardService.Create(cardData);
        console.log(cardData);

        setErrorMessage("");
        setFileName("");
        setCardName("");
        setIsOpen();
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="px-6 py-14">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-3 text-3xl font-semibold text-primary">
                        <Image
                            src="/icone_criar.svg"
                            width={55}
                            height={55}
                            alt="Icone Criar"
                        />
                        <span className="align-bottom">Criar card</span>
                    </SheetTitle>
                </SheetHeader>

                <hr className="my-8 border-gray-300" />

                <div className="mt-12">
                    <div className="space-y-12">
                        <div>
                            <label htmlFor="card-title" className="block text-sm font-bold text-gray-700">
                                DIGITE UM NOME PARA O CARD
                            </label>
                            <Input
                                containerClassName="p-0 h-12"
                                type="text"
                                placeholder="Digite o título"
                                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm py-2 px-5 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="card-image" className="block text-sm font-bold text-gray-700">
                                INCLUA UMA IMAGEM PARA APARECER NO CARD
                            </label>

                            <div className="mt-1">
                                <label
                                    htmlFor="card-image"
                                    className="flex items-center border border-gray-300 rounded-md py-1 px-2 pl-5 cursor-pointer"
                                >
                                    <span className="block w-full text-start text-sm text-gray-500">
                                        {fileName}
                                    </span>

                                    <span
                                        className="ml-4 inline-flex items-center px-4 py-2 justify-center border-2 border-primary-foreground text-primary-foreground text-sm font-bold rounded-md shadow-sm bg-white hover:bg-orange-100 focus:outline-none cursor-pointer min-w-52 h-full"
                                    >
                                        Escolher arquivo
                                    </span>

                                    <input
                                        id="card-image"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                        </div>

                        {errorMessage && (
                            <div className="text-red-500 text-sm">{errorMessage}</div>
                        )}

                        <hr className="border-gray-300" />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-foreground hover:bg-orange-600 focus:outline-none"
                            onClick={handleCreateCard}
                        >
                            Criar card
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
