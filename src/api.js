import { ICONFINDER_SEARCH_ENDPOINT } from "./constants";
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

// api.js
export async function fetchProductIcon(productIdea) {
    try {
        return openai.images.generate({
            model: 'dall-e-2',
            size: '1024x1024',
            quality: 'standard',
            n: 1,
            prompt: `minimal "${productIdea}" app icon`
        }).then((r) => {
            return r.data[0].url
        })
    } catch (err) {
        console.log("THE ERROR:", err)
    }
  }
  
  export function fetchMatchingProducts(productIdea) {
    // Simulating API call to fetch matching products based on product idea
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Placeholder list of matching products
        const matchingProducts = [
          { id: 1, name: `${productIdea} Product 1`, 
          icon: 'https://example.com', description: '' },
          { id: 2, name: `${productIdea} Product 2`, 
          icon: 'https://example.com', description: 'wow' },
          { id: 3, name: `${productIdea} Product 3`, 
          icon: 'https://example.com', description: 'Hey' },
        ];
        resolve(matchingProducts);
      }, 1500); // Simulating delay
    });
  }
  