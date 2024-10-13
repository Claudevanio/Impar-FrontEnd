import CustomButton from "./newCardButton";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from 'next/image';

interface DeleteModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    onConfirm: () => void;
}

export default function DeleteModal({ isOpen, setIsOpen, onConfirm }: DeleteModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className=" flex items-center  justify-center bg-white z-50">
                <div>
                    <div className="flex justify-center ml-10 my-2 bg-[#DB25250F] rounded-full border-4 border-gray-300 w-36 h-36">
                        <Image src="/Icon-trash.svg" alt="Ícone de Lixeira" width={64} height={64} />
                    </div>

                    <DialogTitle className="text-red-600 text-2xl flex justify-center font-semibold mb-2">
                        Excluir
                    </DialogTitle>
                    <DialogDescription className="text-sm font-bold text-gray-500">
                        CERTEZA QUE DESEJA EXCLUIR?
                    </DialogDescription>

                    <div className="my-4 border-t border-gray-300"></div>

                    <DialogFooter className="flex justify-center gap-4">
                        <CustomButton
                            text="Excluir"
                            onClick={() => { onConfirm(); setIsOpen(); }}
                            className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white rounded-md"
                        />
                        <CustomButton
                            text="Cancelar"
                            onClick={setIsOpen}
                            className="border border-red-600 bg-white text-red-600 px-6 py-2 rounded-md  hover:bg-red-50"
                        />
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
}
