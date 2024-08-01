import {
	InteractionResponseType,
	InteractionType,
	verifyKeyMiddleware,
} from "discord-interactions";
import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.post(
	"/test",
	verifyKeyMiddleware(process.env.PUBLIC_KEY),
	async function (req: express.Request, res: express.Response) {
		const { type, data, id } = req.body;

		if (type === InteractionType.PING) {
			return res.send({ type: InteractionResponseType.PONG });
		}

		if (type === InteractionType.APPLICATION_COMMAND) {
			const { name } = data;
			if (name === "test") {
				return res.send({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data: {
						content: "endpoint is working",
					},
				});
			}
		}
	},
);

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
