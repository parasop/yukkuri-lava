const Event = require("../../structures/event.js")

class Ready extends Event {
  constructor(client) {
    super(client, {
      name: "Ready Event",
      emiter: "ready"
    })
  }
  
  async run() {
    console.log(`${this.client.user.tag} is online!`)
  }
}

module.exports = Ready