"use client"
import React, { useState } from 'react';
import Card from './card';
import { ICard } from '@/types/card';
import { Skeleton } from "@/components/ui/skeleton";
import DeleteModal from './deleteCardModal';
import { CardService } from '@/services/cardService';
import EditCardModal from './editCardModal';
import { useToast } from '@/hooks/use-toast';

interface CardListProps {
  cards: ICard[];
  loading: boolean;
  updateData: (page: number) => void;
}

export default function CardList({ cards, loading, updateData }: CardListProps) {
  const { toast } = useToast()

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

  const handleDelete = (card: ICard) => {
    setSelectedCard(card);
    setDeleteModalOpen(true);
  };

  const handleEdit = (card: ICard) => {
    setSelectedCard(card);
    setEditModalOpen(true);
    console.log(`Editar card com id: ${card.id}`);
  };

  const confirmDelete = async () => {
    if (selectedCard?.id) {
      await CardService.Delete(selectedCard.id ?? "")
      toast({
        title: "Card deletado!",
        description: `O card "${selectedCard.name}" foi excluído com sucesso!`,
        variant: "default",
      });
      updateData(1);
      console.log(`Card deletado com ID: ${selectedCard?.id}`);
    };

    setDeleteModalOpen(false);
  };

  return (
    <div className="container mx-auto py-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-64 w-full bg-gray-200" />
          ))
        ) : (
          <>
            {cards && cards.length > 0 ? (
              cards.map((card) => (
                <Card
                  key={card.id}
                  base64={card.photo.base64}
                  title={card.name}
                  onDelete={() => handleDelete(card)}
                  onEdit={() => handleEdit(card)}
                />
              ))
            ) : (
              <div>
                <p>Não há cards para exibir. Crie seu primeiro card :)</p>
              </div>
            )}
          </>
        )}
      </div>
      <DeleteModal isOpen={deleteModalOpen} setIsOpen={() => setDeleteModalOpen(false)} onConfirm={confirmDelete} />
      <EditCardModal isOpen={editModalOpen} setIsOpen={() => setEditModalOpen(false)} card={selectedCard!} updateData={updateData} />
    </div>
  );
}
