'use client'
import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export default function CustomButton({ text, onClick, className, ...props }: CustomButtonProps) {
    return (
        <button
            className={cn(
                "bg-orange-500 text-white max-h-12 px-10 rounded-xl shadow-md hover:bg-orange-600 transition-all",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
}