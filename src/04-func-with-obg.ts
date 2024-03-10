const printPoint = (point: {x: string, y: string}): void => {
    console.log(point.x, point.y);
}   

const cordObj1 = {
 x: "1",
 y: "15",
}

const cordObj2 = {
 x: "365",
 y: "70",
 z: "478"
}
// ошибки не произойдет при передаче этого объекта, ибо функция ожидает миниму два значения, а значит 3 так же можно передать

printPoint(cordObj2)

// случай, когда второй параметр может быть не обязателен.
const user2 = {
    fistName: 'John',
    lastName: 'Cena'
   }

const printName = (user: {fistName: string, lastName?: string}): void => {
    if(user.lastName){
        console.log(`hello, my name is ${user.lastName.toUpperCase()} ${user.fistName}`);
    }
}

printName({fistName: 'Alex'})