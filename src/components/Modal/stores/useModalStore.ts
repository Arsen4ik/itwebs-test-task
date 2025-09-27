import { create } from "zustand";
import { IModal } from "../";

export type TModalsMapKey = number;

interface IModalStore {
    modals: Map<TModalsMapKey, IModal>;
    openModal: (modal: IModal) => void;
    closeLastModal: () => void;
    closeModalById: (id: TModalsMapKey) => void;
    closeAllModals: () => void;
}

export const useModal = create<IModalStore>((set, get) => ({
    modals: new Map(),
    openModal(modal) {
        const modals = get().modals;
        const newMap = new Map(modals);
        newMap.set(modals.size, { ...modal });
        set({ modals: newMap });
    },
    closeLastModal() {
        const modals = get().modals;
        if (modals.size === 0) return;

        const newMap = new Map(modals);
        newMap.delete(modals.size - 1);
        set({ modals: newMap });
    },
    closeModalById(id) {
        const modals = get().modals;
        const newMap = new Map(modals);
        newMap.delete(id);
        set({ modals: newMap });
    },
    closeAllModals() {
        const newMap = new Map();
        set({ modals: newMap })
    }
}))