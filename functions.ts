//e.g 1
function add(num:number):number{
    return num+2
    //return hello - it will give error
}
const ress:number=add(2)

//e.g 2
function getupper(val:string){
    return val.toLocaleUpperCase()
}
let res=getupper("hello")
console.log(res)

//e.g 3
function signup(name:string,email:string,password:string,ispaid:boolean){
}
signup('a','a','a',true)

//e.g 4 with default value
const login=(name:string,email:string,ispaid:boolean=false)=>{

}
login('a','a')

//e.g 5
function getval(myval:number){
    if(myval>5){
        return true
    }
    return "200"
}

//e.g 6
const gethello=(s:string):string=>{
    return "x"
}

//e.g
const heros=['thor','spider','ironman']
//const heros=[1,2,4]
heros.map((hero:string):string=>{
    //it will now accept and return string values only
    return `hero is ${hero}`
})


//e.g
function clgerror(errmsg:string):void{
    console.log(errmsg)
    //return "x" cant assign string or any type in void
}

//e.g 
function handleerror(errmsg:string):never{
    throw new Error(errmsg)
}