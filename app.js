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