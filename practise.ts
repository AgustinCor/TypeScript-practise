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

/*
type HeroId =`${string}-${string}-${string}-${string}-${string}`

type Hero ={
      readonly id?:HeroId,
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
     return { 
      id:crypto.randomUUID(),
      name,
      age,
      isActive:true
    }
  }
  
  const thor =Object.freeze(createHero({name: 'thor',age: 1500}))
  console.log(thor.isActive) // => true
*/


//Union types

/*
type HeroId =`${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'univesal' | 'multiversal' |
'omnipresent'

type HeroBasicInfo ={
  name:string,
  age:number
}

type HeroProperties ={
      readonly id?:HeroId,
      name:string,
      age:number
      isActive?:boolean
      powerScale?:HeroPowerScale
  }
  
 type Hero =HeroBasicInfo & HeroProperties

  let hero:Hero ={
      name:'Thor',
      age:1500,
  };
  
  function createHero(input: HeroBasicInfo): Hero{
      const {name, age} =input
     return { 
      id:crypto.randomUUID(),
      name,
      age,
      isActive:true
    }
  }
  
  const thor =Object.freeze(createHero({name: 'thor',age: 1500}))
  console.log(thor.isActive) // => true
*/

//Type Indexing

/*
type HeroProperties ={
  isActive :boolean,
  address:{
    planet:string,
    citiy:string
  }
}

const addresHero :HeroProperties['address'] ={
  planet:'Earth',
  city:'Madrid'
}
*/

//Type from value

/*
const address ={
  planet :'Earth',
  city:'Madrid'
}

type Address =typeof address 

const addresTwitch:Address ={
  planet:'Mars',
  city:'Twitch'
}
*/

//Type from function return

/*
function createAddress () {
  return {
    planet:'Tierra',
    city:'Barcelona'
  }
} 

type Address =ReturnType <typeof createAddress>
*/

const lenguages:(string | number) [] = []

lenguages.push('JavaScript')
lenguages.push('JavaScript')
lenguages.push('JavaScript')
lenguages.push('JavaScript')
lenguages.push(2)

/*
type CellValue = 'X' | 'O' | ''
type GameBoard =[
  [CellValue,CellValue, CellValue],
  [CellValue,CellValue, CellValue],
  [CellValue,CellValue, CellValue]
]

const gameBoard :string [][] =[
  ["x",'0','x'],
  ["x",'0','x'],
  ["x",'0','x']
]
*/

type CellValue = 'X' | 'O' | ''
type GameBoard =[
  [CellValue,CellValue, CellValue],
  [CellValue,CellValue, CellValue],
  [CellValue,CellValue, CellValue]
]

