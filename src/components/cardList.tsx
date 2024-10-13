"use client"
import React from 'react';
import Card from './card';

export default function CardList() {
  const cards = [
    { id: 1, title: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Lorem ipsum dolor sit amet' },
    { id: 3, title: 'Lorem ipsum dolor sit amet' },
    { id: 4, title: 'Lorem ipsum dolor sit amet' },
    { id: 5, title: 'Lorem ipsum dolor sit amet' },
    { id: 6, title: 'Lorem ipsum dolor sit amet' },
    { id: 7, title: 'Lorem ipsum dolor sit amet' },
    { id: 8, title: 'Lorem ipsum dolor sit amet' },
  ];

  const handleDelete = (id: number) => {
    console.log(`Excluir card com id: ${id}`);
  };

  const handleEdit = (id: number) => {
    console.log(`Editar card com id: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            onDelete={() => handleDelete(card.id)}
            onEdit={() => handleEdit(card.id)}
          />
        ))}
      </div>
    </div>
  );
};
