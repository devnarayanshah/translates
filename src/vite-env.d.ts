/// <reference types="vite/client" />
type Lange = "ja" | "hi" | "es" | "fr";

type Words = {
  word: string;
  meaning: string;
  options: string[];
};

interface StateTypes {
  loading: boolean;
  results: string[];
  error?: string;
  words: Words[];
}
