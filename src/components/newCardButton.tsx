'use client'
import React from 'react';

interface CustomButtonProps {
    text: string;
    onClick: () => void;
}

export default function CustomButton({ text, onClick }: CustomButtonProps) {
    return (
        <button
            className="bg-orange-500 text-white max-h-12 px-10 rounded-xl shadow-md hover:bg-orange-600 transition-all"
            onClick={() => onClick()}
        >
            {text}
        </button>
    );
};