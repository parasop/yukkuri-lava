const Command = require('../../structures/command.js')

class Join extends Command {
  constructor(client) {
    super(client, {
      name: "join",
      description: "Invite the bot to join in your voice channel",
      inVoice: true
    })
  }
  
  async run(i) {
    
  }
}