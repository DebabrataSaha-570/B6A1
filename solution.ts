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


type User = {
    id: number; 
    name: string; 
    email: string; 
    isActive: boolean
}

const filterActiveUsers  = (users: User[]) : User[] => {
    const output = users.reduce((acc: User[] , user: User) => {
        if(user.isActive === true){
            acc.push(user)
        }
        return acc;

    },[])

    return output;
}



interface Book{
    title: string; 
    author: string; 
    publishedYear: number; 
    isAvailable: boolean
}

const printBookDetails = (book: Book) => {
    const bookAvailable = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${bookAvailable}`)
}





const getUniqueValues = (array1 : number[], array2 : number[]) : number[] => {
    const combinedArray = [...array1, ...array2]; 
    let uniqueArray : number[] = []; 

    combinedArray.map((item )  => {
        let duplicate = false; 
        uniqueArray.map((uniqueItem : number) => {
            if(uniqueItem === item){
                duplicate = true; 
            }
        })
         if(!duplicate ){
            uniqueArray.push(item)
         }
    })
   
    return uniqueArray; 



}



type Product = {
    name: string; 
    price: number; 
    quantity: number; 
    discount? : number; 
}

const calculateTotalPrice = (products: Product[]) : number => {
    let total = 0 ;
    products.map((product: Product) => {
        const baseTotal = product.price * product.quantity; 

        if(product.discount !== undefined){
            const discountAmount = baseTotal * (product.discount / 100)
            total = total + (baseTotal - discountAmount)
        }
        else{
            total = total + baseTotal;
        }

    })

    return total;
}



