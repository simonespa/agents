#!/usr/bin/env node

import 'dotenv/config';
import { generateText } from 'ai';
import { huggingface } from '@ai-sdk/huggingface';
import { ollama } from 'ai-sdk-ollama';
import { SYSTEM_PROMPT } from './system-prompt.js';
import { tools, executeTool } from './tools/index.js';

export async function runAgent(prompt: string) {
  // const { text, toolCalls } = await generateText({
  //   model: huggingface('deepseek-ai/DeepSeek-V3-0324'),
  //   prompt,
  //   system: SYSTEM_PROMPT,
  //   tools,
  // });

  const { text, toolCalls } = await generateText({
    model: ollama('gpt-oss:120b-cloud'),
    prompt,
    system: SYSTEM_PROMPT,
    providerOptions: { ollama: { think: true } },
    tools,
  });

  console.log('Agent Response:', text);
  console.log('Tool Calls:', toolCalls);

  toolCalls?.forEach(async (call) => {
    const toolResult = await executeTool(call.toolName, call.input);
    console.log(`Tool "${call.toolName}" executed with result:`, toolResult);
  });
}

runAgent('Tell me a joke about computers.');
