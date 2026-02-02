#!/usr/bin/env node

import meow from 'meow';
import { render } from 'ink';
import CommandLineApp from './ui/CommandLineApp.js';
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

let prompt = '';

if (cli.input.length === 1) {
  prompt = cli.input[0]?.trim() ?? '';
}

render(React.createElement(CommandLineApp, { prompt }));
