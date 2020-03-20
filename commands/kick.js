module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	guildOnly: true,
	execute(message) {
		if (message.member.hasPermission('KICK_MEMBERS')) {
			console.log('This member can kick');
		} else {
			message.channel.send('You dont have enough perms!');
			return;
		}
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();
		message.channel.send(`This user died: ${taggedUser.username}`);
		const death = message.guild.member(taggedUser);
		death.kick();
	},
};