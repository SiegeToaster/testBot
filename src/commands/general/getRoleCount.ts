import { CommandInteraction } from 'discord.js'
import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders'

export const commandData = new SlashCommandBuilder()
	.setName('absent')
	.setDescription('Check who is absent in the server.')
	.addStringOption((option: SlashCommandStringOption): SlashCommandStringOption => 
		option.setName('user')
			.setDescription('User/Role to specifically check.')
	)

export default async function absent(interaction: CommandInteraction): Promise<void> {
	// @ts-ignore
	let testVar: string = interaction.options.getString('role')
	testVar = testVar.slice(3,-1)
	// @ts-ignore
	let newTestVar = await interaction.guild?.roles.fetch(testVar)
	let newNewTestVar = newTestVar?.members.size
	console.log(newNewTestVar)
	interaction.reply({content: `${newTestVar?.name} has ${newNewTestVar?.toString()} member(s).`, ephemeral: true })
}
