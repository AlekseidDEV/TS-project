/* 
кортеж удобен для работы с массивами, или массивом, внутри которого лежат другие массивы.
Мы можем указать количество данных, и их типизацию. Так же можем указать для вложенных массивов, сколько полей они должны
иметь, и каких типов они должны быть.
*/

const pairs: [string, string][] = [['key', 'value'], ['key', 'value']]
const data: [number, boolean, string][] = [[1, true, 'online'], [1, true, 'online']]

pairs.push(['user', '12345']) // только так можно запушить данные, в остальных случаях будет ошибка
// data.push(['user', '12345']) - выдаст ошибку, ибо данный массив не соответсвует ожидаемым типам