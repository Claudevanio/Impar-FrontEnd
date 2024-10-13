'use client'
import CardList from "@/components/cardList";
import Header from "@/components/header";
import CustomButton from "@/components/newCardButton";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o Drawer

  const handleOpen = () => setIsOpen(true); // Função para abrir o Drawer
  const handleClose = () => setIsOpen(false);

  console.log(isOpen)
  return (
    <main className="min-h-screen bg-gray-100 items-center">
      <Header />

      <div className=" mx-48">
        <div className="flex flex-row justify-between mt-6">
          <div className="text-center py-8">
            <h1 className="text-3xl font-semibold text-purple-700">Resultado de busca</h1>
          </div>

          <div className="flex justify-center py-4">
            <CustomButton text="Novo Card" onClick={handleOpen} />
          </div>
        </div>

        <CardList />
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}> {/* Passando props para o Drawer */}
        <DrawerContent> {/* Adicionando classe para abrir à direita */}
          <h2 className="text-lg font-semibold">Adicionar Novo Card</h2>
          <input type="text" placeholder="Nome" className="mt-2 p-2 border rounded" />
          <input type="file" className="mt-2 p-2 border rounded" />
        </DrawerContent>
      </Drawer>
    </main>
  );
}
