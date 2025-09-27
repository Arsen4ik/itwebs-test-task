"use client"

import { FC } from "react";
import { IChildren } from "@/types";
import { CrossSVG } from "@/assets/icons";

interface Props extends IChildren {
    onClose?: () => void;
}

const Modal: FC<Props> = ({ children, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 w-full h-[100dvh] flex items-center justify-center bg-black/30 overflow-hidden"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl p-6 shadow-lg w-[35rem] min-h-[20rem] max-h-[700px] flex"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 flex items-center justify-center h-8 w-8 p-2 rounded-lg bg-gray-100 cursor-pointer"
                >
                    <CrossSVG />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
