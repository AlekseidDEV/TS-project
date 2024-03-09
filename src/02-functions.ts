const sumFunc = (a: number, b: number): number => {
    return a + b
}

sumFunc(5, 5)

const logger = (name: string, userId?: string): void => {
    console.log(`hello, my name is ${name}`);
}

logger('Alex')

const crashFunc = (): never => {
    throw new Error('crash')
}

crashFunc()

const sumService = (...services: number[]) => {
    const sumServices = services.reduce((current, total) => current + total, 0)

    return sumServices / 10
}