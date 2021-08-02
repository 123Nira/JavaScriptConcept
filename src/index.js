// import "./styles.css";
// var orders = [
//   { orderid: 1, amount: 250, items: ["mask", "shirt", "pant"] },
//   { orderid: 2, amount: 300, items: ["water bottle", "tablefan"] },
//   { orderid: 3, amount: 78, items: ["glouse"] },
//   { orderid: 4, amount: 460, items: ["helmet", "shoe"] }
// ];

//Question1-find the order list that contains amount >100
// method-1
// var order1=[];
// for(let i=0;i<orders.length;i++){
//     if(orders[i].amount>100){
//       order1.push(orders[i])
//     }
// }
// console.log(order1)

// //method-2

// var order2=[]
// orders.forEach((item,index)=>{
//   if(item.amount<100){
//     order2.push(item);
//   }
// })
// console.log(order2)

// //method-3
//  const order3=orders.filter((item,index)=>{
//       return item.amount>100
//   })
//   console.log(order3)

// //Question-2-sort the orders with respect to amount
// //method-1
//  var order4=orders.sort((a,b)=>a.amount-b.amount)
//   console.log(order4)
//   console.log(orders)

// //Question-3-add the property 'delivery-charge' to each order and if order amount<100 then delivery charge is 50.
// //method-1

// order5=[]
// for(let i=0;i<orders.length;i++){
//   obj={...orders[i], delivery_charge:0}
//   if(orders[i].amount<100){
//     obj.delivery_charge=50;
//   }
//   order5.push(obj)
// }
// //console.log(order5)
// var order6=[]
// orders.forEach((item,index)=>{
//  var  obj={...item,delivery_charge:0}
//   if(item.amount<100){
//     obj.delivery_charge=50
//   }else{
//     obj.delivery_charge=1
//   }
//   order6.push(obj);
// })
// console.log(order6)

// var order7=orders.map((item)=>{
//   item.delivery_charge=0;
//   if(item.amount<100){
//     item.delivery_charge=60
//   }
//   return item
// })
// console.log(order7)

// //question4:-add more items in arraya object item property.
// //method-1
// var order8=orders.map((val,index)=> {
//   var obj={...val}
//    obj.items.push("apple","mango")
//    return obj
// })
// console.log(order8)

// //new array problem
// var original_array = [
// {"firstName": "Sachin", "lastName": "Tendulkar"},
// {"firstName": "Virat", "lastName": "Kohli"},
// {"firstName": "Chandan", "lastName": "Singh"},
// {"firstName": "Aryan", "lastName": "Rawat"},
// {"firstName": "Rashika", "lastName": "Gupta"}
// ];

// //Question:-given a array object with property
// //firstname and lastname you need add one more property that is full name
// //method-1
// var newarray1=original_array.map((item,index)=>{
//       return {...item, fullName:item.firstName+" "+item.lastName,city:"default"}
// })
// console.log(newarray1);

// //method-2
// var newarray2=[]
// original_array.forEach((item,index)=>{
//   var obj={...item,fullName:item.firstName+" "+item.lastName,city:"default"}
//   newarray2.push(obj)
// })
// console.log(newarray2)

// //method-3
// newarray3=[]

// for(var i=0;i<original_array.length;i++){
//   obj={...original_array[i],fullName:original_array[i].firstName+" "+original_array[i].lastName,city:"default"}
//   newarray3.push(obj)
// }
// //console.log(newarray3)

// //quetsion2:-sort array object in order to first name
// let newarray4=original_array.sort((a,b)=> {
//   return a.firstName.toLowerCase()>b.firstName.toLowerCase() ? 1 : -1})
// console.log(newarray4)

// //ARGUMENT

//  let y=[1,2,3,4,5,6,7,8,9]
// let sum=0;
// function AB(x){

//    for(let i of x){
//      sum+=i
//    }
//    return sum
// }
// console.log(AB(y))

// //HARD MOCK
// //QUESTION-1
// function greet (person)
// { if (person === { name: 'amy' })
//            {
//              return 'hey amy' ;
//            }
//  else
//  {
//    return 'hey arnold' ;
//  } }
// console.log(greet({ name: 'amy' }))

// //QUESTION_2
// let dog = {
//    name: 'doggo',
//    sayName: function(){
//      console.log(this.name)
//    }
//  }

//  let sayName2 = dog.sayName();
//  sayName2;
//  //dog.sayName()

// function frequency(arr) {
//   var count = {};
//   arr.forEach(function (s) {
//     count[s] ? count[s]++ : (count[s] = 1);
//   });
//   let d = [];
//   for (let key in count) {
//     if (count[key] === 1) {
//       d.push(key);
//     }
//   }
//   return d;
// }

// console.log(frequency([1,2,3,4,5,6,7,8,1,2,3,4,1,1,2,34,,5,67,]))

