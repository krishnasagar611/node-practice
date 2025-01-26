let we = {
    name: "sagar",
    age: 17,

}


let Allwe = function (state) {
    console.log(this.name + " " + this.age + state)
}
// Allwe.call(we)

let we2 = {
    name: "nik",
    age: 17,

}

// Allwe.call(we2,"odisha")

Allwe.apply(we2, ["bhadrak"])

let bnFn = Allwe.bind(we2, "haridwar")

console.log(bnFn)
bnFn()

function myfunction(){

}