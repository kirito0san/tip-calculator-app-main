let Bill = document.querySelector(`.Bill`)
let btn = document.querySelector(`button`)
let spans = document.querySelectorAll(`.tipsnum span`)
let People = document.querySelector(`.People`)
let inps = document.querySelectorAll(`input`)
let proplem = document.querySelector(`.proplem`)
let selected
let one = 0
let two = 0
let tipAmount = document.querySelector(`.tipAmount`)
let total = document.querySelector(`.total`)
let Custom = document.querySelector(`.Custom`)
spans.forEach((el) => {
    el.addEventListener(`click`, () => {
        Custom.value = ``
        spans.forEach((e) => {
            e.classList.remove(`selected`)
        })
        el.classList.add(`selected`)
        selected = document.querySelector(".selected")
        if (!Bill.value == `` && !People.value == ``) {
            calc()
            tipAmount.innerHTML = one.toFixed(2)
            total.innerHTML = two.toFixed(2)
        }
    })
})
Custom.addEventListener(`input`, () => {
    spans.forEach((e) => { e.classList.remove(`selected`) })
})
People.addEventListener(`input`, () => {
    if (People.value == ``) {
        btn.style.cssText = ``
        proplem.style.display = `flex`
        People.style.border = `1px solid red`
    } else if (!People.value == ``) {
        proplem.style.display = `none`
        People.style.border = `1px solid hsl(172, 67%, 45%)`
    }
})
inps.forEach((e) => {
    e.addEventListener(`input`, () => {
        if (!Bill.value == `` && !People.value == `` && !Custom.value == ``) {
            one = (Bill.value * Custom.value / 100) / +People.value
            two = ((Bill.value * Custom.value / 100) + +Bill.value)
            two = two / People.value
            console.log(Bill.value, Custom.value, +People.value)
            console.log(one)
            console.log(two)
            tipAmount.innerHTML = one.toFixed(2)
            total.innerHTML = two.toFixed(2)
        } else if (!Bill.value == `` && !People.value == `` && Custom.value == ``) {
            calc()
            tipAmount.innerHTML = one.toFixed(2)
            total.innerHTML = two.toFixed(2)
        }
        if (!Bill.value == ``) {
            btn.style.cssText = `color: hsl(183, 100%, 15%); background-color: hsl(172, 67%, 45%);`
        }
    })
})
function calc() {
    one = (Bill.value * Number.parseInt(selected.innerHTML) / 100) / +People.value
    two = ((Bill.value * Number.parseInt(selected.innerHTML) / 100) + +Bill.value)
    two = two / People.value
}
btn.addEventListener("click", () => {
    Custom.value = ``
    Bill.value = ``
    People.value = ``
    total.innerHTML = `$0.00`
    tipAmount.innerHTML = `$0.00`
    selected.classList.remove(`selected`)
})