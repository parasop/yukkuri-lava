const glob = require('glob')
const path = require('node:path')

class EventHandler {
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

  async loadEvents() {
		const events = await this.getFiles(`${this.path}/events/**/*.js`);
		let i = 0;

		this.client.events = {};
		delete require.cache[`${this.path}/structures/event.js`];
		for (const filePath of events) {
			delete require.cache[filePath];

			const File = require(filePath);

			const Event = new File(this.client);
			if (Event.disable) continue;
			this.client.events[Event.name] = Event;

			this.client.on(Event.emiter, Event.load.bind(Event));
			i++;
		}

		console.log(`Loaded ${i} events loaded.`);
	}
}

module.exports = EventHandler