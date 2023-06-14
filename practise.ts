//function salute(persona: {name:string,age:number}) {
  //  const {name ,age} =persona
    //console.log(`Hola ${name},tienes ${age}`)
//}

//salute({name:'Pepe',age:2}) 

//function saludar({name,age}: {name:string, age:number}):string{
  //  console.log(`Hola ${name}, tienes ${age} anios`)
    //return age
//}s

//let username:string
 
//const sayHiFromFunction = (fn: (name:string) => void) =>{
  //   fn('Miguel')
//}

//const sayHi = ((name:string) =>{
  //  console.log(`Hola ${name}`)
    //return 3
//})

//sayHiFromFunction(sayHi)

//const sumar =(a:number, b:number) :number =>{
  //  return a + b
//}

//const restar: (a:number, b:number) => number =(a,b) =>{
  //  return a - b
//}

//never

//function throwError(message: string) :never{
  //  if(message) throw new Error(message);
    //throw new Error(message);
    //process.exit(1)
//}

//function logMessage(message:string) :void {
  //  console.log(message)
//}

//const avengers =['Spidey', 'Hulk', 'Avengers']

//avengers.forEach(function (avenger) =>{
  //  console.log(avenger.toUpperCase())
//})

//type Hero ={
  //  name:string,
    //age:number
//}

//let hero:Hero ={
  //  name:'Thhor',
    //age:1500,
//};

//function createHero(hero:Hero): Hero{
  //  const {name, age} =hero
   // return {name,age}
//}

//const thor =createHero({name: 'Thor',age: 1500})

type Hero ={
      id?:number,
      name:string,
      age:number
      isActive?:boolean
  }
  
  let hero:Hero ={
      name:'Thor',
      age:1500,
  };
  
  function createHero(hero:Hero): Hero{
      const {name, age} =hero
     return {name,age, isActive:true}
  }
  
  const thor =createHero({name: 'thor',age: 1500})
  console.log(thor.isActive) // => true

  thor.id?.toString()
