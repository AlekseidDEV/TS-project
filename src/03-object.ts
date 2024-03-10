interface User {
    name: string,
    age: number,
    job: string 
    [key: string]: unknown // возможность добавлять динамические свойтсва
}


const user: User = {
    name: 'Alex',
    age: 19,
    job: 'frontend developer' 
}

user.age = 20 // правильная запись
// user.age = '20' - ошибка, ибо в интерфесе указано поле age типа number

const user1: User = {
    age: 25, 
    name: 'Dmitry',
    job: 'Seo specialist'
}

user1["goWork"] = '9:00'
user1["salary"] = 100000
user1["skills"] = ['PHP', 'SEO', 'bitrix']
user1["friendly"] = true
// обозначение для опциональных или динамических свойств