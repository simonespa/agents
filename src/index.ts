#!/usr/bin/env node

import { runAgent } from "./agent.js";
import meow from 'meow';

const cli = meow(
  `
    Usage
      $ agents <prompt>

    Examples
      $ agents "Tell me a joke about computers."

      Why do programmers prefer dark mode?

      Because light attracts bugs!
  `,
  {
    importMeta: import.meta,
  },
);

if (cli.input.length === 1) {
  const prompt = cli.input[0];
  runAgent(prompt!);
}
