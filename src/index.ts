import { Client } from "discord.js"
import { config } from 'dotenv'
config()

const client = new Client({
	intents: 1
})

client.once('ready', () => {
	console.log('test guy is now online.\n')
})

let interaction
export { interaction }

import getRoleCount from './commands/general/getRoleCount'

client.login(process.env.DISCORD_TOKEN)

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return

	console.log(`\nCommand: ${interaction.commandName}`)

	switch (interaction.commandName) {
		case 'get_role_count': {
			getRoleCount(interaction)
		}
	}
})
