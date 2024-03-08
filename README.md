# :green_book: Документация

<p>
Привет, друг! Ты попал в мой репозиторий, и походу у тебя появилось желание подтянуть знания по TS вместе со мной. В этом репозитории я постараюсь более подробно описать каждый момент, написанный на TS, и дать возможность тебе, разобраться в TS. Это не единственный проект, в скором времени, я добавлю еще образовательные проекты, которые ты сможешь посмотреть. Под этим текстом будет блок навигации!
</p>

## :memo: Навигация по репозиториям
<ul>
    <li><a href='#'>link</a></li>
</ul>

### Настройка проекта

<p>
Сперва, что тебе нужно сделать, это создать папку на рабочем столе и закинуть ее в свой редактор кода. Далее тебе нужно зайти в терминал bash ( Я надеюсь у тебя установлена Node ), и там инициализировать свой проект:
</p>

###### :heavy_dollar_sign: bash
```
$ npm init -y
```

<p>
Далее устанавливаем TypeScript в свой проект.
</p>

###### :heavy_dollar_sign: bash
```
$ npm i -D typescript
```
<p>
Теперь нужно создать файл конфигурации ts, для этого достаточно запустить файл tsc из папки node_modules, и файл tsconfig отобразится в файловой структуре.
</p>

###### :heavy_dollar_sign: bash
```
$ ./node_modules/.bin/tsc --init
```

#### Настройка конфигурации

<p>
Теперь приступим к настройке конфига. Если ты ранее работал с таким сборщиком как Webpack, то ты вероятно знаешь, что такое точка входа и выхода. В конфигурации нам так же нужно прописать, куда будут компилироваться наши TS файлы, директория с исходными файлами, и настройка для node_modules.
Заходим в файл tsconfig.json и ищем свойство с названием "outDir". Это точка где будет лежать уже скомпилированный код.
</p>

<img src="./img/image.png" alt="img">

<p>
 Затем под свойством compilerOptions, мы пропишем еще два свойства. Include помечает наши исходные файлы, которые будут компилироваться в publick, а exclude делает исключение, что бы из папки node_modules не компилировалось ничего лишнего.
</p>

<img src="./img/image1.jpg" alt="img">


### :clipboard: Навигация по записям
<ul>
    <li><a href='#01'>Примитивы</a></li>
</ul>

### :bookmark_tabs: Примитивы
<p id='01'>
Перед началом, описания этого модуля, давай поговорим с тобой про типы. Что же такое тип ? На самом деле тут все просто.
Когда ты создаешь переменную и заносишь в нее какое-то значение, ты присваиваешь какой-то тип этой переменной, то есть, если в переменно будет лежать число 10, 
то переменная будет иметь тип number и т.д. Но так же хочу отметить, что тут есть один интересный момент, который важно понимать. JavaScript, не имеет строгой типизации, поэтому 
ты можешь делать с переменной что угодно. Сегодня в этой переменной лежит строка, завтра число,
 через неделю массив, и это не всегда хорошо. TypeScript предотвращает такое действие, и вот пример:
</p>

```
//код написанный внутри файла ts

let num = 10 // при наведении курсора на переменную, будет показан установленный тип "number" (число)

// редактор кода, будет отображать методы для этой переменной, которые могут быть использованы только с типом number

num.trim() - ошибка, Свойство "trim" не существует в типе "number"
// таким образом, мы не можем применять методы для строки, к переменной с типом "number"

let num = [] - ошибка, Тип "never[]" не может быть назначен для типа "number"
// так же получим ошибку, ибо ранее нашей переменной был задан тип "number"
```
<p>
Может показаться, что это все ерунда, и зачем вообще это надо. Дело в том, что TypeScript покажет тебе эти ошибки
внутри редактора кода, что очень полезно на стадии разработки. Вы не будете держаться за голову, смотря в окно консоли, и думать, в чем же может быть ошибка, TS предупредит, если какие-то операции не допустимы для переменной.
</p>