// function uniqevalue(arr) {
//   var list = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (list.includes(arr[i])) {
//       list.push(arr[i]);
//     }
//   }
//   return list;
// }

// console.log(uniqevalue([1,1,2,3,4,5,3,2,4,6,5,4]))
//  var arr1 = [59, 72, 58, 95, 20]; 

// var arr2= [72, 51, 59, 20, 80];
// var arr3=[...arr1,...arr2]
//let l=arr1.length+arr2.length
//let a={}

// for(let i of arr3){
//   if(i in a){
//      a[i]++;
//   }else{
//     a[i]=1;
//   }
// }
// console.log(a)
// let aa=[]
// for(let key in a){
//    if(a[key]===1){
//    aa.push(key)
//    }
// }
// console.log(aa)
// var people = {
//   name: "Niraj",
//   last: "Kumar",
//   func: function () {
//     return this.name + this.last;
//   }
// };
// var x=function(state,dist){
//   console.log(this.func()+ "I like your"+" "+ state+" "+dist)
// }
// x.apply(people,["Bihar","Gaya"])
// var y=x.bind(people)
// y()


// function largestvalue1(arr){
// 	arr.sort(function(a,b){return a-b})
//     return arr[arr.length-1];
// }

// function largestvalue(arr){
// 	let result=arr[0]
// 	for(let i=1;i<arr.length;i++){
// 		if(arr[i]>result){
// 			result=arr[i]
// 		}
// 	}
// 	return result
// }

// console.log(largestvalue([1,3,4,5,7,9,7,5,34,67,89,4,3,2,12]))

// //question and answer

// //var result="12" + "2" -true
// //var result="12" +2
// //var result="12"/"3"+"4"*"3" -true
// //var result =1*2 +"12" -true
// //var result="12"/"3" + "4"*"2" +true
// //console.log(result)

// // for(let i=0;i<=12; i+2){
// // 	console.log(i)
// // }

// for(var i=0;i<12; i+2){
// 	setTimeout(function (i){console.log(i)},1000,i)
// }

// //console.log(a())
// function a(){
// 	//return b()
// 	 function b(){
// 		return 3
// 	}
// 	return b()
// 	var b=function (){
// 		return 8
// 	}
// }

// //how to fetch api

// // fetch(request)
// //   .then(response => {
// //     if (response.status === 200) {
// //       return response.json();
// //     } else {
// //       throw new Error('Something went wrong on api server!');
// //     }
// //   })
// //   .then(response => {
// //     console.debug(response);
// //     // ...
// //   }).catch(error => {
// //     console.error(error);
// //   });

// //   new Promise((resolve, reject) => {
// //     console.log('Initial');

// //     resolve();
// // })
// // .then(() => {
// //     throw new Error('Something failed');

// //     console.log('Do this');
// // })
// // .catch(() => {
// //     console.error('Do that');
// // })
// // .then(() => {
// //     console.log('Do this, no matter what happened before');
// // });

// let arr=[1,3,4,5,7,9,6,6,6,7,5,34,67,89,4,3,2,12]

// let a={}

// for(let i of arr){
// 	if(i in a){
// 		a[i]++
// 	}else{
// 		a[i]=1
// 	}
// }

// let d=[]

// for(let key in a){
// 	if(a[key]===1){
// 		d.push(key)
// 	}
// }
// console.log(d)
// console.log(a)

// function maxChar(str){
//   const myStr = str.toLowerCase();
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of myStr) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       charMap[char]++;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
// console.log(maxChar("fshdgfshbfKkkkkkkkkkkffff"))

// myname="ramnayan"

// const reverse=(s,i,ans)=>{
// 	if(i>=0){
// 		return reverse(s,i-1,ans+s[i])
// 	}else{
// 		return ans
// 	}
// }

// //console.log(reverse("ramnayan",('ramnayan'.length)-1,''))
// //console.log(myname.split("").reverse().join(""))

// const reve=(s,i,ans)=>{
// 	if(i>=0){
// 		return reve(s,i-1,ans+s[i])
// 	}else
// 	   return ans
// }

// //console.log(reve("ramnayan",("ramnayan".length)-1,""))

// let arr1=[1,3,4,5,7,9,6,6,6,7,5,34,67,89,4,3,2,12]
// a={}
// arr.map(i=>{

// 	if(i in a){
// 		a[i]++
// 	}else{
// 		a[i]=1
// 	}
//   })
// 	d=[]
// 	for(let key in a){
// 		if(a[key]==1){
// 			d.push(key)
// 		}
// 	}
// //console.log(a)
// //console.log(d)

// const reve1=(s,i,ans)=>{
// 	if(i>=0){
// 		return reve1(s,i-1,ans+s[i])
// 	}else
// 	  return ans
// }

// //console.log(reve1("ramnayan",("ramnayan".length)-1,""))

// var y=1
//  if(function f(){}){
//  	y += typeof f;
//  }
//  console.log(y)
