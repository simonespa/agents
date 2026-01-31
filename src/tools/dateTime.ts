import { tool } from 'ai';
import { z } from 'zod';

export const dateTime = tool({
  description: 'Use this tool when you are asked to provide date and time without location information. Returns the current date and time of the location where the user is asking the question from. Do not use this tool if the user provides a specific location.',
  inputSchema: z.object({}),
  execute: async () => {
    return new Date().toLocaleString()
  }
});
