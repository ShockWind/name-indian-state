import { atom } from "jotai";

export const UNSELECTED = "UNSELECTED";
export const selectionAtom = atom<string>(UNSELECTED);
