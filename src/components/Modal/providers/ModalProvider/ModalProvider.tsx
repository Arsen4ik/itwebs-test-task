"use client"

import { IChildren } from "@/types";
import { useModal, Modal } from "../../";
import { FC, useEffect } from "react";
import { addScrollToTheDocument, hideScrollFromTheDocument } from "@/lib";

interface Props extends IChildren { }

const ModalProvider: FC<Props> = ({ children }) => {
    const { modals, closeModalById } = useModal();

    useEffect(() => {
        if (modals.size) hideScrollFromTheDocument();
        else addScrollToTheDocument();
    }, [modals.size]);

    return (
        <>
            {children}
            {Array.from(modals?.keys?.() ?? []).map?.(modalKey => {
                const modal = modals.get(modalKey);
                if (!modal) return null;
                return <Modal
                    key={modalKey}
                    onClose={() => closeModalById(modalKey)}
                >
                    {modal.component}
                </Modal>
            })}
        </>
    );
}

export default ModalProvider;