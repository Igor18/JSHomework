//Создать массив из елеменов числового массива, которые больше, чем элементы, стоящие перед ними.
//пример [3, 9, 8, 4, 5, 1] -> [9,5]

const array = [1,2,3,4,5,6,5,4,1,2,-1,3,9,8];
const result = [];

for(let i = 1; i < array.length; i++){
	if(array[i] > array[i-1]) 
		result.push(array[i]);
}
console.log(result);

//Посчитать количество парных и непарных елементов массива и оставить те, которых больше (парные если количество равно).
let even = 0;
let odd = 0;
array.forEach(
	function(element){
		if(element%2 === 0) even++;
		else odd++;
	});
	
console.log(even + " " + odd);
if(even >= odd){
	array.forEach(
	function(element, index, array){
		if(element%2 !== 0) 
			array.splice(index,1);
	});
} else {
	array.forEach(
	function(element, index, array){
		if(element%2 === 0) 
			array.splice(index,1);
	});
}
console.log(array);

// Создать массив строк, получить из него новый массив состоящий из строгой очредности маленких и больших букв,
// пропускать символы не подходящие к очередности
// пример ["abC", "jFGGJRrfFKr", "fFdRtggdFFDd"] -> ['a','C','j','F','r','F','r','F','d','R','t','F','d']

const arr = ["abC", "jFGGJRrfFKr", "fFdRtggdFFDd"];
const res = [];
isLower = true;
for(let element of arr){
	for(let elem of element){
		if(isLower == (elem == elem.toLowerCase())){
			res.push(elem);
			isLower = !isLower;
		}
	}
}
console.log(res);

// ------------------------------------------------ДЗ 2------------------------------------------------
// Task 12
// Создать объект Date, который содержит завтрашнюю дату, первое число текущего
// месяца, последнее число текущего месяца
let date = new Date();
date.setDate(date.getDate()+1); //завтра
console.log(date);
date.setDate(1);  // первое число
console.log(date);
date.setMonth(date.getMonth(date)+1); //последнее число
date.setDate(0);
console.log(date);

// Task 13
// Измерить время суммирования чисел от 1 до 1000.
let start = Date.now();
let sum = 0;
for (let i = 0; i < 1000000; i++){  // от 1 до 1000 суммирует слишком быстро и разница (end - start) всегда 0
	sum += i;
}
let end = Date.now();
console.log("Сумма = " + sum);
console.log("Время - " + (end - start));

// Task 14
// Подсчитать количество дней с текущей даты до Нового года
let now = Date.now();
let newYear = (new Date(2018,0,1)).getTime();
let daysResult = (newYear - now) / (1000 * 60 * 60 * 24);
console.log(daysResult);