import React from 'react';

interface CardProps {
    title: string;
    base64: string;
    onDelete: () => void;
    onEdit: () => void;
}

export default function Card({ title, onDelete, onEdit, base64 }: CardProps) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">

                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <img src={base64} alt="Card Image" className="w-12 h-12" />
                </div>

                <p className="text-gray-600 text-center mb-4">{title}</p>
            </div>

            <div className="flex justify-between w-full border-t pt-2">
                <button
                    onClick={onDelete}
                    className="flex items-center justify-center text-gray-400 w-full py-2"
                >
                    <img src="/Icon-trash.svg" alt="Excluir" className="w-4 h-4 mr-2 text-red-500" />
                    Excluir
                </button>
                <button
                    onClick={onEdit}
                    className="flex items-center justify-center text-gray-400 w-full py-2"
                >
                    <img src="/Icon-edit.svg" alt="Editar" className="w-4 h-4 mr-2 text-orange-500" />
                    Editar
                </button>
            </div>
        </div>
    );
};