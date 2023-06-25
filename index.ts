// let sun: number = 12
// let str: string = "motion web"
// let isDone: boolean = false
// let num: any = 13
// //sun = "1234" - выдаёт ошибку
// console.log(str)
// let task: string = "motion"
// let number: number = 124
//
// function task1(a:number, b: number):string {
//     return a + b + "" + false + null
// }
//
// console.log(task1(5,5))

interface IObj {
    id: number,
    name: string,
    age: number,
    job: string,
    car: boolean,
    hobby: string,
    block: {
        [key: string] : string
    }
    // block: {
    //     address: string,
    //     street: string
    // }
}

let obj: IObj = {
    id: 1,
    name: "Bob",
    age: 99,
    job: "Developer",
    car: false,
    hobby: "sport",
    block: {
        address: "Bishkek",
        street: "Turusbekova 109/3"
    }
}

console.log(obj)
console.table(obj)


