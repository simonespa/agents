#!/usr/bin/env node

import { runAgent } from "./agent.js";
import meow from 'meow';
import { render } from 'ink';
import CommandLine from './ui/CommandLine.js';
import React from "react";

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

let output = '';

if (cli.input.length === 1) {
  const prompt = cli.input[0];
  output = await runAgent(prompt!);
}

render(React.createElement(CommandLine, { output }));
