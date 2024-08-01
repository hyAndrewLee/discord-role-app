import { InstallGlobalCommands } from "./utils.ts";

type Options = {
	type: number;
	name: string;
	description: string;
	required: boolean;
	choices: {
		name: string;
		value: string;
	}[];
};

export type CommandType = {
	name: string;
	description: string;
	type: number;
	integration_types: number[];
	contexts: number[];
	options?: Options[];
};

const TEST_COMMAND: CommandType = {
	name: "test",
	description: "Basic command",
	type: 1,
	integration_types: [0, 1],
	contexts: [0, 1, 2],
};

const ALL_COMMANDS = [TEST_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
