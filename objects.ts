// //e.g
// const user={
//     name:'ali',
//     email:"ali@dev.com",
//     isactive:true
// }

// function createuser({name:string,ispaid:boolean}){

// }
// createuser({name:"ali",ispaid:false})

// //e.g its returning object
// function createcourse():{name:string,price:number}{
// return {
//     name:"oop",
//     price:23,
// }
// }

// //alias
// type user={
//     name:string;
//     email:string;
//     isactive:boolean
// }
// function createusr(user:user):user{
// return {name:"",email:"",isactive:true}
// }
// createusr({name:"",email:"",isactive:true})


// raedonly and ?
type user={
    readonly id:string
    name:string
    email:string
    isactive:boolean
    creditcard?:number
}

let myuser:user={
    id:"23",
    name:"ali",
    email:"h",
    isactive:true
    
}

myuser.email="h@gmail.com"
//id cant be changed coz its readonly
//myuser.id="1233"
console.log(myuser)

//
type cardnumber={
    cnum:string
}
type carddate={
    cddate:string
}
type carddetails=cardnumber & carddate & {
    cvv:number
}