#### :diamonds: Тип number
<p>
Мы уже с тобой выяснили, что переменная содержащая внутри себя число, будет иметь тип "number", но есть еще пару вещей которые ты должен знать
</p>

```
let typeNan = NaN - тип этой переменной будет "number"
```
<p>
Почему так происходит? Дело в том, что в JavaScript NaN является подтипом числового типа "number". Это немного странно, но так устроен JavaScript. И вот еще один интересный пример: 
</p>

```
let bigNum = 12345n - тип этой переменной будет "bigint"
```
<p>
Здесь уже все намного логичнее, большие целочисленные значения всегда будут иметь тип bigint, что в JS, что в TS, но самое интересное кроется в другом месте.
TypeScript будет ругаться на переменную такого типа, связано это с тем, что в настройках конфигурации установлено нацеливание на версию
ECMAScript (ES) ниже 2020 года, а поддержка переменных с типом "bigint", начинается только с 20 года. Это нужно учитывать в своих проектах.
</p>

#### :diamonds: Тип String
<p>
Со строками все намного проще. Но есть момент, который также нужно учитывать
</p>

```
let str = 'Alex' - тип string, ибо это строка

let symb = Symbol('dsds') - тип Symbol

let customStr = str + symb // Оператор "+" невозможно применить к типу Symbol
```

<p>
И да, символы нельзя складывать со строкой, потому, что символы не переводятся автоматически в строку при конкатенации со строкой, что тоже в принципе очевидно. Для этого придется использовать метод
toString() для Symbol, что бы привести символы к строке.
</p>

#### :diamonds: Тип Boolean

<p>
Смысла разбирать этот тип, я не вижу. Если в переменной лежит "true" или "false", то переменная будет иметь тип boolean, и кроме как
булевое значение, в нее занести ничего не получится.
</p>

#### :diamonds: Тип Nothing

<p>
Как такового типа Nothing в TS не существует, но что тогда это значит. Nothing - значит ничего, а к этому слову можно сопоставить
такие значение как "undefined" и "null". Это будет верное определение, но ты можешь заметить, что TS помечает переменные с этим значением
как "any" и это можно исправить.
</p>

```
let undefinedValue: undefined = undefined
let nullValue: null = null
```
<p>
Таким образом я явно указал тип переменных. Но тогда возникает вопрос, почему ранее я не указывал тип через: для переменной. Дело в том,
что TS обладает довольной сильной системой авто вывода типов, и поэтому для строк, чисел, и булевых значений не обязательно указывать
явную типизацию.
</p>

#### :diamonds: Универсальный тип (any)
<p>
Да, "any", это тот самый тип, который позволяет нам делать все что угодно с переменной.
</p>

```
let anyType: any = 1
anyType = 'str'
anyType = []
```
<p>
Мы можем переопределять значение переменной как угодно, но это не безопасно для выполнения операций и вычислений, поэтому лучше
использовать явные типы, и придерживать только их.
</p>

#### :diamonds: Тип unknown

<p>
Тип "unknown" говорит о том, что мы не знаем, какого типа может быть переменная. Указывая такой тип, редактор кода также не будет
предлагать никаких методов для этой переменной, ибо он просто не знает что это за тип. И вот как можно поступить в данной ситуации, 
когда мы не знаем, какой тип у переменной: 
</p>

```
let unk: unknown = 1

unk = 'hello';
if(typeof unk === 'string') unk.toUpperCase()
```
<p>
Таким образом, если тип переменной будет строка, то тогда применится метод toUpperCase()
</p>

#### :diamonds: Литералы
<p>
На протяжении всего этого модуля, ты мог заметить, что я использовал только let переменные, но как же быть с const.
Константа, не может быть перезаписана, поэтому у нее не будет конкретного типа, а тип будет в себе содержать значение константы.
Константа(Литерал) - одно конкретное значение!
</p>

```
const num = 1000 - ты не увидешь типа number, ибо это константа, типом будет ее значение: 1000
```




