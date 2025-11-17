 const formatValue = (input : string | number | boolean) : string | number | boolean => {
    if(typeof input  === "string"){
       return input.toUpperCase()
    }
    if(typeof input === "number"){
        return input * 10; 
    }
    if(typeof input === "boolean"){
        return !input
    }

    return input; 
 }


const getLength = (input: string | number[]) : number => {
    if(typeof input === "string"){
        return input.length; 
    }
    if(Array.isArray(input)){
        return input.length; 
    }

    return 0; 
}

class Person {
    name: string; 
    age: number; 

    constructor(name: string, age: number){
        this.name = name; 
        this.age = age
    }

    getDetails() {
        return `Name ${this.name}, Age: ${this.age}`
    }

}

type Item = {
    title: string; 
    rating: number;
}

const filterByRating = (items: Item[]) : Item[] => {
    const output : Item[] = []; 

    items.map(item => {
        if(item.rating >= 4){
            output.push(item)
        }
    }); 

    return output;

}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));