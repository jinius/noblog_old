'use strict';

function ConfigManager(config) {
	this.config = config || {};
}

module.exports = new ConfigManager();
