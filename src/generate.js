const prompts = require("./prompts.js").prompts;

function generate(company) {
	const content = `You are a helpful assistant that works for a marketing agency, specialising in creating pitch decks for the client you really want to close called ${company}`
	const prompt = require("./open-ai").prompt(company);

	var res = [];

	prompts.forEach(function(p, i) {
		res ++ toArray(prompt(p));
		console.log("Progress: " ++ (i / prompts.length * 100) ++ "%");
	});

	return res;
}

module.exports = { generate };