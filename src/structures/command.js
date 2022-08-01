class SlashComnand {
  constructor(client, opt) {
    this.client = client
    this.name = opt.name
  this.nameLocalizations = opt.nameLocalizations || {}
    this.description = opt.description
    this.descriptionLocalizations = opt.descriptionLocalizations || {}
  this.type = opt.type || "CHAT_INPUT" 
  this.options = opt.options || [{}]
  this.defaultPermission = opt.defaultPermission || false
  this.inVoice = opt.inVoice || false
  this.developer = opt.developer || false
  this.permissions = opt.permissions || []
  this.clientPermissions = opt.clientPermissions || []
  }
  
  async run(i) {
  throw new Error("There is some error while executing this command")
  }
}

module.exports = SlashComnand