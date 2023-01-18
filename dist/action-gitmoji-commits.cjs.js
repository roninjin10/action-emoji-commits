'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./action-gitmoji-commits.cjs.prod.js");
} else {
  module.exports = require("./action-gitmoji-commits.cjs.dev.js");
}
