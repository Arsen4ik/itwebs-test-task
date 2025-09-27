type ClassValue = string | undefined | null | boolean | number;

export const cn = (...classes: ClassValue[]): string => {
    return classes.filter(Boolean).join(" ");
};

export const classnames = cn;