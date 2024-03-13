// пример создания интерфейсов и использования их в функциях
interface User {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date
}

interface Admin extends User {
    role: string
}

const user: User = {
    login: "AlexDev",
    email: "exam@gmail.com",
    password: "dffsde124",
    isOnline: true,
    lastVisited:  new Date(2024, 0, 25)
}

const user1: Admin = {
    login: "AlexDev",
    email: "exam@gmail.com",
    password: "dffsde124",
    isOnline: false,
    lastVisited:  new Date(2024, 0, 25),
    role: 'admin'
}

const isLoginuser = (user: {login: string, password: string, role?: string}): void => {
    if(user.role && user.login !== '' && user.password !== ''){
        console.log(`hello ${user.role.toUpperCase()}`);
    } else if(!user.role && user.login !== '' && user.password !== ''){
        console.log('hello user');
    }
}

isLoginuser(user)