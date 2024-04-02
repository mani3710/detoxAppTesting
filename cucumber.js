const argument = [
   "./node_modules/.bin/cucumber-js",
   "--require-module @babel/register",
   "e2e/features/*/*.feature"
].join(' ');

module.exports = {
   default:argument
}

