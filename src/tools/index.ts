import { dateTime } from "./dateTime.js";

/**
 * Collection of available tools for the agent.
 */
export const tools = {
  dateTime
};

/**
 * Executes a tool by name with the given arguments.
 *
 * @param name Tool name
 * @param args Arguments to be passed to the tool
 * @returns A string representing the output of the tool execution
 */
export async function executeTool(
  name: string,
  args: any,
) {
  const tool = tools[name as keyof typeof tools];

  if (!tool) {
    return`Tool with name "${name}" not found.`;
  }

  const execute = tool.execute;

  if (!execute) {
    return `Tool "${name}" does not have an execute function.`;
  }

  return await execute(args, {
    toolCallId: '',
    messages: [],
  });
}
