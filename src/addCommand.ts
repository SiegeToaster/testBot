import { config } from 'dotenv'
config()
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import * as commandExports from './commands/commandExports'
import { RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord.js'

const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = []
let command: keyof typeof commandExports
for (command in commandExports) {
	// console.log(commandExports[command].toJSON()) // DEBUG
	commands.push(commandExports[command].toJSON())
}

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN)

console.log('Commands to be inputted:')
console.log(commands)

;(async (): Promise<void> => {
	try {
		console.log('Started refreshing application (/) commands.')
		
		await rest.put(
			Routes.applicationGuildCommands('1029540828772827166', '867233761364148245'),
			{ body: commands },
		)
		console.log('Successfully reloaded application (/) commands.')
	} catch (error) {
		console.error(error)
	}
})()
