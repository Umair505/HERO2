const str: string = "Moinul"
//SS BB u NN-> string ,symbol,big int ,boolian,undefined,Number,Null
//non premitive ->array,object,

let anyVar: number = 1;

let arr : number[] =[1,2,3,4,5];

export type Tobj={
    name:string
    age: number
    education?:{
        university: "University" | "College" | "Diploma"  //This is  basically union type
        level:string
    }
}

const obj :Tobj = {
    name: "moinul",
    age: 24,
    education:{
        university: "East Delta",
        level: "Undergraduate"
    }
}