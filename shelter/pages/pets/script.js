const pets = [
	{
		"name": "Jennifer",
		"img": "../../assets/images/pets-jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Sophia",
		"img": "../../assets/images/pets-sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Woody",
		"img": "../../assets/images/pets-woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{
		"name": "Scarlett",
		"img": "../../assets/images/pets-scarlet.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Katrine",
		"img": "../../assets/images/pets-katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Timmy",
		"img": "../../assets/images/pets-timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{
		"name": "Freddie",
		"img": "../../assets/images/pets-freddy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Charly",
		"img": "../../assets/images/pets-charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
]

const logoLink = document.querySelector('.logo');
const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-list");
const link = document.querySelector(".nav-list-pets");
const darker = document.querySelector(".darker");
const logo = document.querySelector(".logo2");
const head = document.querySelector("header");
const bod = document.querySelector("html");

function go() {
	location.href = '../main/index.html'
}

burgerBtn.addEventListener("click", () => {
	menu.classList.toggle('open');
	burgerBtn.classList.toggle('rotate');
	darker.classList.toggle('overlay');
	logo.classList.toggle('open2');
	head.classList.toggle('abs');
	window.scrollTo(0, 0)
	bod.classList.toggle('scrool');
});
links.forEach((el) => el.addEventListener('click', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	head.classList.remove('abs');
	bod.classList.remove('scrool');
}));
link.addEventListener('click', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	head.classList.remove('abs');
	bod.classList.remove('scrool');
});
darker.addEventListener('click', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	head.classList.remove('abs');
	bod.classList.remove('scrool');
});
logoLink.addEventListener('click', go);
window.addEventListener('resize', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	head.classList.remove('abs');
	bod.classList.remove('scrool');
});

/*   ---   Pagination   ---   */

const container = document.querySelector(".container-cards");
const btnFirst = document.getElementById('first');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const btnLast = document.getElementById('last');
const page = document.getElementById('page');
const arr = [];
const numsNext = [];
let numsPrev = [];
let pages = null;
let petsNum = null;
let currentPage = 1;

const nextNumbers = (n) => {
	numsNext.length = 0;
	again: for (let i = numsNext.length; i < n;) {
		let num = Math.floor(Math.random() * 8);
		if (numsNext.includes(num) || numsPrev.includes(num)) {
			continue again;
		} else {
			numsNext.push(num);
			i++;
		};
	};

};
const prevNumbers = function () {
	numsPrev.length = 0;
	for (let num of numsNext) {
		numsPrev.push(num)
	}
}

const arrPets = function () {
	for (let i = arr.length; i < 48;) {
		if (window.innerWidth >= 1280) {
			pages = 6;
			nextNumbers(8);
			arr.push(...numsNext);
			i += 8;
		} else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
			pages = 8;
			nextNumbers(4);
			prevNumbers();
			arr.push(...numsNext);
			i += 4
		} else {
			pages = 16;
			nextNumbers(4);
			prevNumbers();
			arr.push(...numsNext);
			i += 4
		};
	};
	petsNum = 48 / pages;
};
const createCard = () => {
	const card = document.createElement("div");
	card.classList.add("pets-card");
	return card
};
const petCard = function (n) {
	let card = createCard();
	let img = document.createElement("img");
	let name = document.createElement("p");
	let btn = document.createElement("button");
	img.setAttribute("src", pets[n].img);
	name.classList.add("pet-name");
	name.innerText = pets[n].name;
	btn.classList.add("pet-btn");
	btn.innerText = 'Learn more';
	card.appendChild(img);
	card.appendChild(name);
	card.appendChild(btn);
	card.setAttribute("id", n)
	container.appendChild(card);
};

const containerFill = function (n) {
	container.innerHTML = "";
	let start = (n - 1) * petsNum;
	let end = start + petsNum
	let filler = arr.slice(start, end);
	for (let i = 0; i < petsNum; i++) {
		petCard(filler[i]);
	};
};

const pageN = function (n) {
	page.innerHTML = n;
};

