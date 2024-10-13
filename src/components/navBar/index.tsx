import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-purple-700 to-pink-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-red p-2">
                        <Image
                            src="/logo-teste.svg" // Substitua por sua logo
                            alt="Logo"
                            width={250}
                            height={250}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}