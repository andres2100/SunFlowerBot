/* eslint-disable no-var */
/* eslint-disable no-trailing-spaces */
module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	guildOnly: true,
	execute(message) {
		var yes = Math.random(1,100);
		console.log(yes);
		if(yes > 10)
		{
			message.channel.send('Pong.');
		}
		else
		{
			message.channel.send('Ping. WAIT NO!. ok fine you win >:(');
		}
		
	},
};