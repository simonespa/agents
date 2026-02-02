import { Text } from "ink";
import Spinner from "ink-spinner";
import { runAgent } from "../agent.js";
import { useEffect, useState } from "react";

interface CommandLineAppProps {
  prompt: string;
}

export default function CommandLineApp({ prompt }: CommandLineAppProps) {
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    async function executePrompt() {
      if (prompt) {
        const result = await runAgent(prompt);
        setOutput(result);
      } else {
        setTimeout(() => {
          setOutput('No prompt provided.');
        }, 1000);
      }
    }
    executePrompt();
  }, [prompt]);

  const component = output ? <Text color="green">{output}</Text> : <Text color="violet">
    <Spinner type="dots" /> 🤖 Thinking...
  </Text>;

  return component;
}
