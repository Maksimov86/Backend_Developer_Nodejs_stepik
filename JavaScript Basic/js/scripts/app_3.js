'use strict';
/*
const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене ' + price + ' $';
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price} $`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена: ' + price + ' $';
console.log(template3);

const template4	= `Проект
Цена: ${price} $`;
console.log(template4);

const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;
const res = deposit * (1 + rate / 12) ** depositLength;
if (res > houseCost) {
	console.log(`Мы накопили ${res}. Можем купить. Остаток ${res - houseCost}`)
} else {
	console.log(`Мы накопили ${res}. Купить не сможем. =(`)
};

let res = prompt(`Сколько будет 7 + или - 15?`)
switch (true) {
	case res === `Я не робот!`:
	case Number(res) === 22:
	case Number(res) === -8:
		console.log(`Успех!`)
		break
	default:
		console.log(`Вы робот!`)
		break
}

let balance = 1100;
let bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;
const canBuy = ((balance > 1000) || (bonusBalance >= 100)) 
	&& !isBanned 
	&& !isExist 
	&& isSelling;
console.log(`Могу купить игру: ${canBuy ? 'да' : 'нет'}`)

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
	return present * KG_IN_USD;
}

function calculateKm(present) {
	return present * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
	
	const price1 = present1 * KG_IN_USD;
	const price2 = present2 * KG_IN_USD;
	const distancePrice = distance * KM_IN_USD;
	return price1 + price2 + distancePrice;
	
	const price1 = calculateW(present1);
	const price2 = calculateW(present2);
	const distancePrice = calculateKm(distance);
	return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1, 2, 10))
*/
/*
function computeCredit(age, hasJob = false) {
	/*
	if ((age > 24) && hasJob) {
		return loan = 500;
	} else if (age > 24) {
		return loan = 100;
	} else {
		return loan = 0;
	}
	*/
	/*
	switch(true) {
		case age > 24 && hasJob:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
	}	
}

function canBuy(productPrice, age, money, hasJob = false) {
	/*
	if (money + loan >= 2000) {
		return true
	} else {
		return false
	}
	*/
	/*
	const creditMoney = computeCredit(age, hasJob);
	return productPrice <= money + creditMoney;
}

console.log(canBuy(2000, 25, 1500))
*/
/*
function a() {
    return c();
}
function b() {
    return 'Yes';
}
function c() {
    return b;
}
a();
*/
/*
Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив
*/
/*
const tasks = ['Задача 1'];
function AddTask(task) {
    tasks.push(task);
  }

function RemoveTask(task) {
    const index = tasks.indexOf(task);
	if (index === -1) {
		return;
	}
    return tasks.splice(index, 1);
  }

function PrioritizeTask(task) {
    const result = RemoveTask(task);
	if (!result) {
		return
	}
	tasks.unshift(result[0]);
  }

console.log(tasks)
AddTask('Задача 2')
AddTask('Задача 3')
AddTask('Задача 4')
AddTask('Задача 5')
AddTask('Задача 6')
console.log(tasks)
RemoveTask('Задача 4')
console.log(tasks)
PrioritizeTask('Задача 3')
console.log(tasks)
PrioritizeTask('Задача 6')
console.log(tasks)
*/
/*Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:

Протокол (https)
Доменное имя (purpleschool.ru)
Путь внутри сайта (/course/javascript)
*//*
const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
	const [protocol, _, host, ...path] = url.split('/');
	if (protocol === 'https:' || protocol === 'http:') {
		console.log(protocol, host, path);
		console.log(`Протокол: ${protocol.split(':')[0]}`)
		console.log(`Домменное имя: ${host}`)
		console.log(`Путь внутри сайта: /${path.join('/')}`)
	}
}

getUrlParts(url)
*//*
for(let i = 1; i < 10; i++) {
	console.log(`Наш баланс ${i}$`);
}
*//*
const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

for(let i = 0; i < tasks.length; i++) {
	if (tasks[i] === 'Задача 2') {
		continue;
	}
	console.log(tasks[i]);
}
console.log('------------------------------')

for(let i = 0; i < tasks.length; i++) {
	if (tasks[i] === 'Задача 2') {
		break;
	}
	console.log(tasks[i]);
}
*//*
const arr = ['!', 'JS', 'люблю', 'Я'];
let res = [];

for(let i = arr.length - 1; i >= 0; i--) {
	res.push(arr[i]);
}

console.log(res.join(' '));

console.log(arr.reverse().join(' '))
*//*
const operations = [1000, -700, 300, -500, 10000];
let startingBalance = 100;

function finalBalance(arrayOfOperations, initailBalance) {
	let balance = initailBalance;
	for (const element of arrayOfOperations) {
		balance += element;
	}
	return balance;
}

function checkOperations(arrayOfOperations, initailBalance) {
	let balance = initailBalance;
	let isOk = true;
	for (const element of arrayOfOperations) {
		balance += element;
		if (balance < 0) {
			isOk = false;
			break;
		}
	}
	return isOk;
}

function averageOperations(arrayOfOperations) {
	let positiveCount = 0;
	let positiveSum = 0;
	let negativeCount = 0;
	let negativeSum = 0;
	for (const element of arrayOfOperations) {
		if (element > 0) {
			positiveCount ++;
			positiveSum += element
		} else {
			negativeCount ++;
			negativeSum += element;
		}
	}
	console.log(`Средний доход: ${positiveSum / positiveCount}`)
	console.log(`Средний расход: ${negativeSum / negativeCount}`)
}

console.log(finalBalance(operations, startingBalance));
console.log(checkOperations(operations, startingBalance));
averageOperations(operations)
*//*
function add(a, b) {
	return a + b;
}
function substract(a, b) {
	return a - b;
}
function power(a, b) {
	return a * b
}
//функция высшего порядка
function calculate(a, b, fn) {
	console.log(fn.name);
	const res = fn(a, b)
	return res
}

const res = calculate(3, 5, substract)
console.log(res)
*//*
function power(pow) {
	return function (num) {
		return num ** pow;
	}
}
*//*
const power = pow => num => num ** pow;
const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(5));

console.log(power(5)(4));
*//*
const score = [5, 10, 0, 15]
/*
for (const [i, el] of score.entries()) {
	console.log(`Раунд ${i + 1}: ${el}`)
}
*//*

score.forEach((scoreEl, i) => {
	console.log(`Раунд ${i + 1}: ${scoreEl}`);
})

const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];
for (const transaction of transactionInUSD) {
	transactionInRUB.push(transaction * 60);
}

console.log(transactionInUSD)
console.log(transactionInRUB)

const transactionInRUB2 = transactionInUSD
	.map((transaction) => transaction * 60);

console.log(transactionInUSD)
console.log(transactionInRUB2)
*//*

const operations = [100, -20, 7, -20, 50]
/*
const positiveOperations = [];
for (const operation of operations) {
	if (operation > 0) {
		positiveOperations.push(operation)
	}
}
console.log(positiveOperations)
*//*
const positiveOperations = operations.filter(operation => {
	return operation > 0
})
console.log(positiveOperations)
const positiveRUBOperations = operations
	.filter(operation => {
		return operation > 0
	})
	.map(operation => operation * 60)
console.log(positiveRUBOperations)
*//*
const prices = [[100, 200], [120, 100], [200, 350]];
const result = prices
	.map(product => product[1] - product[0])
	.filter(price => price > 0)

console.log(result)
*//*
const operations = [100, -20, 7, -30, 50];
let balance = 0;
for (const operation of operations) {
	balance += operation;
}
console.log(balance);

const finalBalance = operations.reduce((acc, operation, i) => {
	console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`)
	return acc += operation
}, 0);
console.log(finalBalance);

const minElement = operations.reduce((acc, operation, i) => {
	if (operation > acc) {
		return acc;
	} else {
		return operation
	}
}, 0);
console.log(minElement);
*/
//const arr = [2, 4, 4, 10, 20];
/*
const avg = arr.reduce((acc, el, i) => {
	if (i != arr.length - 1) {
		return acc + el;
	} else {
		return (acc + el) / arr.length;
	}
}, 0);
console.log(avg);
*/
//let elGT5;
/*
for (const el of arr) {
	if (el > 5) {
		elGT5 = el;
		break;
	}
}*//*
elGT5 = arr.find(el => el > 5);
console.log(elGT5)
elGT5Index = arr.findIndex(el => el > 5);
console.log(elGT5Index)
*//*
const arr = [2, 4, 4, 10, 20]

function some(element, array) {
	/*
	if (array.find(el => el === element)) {
		return true;
	} else {
		return false;
	}
	*//*
	const res = array.find(el => el === element);
	return res == undefined ? false : true;
}
	
console.log(some(4, arr))
console.log(arr.some(el => el === 2))
*/
//const { use } = require('react');