const first = function () {
	currentPage = 1;
	containerFill(currentPage);
	pageN(currentPage);
	btnFirst.classList.add("disable");
	btnPrev.classList.add("disable");
	btnFirst.removeEventListener("click", first);
	btnPrev.removeEventListener("click", prev);
	btnNext.classList.remove("disable");
	btnLast.classList.remove("disable");
	btnLast.addEventListener("click", last);
	btnNext.addEventListener("click", next);
};
const prev = function () {
	currentPage = currentPage - 1;
	containerFill(currentPage);
	pageN(currentPage);
	if (currentPage === 1) {
		btnFirst.classList.add("disable");
		btnPrev.classList.add("disable");
		btnFirst.removeEventListener("click", first);
		btnPrev.removeEventListener("click", prev);
	};
	btnNext.classList.remove("disable");
	btnLast.classList.remove("disable");
	btnLast.addEventListener("click", last);
	btnNext.addEventListener("click", next);
};
const next = function () {
	currentPage = currentPage + 1;
	containerFill(currentPage);
	pageN(currentPage);
	btnFirst.classList.remove("disable");
	btnPrev.classList.remove("disable");
	btnFirst.addEventListener("click", first);
	btnPrev.addEventListener("click", prev);
	if (currentPage === pages) {
		btnNext.classList.add("disable");
		btnLast.classList.add("disable");
		btnLast.removeEventListener("click", last);
		btnNext.removeEventListener("click", next);
	};
};

const last = function () {
	currentPage = pages;
	containerFill(currentPage);
	pageN(currentPage);
	btnFirst.classList.remove("disable");
	btnPrev.classList.remove("disable");
	btnFirst.addEventListener("click", first);
	btnPrev.addEventListener("click", prev);
	btnNext.classList.add("disable");
	btnLast.classList.add("disable");
	btnLast.removeEventListener("click", last);
	btnNext.removeEventListener("click", next);
};

btnFirst.addEventListener("click", first);
btnPrev.addEventListener("click", prev);
btnLast.addEventListener("click", last);
btnNext.addEventListener("click", next);






window.addEventListener("load", () => {
	arrPets();
	containerFill(currentPage);
	pageN(currentPage)
	btnFirst.classList.add("disable");
	btnPrev.classList.add("disable");
	btnFirst.removeEventListener("click", first);
	btnPrev.removeEventListener("click", prev);

});
window.addEventListener('resize', () => {
	containerFill(currentPage);
	if (window.innerWidth >= 1280) {
		pages = 6;
	}
	else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
		pages = 8;
	}
	else if (window.innerWidth < 768) {
		pages = 16;
	}
	petsNum = 48 / pages;
	if (currentPage === pages) {
		btnNext.classList.add("disable");
		btnLast.classList.add("disable");
		btnLast.removeEventListener("click", last);
		btnNext.removeEventListener("click", next);
	} else {
		btnNext.classList.remove("disable");
		btnLast.classList.remove("disable");
		btnLast.addEventListener("click", last);
		btnNext.addEventListener("click", next);
	}
	if (currentPage > pages) {
		currentPage = pages;
		page.innerHTML = currentPage
		btnNext.classList.add("disable");
		btnLast.classList.add("disable");
		btnLast.removeEventListener("click", last);
		btnNext.removeEventListener("click", next);
	}
	if (pop.classList.contains("vis")) {
		bod.classList.add('scrool');
	}
});

const pop = document.getElementById("modalWindow");
const pi = document.querySelector(".pop-img");
const pn = document.querySelector(".pop-name");
const pt = document.querySelector(".pop-type");
const pd = document.querySelector(".pop-descr");
const a2 = document.getElementById("a2");
const a4 = document.getElementById("a4");
const a6 = document.getElementById("a6");
const a8 = document.getElementById("a8");
const closer = document.querySelector(".btn-close");
const qwe = document.querySelector(".popup-body");


const createMod = function (n) {
	pi.removeAttribute("src");
	pi.setAttribute("src", pets[n].img);
	pn.innerHTML = pets[n].name;
	pt.innerHTML = pets[n].type + ' - ' + pets[n].breed;
	pd.innerHTML = pets[n].description;
	a2.innerHTML = pets[n].age;
	a4.innerHTML = pets[n].inoculations;
	a6.innerHTML = pets[n].diseases;
	a8.innerHTML = pets[n].parasites;
}




container.addEventListener("click", () => {
	let target = event.target.closest('.pets-card');
	if (target.id) {
		createMod(target.id)
		pop.classList.add('vis');
		bod.classList.add('scrool');
		closer.classList.remove("hover");
	};
});

closer.addEventListener("click", () => {
	pop.classList.remove('vis');
	bod.classList.remove('scrool');
});


qwe.addEventListener("click", () => {
	let target = event.target.closest('.popup-content');
	if (!target) {
		if (pop.classList.contains("vis")) {
			pop.classList.remove('vis');
			bod.classList.remove('scrool');

		};

	}
});
pop.addEventListener("mouseover", (event) => {
	let target = event.target;
	let prev = event.relatedTarget;

	if (target === qwe) {
		closer.classList.add("hover")
	} else if (prev === qwe) {
		closer.classList.remove("hover")
	}
})