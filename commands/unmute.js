/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable brace-style */
/* eslint-disable indent */
module.exports = {
	name: 'unmute',
	description: 'unMute the tag person :<.',
	guildOnly: true,
	execute(message) {
		if (message.member.hasPermission('KICK_MEMBERS')) {
			console.log('This member can kick');
		} else {
			message.channel.send('You dont have enough perms!');
			return;
		}
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to mute them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`User ${taggedUser.username} Has been muted`);
        const victimtogetkilled = message.guild.member(taggedUser);
        const muterole = message.member.roles.cache.find(thing => thing.name === "MUTED");
        console.log('about to give role');
        victimtogetkilled.roles.remove("690276971963613234");
        console.log('UNkilled lmao');
	},
};

