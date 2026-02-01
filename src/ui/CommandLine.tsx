import { Text } from "ink";

export default function CommandLine({ output }: { output: string }) {
  return (
    <Text color="green">
      {output || 'No output generated. Please provide a prompt.'}
    </Text>
  );
}
