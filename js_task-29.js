
let obj={
    name:"tirumala",
    age:"1000",   
}

obj.gender="male"
let str_data=JSON.stringify(obj)
localStorage.setItem("user1",str_data)
console.log(str_data)

let rec_data=JSON.parse(str_data)
console.log(rec_data)

let obj2=[{
    name:"jani",
    age:2000
}]

let sl=Object.seal(obj2)
obj2.gender="male"
let s_data=JSON.stringify(obj2)
sessionStorage.setItem("user2",s_data)
console.log(s_data)
console.log(obj2[0])

let obj3=[{
    name:"naveen",
    age:3000
}]

console.log(obj3)
console.log(obj3.length)
let s3_data=JSON.stringify(obj3)
sessionStorage.setItem("user3",s3_data)
console.log(s3_data)


let re_data=JSON.parse(s3_data)
console.log(re_data)

let obj4=[{
    name:"syam",
    age:3000
},{
    name:"omesh",
    age:4000
},
{
    name:"sesi",
    age:5000
}]

let c=0
for(i=0;i<obj4.length;i++){
    sessionStorage.setItem(`user${i}`,JSON.stringify(obj4[i]))
    sessionStorage.setItem("count",c=c+1)
}