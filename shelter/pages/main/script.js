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



/*   ---   burger   ---   */

const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-list");
const link = document.querySelector(".nav-list-main");
const darker = document.querySelector(".darker");
const logo = document.querySelector(".logo2");
const bod = document.querySelector("html");
burgerBtn.addEventListener("click", () => {
	menu.classList.toggle('open');
	burgerBtn.classList.toggle('rotate');
	darker.classList.toggle('overlay');
	logo.classList.toggle('open2');
	bod.classList.toggle('scrool');
});
links.forEach((el) => el.addEventListener('click', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	bod.classList.remove('scrool');
}));
link.addEventListener('click', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	bod.classList.remove('scrool');
});
darker.addEventListener('click', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	bod.classList.remove('scrool');
});
window.addEventListener('resize', () => {
	menu.classList.remove('open');
	burgerBtn.classList.remove('rotate');
	logo.classList.remove('open2');
	darker.classList.remove('overlay');
	bod.classList.remove('scrool');
});

/*   ---   Carousel   ---   */

let numsNext = [];
let numsPrev = [];
const slider = document.getElementById("slider");
const btnLeft = document.getElementById("btn_left");
const btnRight = document.getElementById("btn_right");

window.addEventListener("load", () => {
	nextNumbers();
	prevNumbers();
	if (window.innerWidth >= 1280) {
		petsCards(3);
	} else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
		petsCards(2);
	} else {
		petsCards(1);
	};

})

const nextNumbers = () => {
	numsNext.length = 0;
	again: for (let i = numsNext.length; i < 3;) {
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

const petsCards = function (n) {
	for (let i = 0; i < n; i++) {
		let card = createCard();
		let img = document.createElement("img");
		let name = document.createElement("p");
		let btn = document.createElement("button");
		img.setAttribute("src", pets[numsNext[i]].img);
		name.classList.add("pet-name");
		name.innerText = pets[numsNext[i]].name;
		btn.classList.add("pet-btn");
		btn.innerText = 'Learn more';
		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(btn);
		card.setAttribute("id", numsNext[i])
		slider.appendChild(card);
	}
}
const petsCardsR = function (n) {
	for (let i = 0; i < n; i++) {
		let card = createCard();
		let img = document.createElement("img");
		let name = document.createElement("p");
		let btn = document.createElement("button");
		img.setAttribute("src", pets[numsNext[i]].img);
		name.classList.add("pet-name");
		name.innerText = pets[numsNext[i]].name;
		btn.classList.add("pet-btn");
		btn.innerText = 'Learn more';
		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(btn);
		card.setAttribute("id", numsNext[i])
		slider.prepend(card);

	}
}
const createCard = () => {
	const card = document.createElement("div");
	card.classList.add("pets-card");
	return card
}

const moveLeft = function () {
	nextNumbers();
	prevNumbers();
	if (window.innerWidth >= 1280) {
		petsCards(3);
		slider.classList.add('left');

	} else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
		petsCards(2);
		slider.classList.add('left');
	} else {
		petsCards(1);
		slider.classList.add('left');
	};
	btnLeft.removeEventListener("click", moveLeft)
	btnRight.removeEventListener("click", moveRight)
};

const moveRight = function () {
	nextNumbers();
	prevNumbers();
	if (window.innerWidth >= 1280) {
		slider.classList.add('right');
		petsCardsR(3);

	} else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
		petsCardsR(2);
		slider.classList.add('right');
	} else {
		petsCardsR(1);
		slider.classList.add('right');
	};
	btnLeft.removeEventListener("click", moveLeft)
	btnRight.removeEventListener("click", moveRight)
}


btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);



slider.addEventListener("animationend", (animationEvent) => {

	if (animationEvent.animationName === "left" || animationEvent.animationName === "left768") {
		if (window.innerWidth >= 1280) {
			for (let i = slider.children.length; i > 3;) {
				slider.removeChild(slider.firstChild);
				i--
			};
			if (slider.children.length > 3) {
				slider.removeChild(slider.firstChild);
			}
		} else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
			for (let i = slider.children.length; i > 2;) {
				slider.removeChild(slider.firstChild);
				i--
			};
			if (slider.children.length > 2) {
				slider.removeChild(slider.firstChild);
			}
		} else {
			slider.removeChild(slider.firstChild);
		}

	} else if (animationEvent.animationName === "right" || animationEvent.animationName === "right768" || animationEvent.animationName === "right320") {
		if (window.innerWidth >= 1280) {
			for (let i = slider.children.length; i > 3;) {
				slider.removeChild(slider.lastChild);
				i--
			};
			if (slider.children.length > 3) {
				slider.removeChild(slider.lastChild);
			}
		} else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
			for (let i = slider.children.length; i > 2;) {
				slider.removeChild(slider.lastChild);
				i--
			};
			if (slider.children.length > 2) {
				slider.removeChild(slider.lastChild);
			}
		} else if (window.innerWidth < 768) {
			slider.removeChild(slider.lastChild);
		}

	}
	slider.classList.remove('left');
	slider.classList.remove('right');
	btnLeft.addEventListener("click", moveLeft);
	btnRight.addEventListener("click", moveRight);
});





window.addEventListener('resize', () => {
	if (window.innerWidth >= 1280) {
		slider.innerHTML = "";
		petsCards(3);
	} else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
		slider.innerHTML = "";
		petsCards(2);
	} else {
		slider.innerHTML = "";
		petsCards(1);
	};
	if (pop.classList.contains("vis")) {
		bod.classList.add('scrool');
	}
});

/*   ---   popup   ---   */
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




slider.addEventListener("click", () => {
	let target = event.target.closest('.pets-card');
	if (target.id) {
		createMod(target.id)
		pop.classList.add('vis');
		bod.classList.add('scrool');
	}
});

closer.addEventListener("click", () => {
	pop.classList.remove('vis');
	bod.classList.remove('scrool');
})
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