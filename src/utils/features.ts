import axios from "axios";
import _ from "lodash";
import { generate } from "random-words";

export const translate = async (params: Lange): Promise<Words[]> => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    

    const text = generate(8); // returns array of 8 random words
    console.log(text);

    const results: Words[] = [];

    for (const word of text) {
      const { data } = await axios.post(
        "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        {
          from: "auto",
          to: params,
          text: word,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "google-translate113.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        }
      );

      results.push({
        word: data.trans,   // translated word
        meaning: word,      // original English word
        options: [],
      });
    }

    for (const item of results) {
      const incorrect = _.sampleSize(
        results
          .filter((w) => w.meaning !== item.meaning)
          .map((w) => w.meaning),
        3
      );
      item.options = _.shuffle([item.meaning, ...incorrect]);
    }

    return results;
  } catch (error: any) {
    console.error("Translation error:", error.response?.data || error.message);
    throw new Error("Something went wrong during translation.");
  }
};

export const check = (arr1: string[], arr2: string[]): number => {
  let match = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      match++;
    }
  }
  return match;
};
