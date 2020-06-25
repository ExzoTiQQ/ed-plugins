const Plugin = require("../plugin");

const STYLES = `
	.hidden-blocked-message {
		display: none !important;
	}
	
	.da-groupStart > .da-cozy { 
		display:none;
	}
	
	.da-groupStart { 
		margin-top: .7rem !important;
	}`;

module.exports = new Plugin({
	name: "Hide blocked messages",
	description: "Hides blocked messages buttons so you're not tempted to click them.",
	author: "ехzо",
	color: "#42bcf5",
	load() {
		this.__previousName = findModule("blockedSystemMessage").blockedSystemMessage;
		const el = document.createElement("style");
		el.innerHTML = STYLES;
		el.setAttribute("id", "blocked-messages-styles");
		document.head.appendChild(el);
		findModule("blockedSystemMessage").blockedSystemMessage = "hidden-blocked-message";
	},
	unload() {
		findModule("blockedSystemMessage").blockedSystemMessage = this.__previousName || "";
		document.getElementById("blocked-messages-styles").remove();
	}
});
