function selectSomePrompt() {
	var prompts = [
		"What was a time when I felt like I was in a movie?",
		"Describe my perfect holiday, the location, the people I want to spend it with.",
		"Describe peace.",
		"What is something I've always wanted to do but haven't?",
		"What is my favorite thing about myself?",
		"Elaborate on the quote: 'that dog don't hunt, man.'",
		"Elaborate on the quote: '\nBeing eminently qualified isn't a status we achieve or a conclusion we reach.'",
		"What was the last time I screwed up?",
		"How did I handle the situation the last time I screwed up on something?  Had I taken ownership over it?",
		"What was something I progressively gotten better on something specific?",
		"What's the progress of me making progress on my personality?  How?",
		"Describe my favorite place in the world.",
		"What was the most critical feedback I've gotten on something?",
		"If I could time travel, where and when would I go?",
		"Describe a dream I've had that left a lasting impression on me.",
		"What is my proudest achievement so far?",
		"What does success mean to me?",
		"If I could have dinner with any historical figure, who would it be and why?",
		"What is my favorite book, and how did it impact me?",
		"Describe a challenge I overcame and what I learned from it.",
		"What are my top three values in life?",
		"If I had a superpower, what would it be and how would I use it?",
		"What is my favorite way to relax and unwind?",
		"Describe a person who has had a significant influence on my life.",
		"What is the most beautiful natural place I've ever visited?",
		"If I could learn any new skill instantly, what would it be?",
		"What is my favorite childhood memory?",
		"Describe a moment when I felt truly alive and in the moment.",
		"What are my long-term goals and aspirations?",
		"What do I believe is the key to a successful and fulfilling life?",
		"If I could change one thing about the world, what would it be?",
		"Describe a time when I stood up for something I believe in.",
		"What is the best piece of advice I've ever received?",
		"What is the most important lesson I've learned from a mistake?",
		"If I could travel to any fictional world, where would I go?",
		"Describe a time when I made a positive impact on someone else's life.",
		"What are my favorite hobbies or pastimes?",
		"If I could visit any era in history, which one would I choose and why?",
		"Describe the band I personally relate to very much.",
		"Describe a personal project or goal I'm currently working on.",
		"What is the most valuable possession I own, and why is it important to me?",
		"If I could have any job in the world, what would it be?",
		"What is my favorite season, and what do I love about it?",
		"Describe a time when I felt like I was at my best.",
		"How do I prepare for a difficult conversation?",
		"How do I prepare for a difficult situation?",
		"What is my favorite way to spend time with friends?",
		"If I were to date someone, what would the future look like for us?"
	];


	var randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

	document.getElementById("prompt").innerHTML = randomPrompt;

}

document.getElementById("refresh").onclick = function() {
	selectSomePrompt();
};

// DYNAMIC THEME SETTINGS BASED ON OS PREFERENCE
// https://github.com/anthonytedja/notion/blob/main/time/script.js

function light() {
	console.log("Fired");
	document.documentElement.setAttribute('theme', 'light');
}

function dark() {
	console.log("Fired");

	document.documentElement.setAttribute('theme', 'dark');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	dark();
} else {
	light();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	if (event.matches) {
		dark();
	} else {
		light();
	}
});
