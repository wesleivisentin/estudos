const getFlagValue = require("./flags")

console.log(`Oi ${getFlagValue("--name")}. ${getFlagValue("--hahaha")}`);