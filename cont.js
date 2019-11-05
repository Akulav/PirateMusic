let p = 0;
document.addEventListener('click', () => {
	if (p == 0) {
		let url = chrome.runtime.getURL('note.mp3')
		console.log(url)
		let a = new Audio(url)
		a.play();
		p = 1;
	}
})

