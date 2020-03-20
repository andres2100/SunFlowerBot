module.exports = {
	name: 'beep',
	description: 'Beep!',
	guildOnly: true,
	execute(message) {
		message.channel.send('Boop.');
	},
};