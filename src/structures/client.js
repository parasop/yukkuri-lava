const { Client } = require("discord.js")
const Event = require("../handler/event.js") 
const Command = require("../handler/slash.js")
const Music = require("../handler/poru.js")
const { Poru } = require('poru')

class YukkuriClient extends Client {
  constructor() {
    super({ intents: ["GUILD_MEMBERS", "GUILD_VOICE_STATES", "GUILD"]})
    
    this.event = new Event(this)
    this.command = new Command(this)
    this.music = new Music(this, Poru)
  }
  
  async init() {
    this.event.loadEvents()
    this.command.loadCommand()
    this.music.loadPoru()
    this.login()
  }
}