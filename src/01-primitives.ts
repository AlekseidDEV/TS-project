//numbers
let x = 10;
// let z = 12345n;
let y = NaN

// string
let myName = 'Alex'
let symb = Symbol('as')

// boolean
let bool = true

// nothing
let undefinedValue = undefined
let nullValue = null

// literal
const num = 450
const str = "str"

// universal
let anyType: any = 1
anyType = 'str'
anyType = []

let unk: unknown = 2

unk = 'hello';
if(typeof unk === 'string') unk.toUpperCase()
