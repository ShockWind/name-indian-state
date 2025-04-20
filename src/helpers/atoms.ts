import { atom } from "jotai";
import random from "random";
import { mapKeys } from "./map-data";

export const UNSELECTED = "UNSELECTED";
export const letterAtom = atom<string>(UNSELECTED);
export const currentAnswerAtom = atom<string>(UNSELECTED);
// biome-ignore lint/style/noNonNullAssertion: We know the array is non-empty
export const expectedAnswerAtom = atom<string>(random.choice(mapKeys)!);
