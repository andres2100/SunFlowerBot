module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them (but yes really).',
	guildOnly: true,
	execute(message) {
		if (message.member.hasPermission('BAN_MEMBERS')) {
			console.log('This member can kick');
		} else {
			message.channel.send('You dont have enough perms!');
			return;
		}
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();
		message.channel.send(`This user REALLY died :(: ${taggedUser.username}`);
		const death = message.guild.member(taggedUser);
		death.ban();
	},
};