/*
let arr = [1, 2, 3];
let res = arr.map(e => [e * 2]).flat().reduce((acc, el) => acc -= el, 0)
console.log(res);
*//*
const fullUserName = 'Вася aka Terminator Perdinator Пупкин';
const userName = fullUserName.slice(0, fullUserName.search(' '));
const userSurname = fullUserName.slice(
	fullUserName.lastIndexOf(' ') + 1, length.fullUserName)
console.log(userName);
console.log(userSurname)
*/
/* верные *//*
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
/* не верные *//*
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isPhoneNumber(num) {
	num = num.trim();
	num = num.replace('+7', '8');
	if (!num.startsWith('8')) {
		return false;
	}
	num = num.replaceAll('(', '');
	num = num.replaceAll(')', '');
	num = num.replaceAll(' ', '');
	num = num.replaceAll('-', '');
	if (num.length != 11) {
		return false;
	}
	let onlyNumber = true;
	for (const char of num) {
		if (isNaN(Number(char))) {
			onlyNumber = false;
			break;
		}
	}
	return onlyNumber;
}
console.log(isPhoneNumber(num1))
console.log(isPhoneNumber(num2))
console.log(isPhoneNumber(num3))
console.log(isPhoneNumber(num4))
console.log(isPhoneNumber(num5))
console.log(isPhoneNumber(num1Error))
console.log(isPhoneNumber(num2Error))
console.log(isPhoneNumber(num3Error))
console.log(isPhoneNumber(num4Error))
*//*
const card = '7430921291511737';
const lastFour = card.slice((card.length - 4), (card.length + 1));
console.log(lastFour.padStart(card.length, '*'));
*//*
const users = [
	{ name: 'Вася', age: 30 },
	{ name: 'Катя', age: 18 },
	{ name: 'Аня', age: 40 },
	{ name: 'Петя', age: 25 },
]
console.log(users.sort((a, b) => a.age - b.age))
*//*
const users = [
	{
		name: 'Вася',
		surname: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'DevOps']
	},
	{
		name: 'Катя',
		surname: 'Белова',
		age: 18,
		skills: ['Дизайн']
	}
];

const userData = users.map(user => {
	return {
		fullName: `${user.name} ${user.surname}`,
		skilNum: user.skills.length
	}
})

console.log(userData)
*//*
const user = {
	name: 'Вася',
	surname: 'Пупкин',
	age: 24,
	getFullName: function() {
		return this.name + ' ' + this.surname;
	}
};

console.log(user.getFullName())
*//*
const wallet = {
	balance: 0,
	operations: [],
	increase: function(sum, reason) {
		this.balance += sum;
		this.operations.push({
			reason: reason,
			sum: sum
		});
		return true;
	},
	decrease: function(sum, reason) {
		if (this.balance < sum) {
			console.log('Недостаточно баланса');
			return false;
		}
		this.balance -= sum;
		this.operations.push({
			reason: reason,
			sum: -sum
		});
		return true;
	},
	getOperationLength: function() {
		return this.operations.length;
	}
}
console.log(wallet.increase(1000, 'Зарплата'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(2000, 'Покупка ноутбука'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(500, 'Покупка телефона'));
console.log(wallet.getOperationLength());
console.log(wallet.balance);
console.log(wallet.operations);
*//*
const cities = {
	msk: {
		let: 200,
		temp: 25
	},
	spb: {
		let: 100,
		temp: 20
	}
}
let sumTemp = 0;
console.log(Object.keys(cities))
let citiesCount = Object.keys(cities).length;
for (const key in cities) {
	console.log(key);
	sumTemp += cities[key].temp
}
console.log(sumTemp / citiesCount)
*//*
const warehouse = {
	goods: [],
	findGoodById: function(id) {
		return this.goods.find(g => g.id == id);
	},
	addGood: function(good) {
		const existedGood = this.findGoodById(good.id)
		if (existedGood) {
			console.log(`Товар с id №${good.id} уже есть на складе`)
			return;
		}
		this.goods.push(good);
		return `товар с id №${good.id} добавлен на склад`
	},
	getWeightKg: function() {
		return this.goods.reduce((acc, el) => 
			acc += el.weight?.kg ? el.weight?.kg : 0,
			0
		)
	}
};
const car = {
	id: 1,
	weight: {
		kg: 1000
	},
	brand: 'Ford'
};
const chair = {
	id: 2,
	weight: {
		kg: 2
	}
};
const paper = {
	id: 3,
	color: 'red'
};
warehouse.addGood(car);
console.log(warehouse.goods);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
let findItemId = warehouse.findGoodById(6);
console.log(findItemId);
findItemId = warehouse.findGoodById(3);
console.log(findItemId);
console.log(warehouse.getWeightKg());
*//*
const company = {
	name: 'ООО Агро',
	employees: [
		{
			name: 'Света',
			getName: function() {
				return this.name;
			}
		},
		{
			name: 'Слава',
			getName: function() {
				return this.name;
			}
		},
		{
			name: 'Коля',
			getName: function() {
				return this.name;
			}
		},
	],
	ceo: {
		name: 'Вася',
		getName: function() {
			return this.name;
		}
	},
	getName: function() {
		return this.name;
	}
}
console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employee => employee.getName()));
*//*
const audi = {
	make: 'Audi',
	model: 'A3',
	year: 2021,
	damages: [],
	addDamage(part, rate) {
		console.log(
			`У авто ${this.make} ${this.model} ${this.year} добавлено: - повреждение ${part} со степенью ${rate}`
		)
		this.damages.push({
			part,
			rate
		})
	}
}
audi.addDamage('Капот', 1);
const bmw = {
	make: 'BMW',
	model: 'X5',
	year: 2022,
	damages: []
}
bmw.addDamage = audi.addDamage;
//bmw.addDamage('Бампер', 2);

const addDamageFunc = audi.addDamage;
//addDamageFunc('Бампер', 2);
addDamageFunc.call(bmw, 'Бампер', 2)

addDamageFunc.apply(audi, ['Бампер', 4])
*//*
const audi = {
	make: 'Audi',
	model: 'A3',
	damages: []
};

const bmw = {
	make: 'BMW',
	model: 'X5',
	damages: []
};

const carManipulation = {
	addDamage(part, rate) {
		this.damages.push({
			part, rate
		});
		console.log(`Добавили повреждение на ${this.make} ${this.model}`)
	}
}
const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Крыло', 3);
console.log(audi);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);
addDamageAudiRoof(3);
console.log(audi)
*//*
function removePassword(reset) {
	if (reset) {
		this.password = undefined
	} else {
		this.password = '1'
	}
}

const user = {
	login: 'a@a.ru',
	password: '12345'
}

const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user)
*//*
function changeBalance() {
	let balance = 0;
	return function(sum) {
		balance += sum;
		console.log(`Баланс: ${balance}`);
	}
}

const change = changeBalance();
change(100);
change(-50);
change(200);
*//*
const userInfo = {
	balance: 0,
	operations: 0,
	increase(sum) {
		this.balance += sum;
		this.operations++;
	}
}

function user() {
	const userObj = {
		balance: 0,
		operations: 0,
		increase(sum) {
			this.balance += sum;
			this.operations++;
	}
	}
	return function() {
		return userObj;
	}
}

const user1 = user()
user1().increase(100)
user1().increase(150)
console.log(user1())
const user2 = user()
user2().increase(150)
console.log(user2())
*/
/*
const panelText = document.querySelector('.panel').innerText;
console.log(panelText);
document.querySelector('.panel').innerText = 'New text';
document.querySelector('.input').value = 'Text';
*//*
document.querySelector('.button').addEventListener('click', function() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
})
	*/
/*
function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	//document.querySelector('.notification').classList.remove('notification_hidden');
	//document.querySelector('.notification').getAttribute('class');
	//document.querySelector('.notification').setAttribute('key', 1);
	const textString = JSON.stringify({
		text: input
	})
	localStorage.setItem('text', textString)
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm()
	}
}
/*
console.log(document.querySelectorAll('.one')[0].innerText)
console.log(document.querySelectorAll('.one')[1].innerText)

//console.log(document.querySelector('#two').innerText)
console.log(document.getElementById('two').innerText)
console.log(document.querySelector('[user-id="4"]').innerText)

document.querySelector('.input').addEventListener('keydown', (e) => {
	if (e.code == 'Enter') {
		submitForm()
	}
});

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
//newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;
document.querySelector('.test').appendChild(newElement);


localStorage.setItem('token', 'test')
localStorage.setItem('token1', 1)
localStorage.setItem('token1', true)

console.log(localStorage.getItem('token1'))
*/
