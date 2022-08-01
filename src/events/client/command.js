const Event = require("../../structures/event.js")

class Command extends Event {
  constructor(client) {
    super(client, {
      name: "Command Load",
      emiter: "interactionCommand"
    })
  }
  
  async run(i) {
    if (!i.isCommand()) return
    if (!i.member.voice.channel) return i.reply({ content: 'Please join to voice channel first before using me!', ephemeral: true })
    
    if (this.client.interactionCommand[i.commandName]) {
      this.client.interactionCommand.load(i).catch((err) => console.log('Error while executing command', err.stuck))
    }
  }
}