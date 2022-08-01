const glob = require('glob')
const path = require('node:path')

class SlashHandler {
  constructor(client) {
    this.client = client
  }
  
  async getFiles(filePath) {
		return new Promise((resolve, reject) => {
			glob(filePath, (er, files) => {
				if (er) return reject(er);
				resolve(files);
			});
		});
	}
	
  get path() {
		return path.dirname(require.main.filename);
	}
	
  async loadCommand() {
    const ic = await this.getFiles(`${this.path}/commands/**/*.js`)
    let i = 0
    
    this.client.interactionCommand = {}
    for (const file of ic) {
      delete require.cache[file]
      
      const File = require(file)
      const Event = new File(this.client)
      this.client.interactionCommand[Event.name] = Event
      i++
    }
    console.log(`Loaded ${i} interaction commands.`)
  }
}

module.exports = SlashHandler