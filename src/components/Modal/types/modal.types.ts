import { ReactElement } from "react";

export interface IModal {
    component: ReactElement;
    onClose?: () => void;
}