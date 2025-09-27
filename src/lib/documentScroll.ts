"use client"

export const hideScrollFromTheDocument = () => {
    document.body.style.overflow = "hidden";
}

export const addScrollToTheDocument = () => {
    document.body.style.overflow = "auto";
}