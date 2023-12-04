const filterbox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => {
	if(event.target.tagName !== 'LI') return false;

	let filterclass = event.target.dataset['f'];

	filterbox.forEach(elem => {
		elem.classList.remove('hide');
		if(!elem.classList.contains(filterclass) && filterclass !== 'all') {
			elem.classList.add('hide');
		}
	});
});