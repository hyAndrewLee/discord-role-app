declare global {
	namespace NodeJS {
		interface ProcessEnv {
			APP_ID: string;
			DISCORD_TOKEN: string;
			PUBLIC_KEY: string;
			PORT: string;
		}
	}
}

export {};
