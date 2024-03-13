interface Car {
    brand: string,
    year: number
}

const numbers = [1, 2, 3, 4]

const strs: Array<string> = [] // новый тип записи(старая - string[])
const strs1: string[] = [] // массив строк
const cars2: Car[] = [] // массив, в котором ожидаются объекты, которые должны
//соответсвовать интерфейсу Car
const arrOfArr: string[][] = [] // массив массивов, которые должны содержать в себе строковоые значения

strs.push('hello')
cars2.push({brand: 'BMW', year: 2020}, 
{brand: 'Priora', year: 2017}
)
arrOfArr.push(['sfasdf', 'sdfasdf'])


const arFunc = (arr: unknown[]): void => { // я указал, что я ожидаю массив,в котором будут лежать данные неизвестного мне типа
    arr.forEach((item, index) => {
        // у параметров при вызове forEach, так же будет авто типизация.
    })
}

const arFunc1 = (arr: [string, number]): void => { // здесь уже я указал, какие данные ожидаются в массиве
    arr.forEach((item, index) => {
        
    })
}

arFunc1(['fsdf', 1])