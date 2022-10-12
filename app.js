const cart = document.querySelector("#on")
const cartcontain = document.querySelector("section>.cartcontainer")
const cartitems = document.getElementsByClassName("filledcart")
const empty = document.querySelector(".cartcontainer>p")
const itemcont = document.querySelector(".cartwithcheckout")
var itemNum = document.getElementById("cartNum")

//INITIAL SCR FOR THE CART
var newsrc = document.querySelector(".thumbnail>div>img").src

cart.addEventListener("click", (e) => {
    if (e.target.id === "on") {
        cartcontain.style.display = "block"
        cartitem()
        e.target.id = "off"
    } else {
        cartcontain.style.display = "none"
        e.target.id = "on"
    }
})


function cartitem() {
    if (cartitems.length > 0) {
        empty.style.display = "none"
        itemcont.style.display = "flex"
        Array.from(cartitems).forEach((e) =>
            e.style.display = "flex"
        )
    }

}


const minus = document.getElementById("minus")
const add = document.getElementById("add")
var count = document.getElementById("count")
let intcount = parseInt(count.textContent, 10)
const addtocart = document.querySelector(".addtocart")


minus.addEventListener("click", (e) => {
    if (intcount >= 1) {
        intcount = intcount - 1
        count.textContent = intcount
    }
})
add.addEventListener("click", (e) => {
    intcount = intcount + 1
    count.textContent = intcount


})

const amount = 125
addtocart.addEventListener("click", (e) => {
    // e.preventDefault
    let cartcheck = document.querySelector(".cartwithcheckout>div")
    //create an element
    let divcart = document.createElement("div")
    divcart.className = "filledcart"


    //create the first inner element
    let divimg = document.createElement("div")
    let itemimg = document.createElement("img")
    itemimg.className = "itemimg"
    itemimg.src = newsrc

    //create the second inner element
    let divname = document.createElement("div")
    let newitemname = document.createElement("p")
    newitemname.className = "itemname"
    newitemname.textContent = "Fall Limited Edition Sneakers"

    //create the second inner element
    let newprice = document.createElement("p")
    let sign = document.createElement("em")
    let stron = document.createElement("strong")
    newprice.className = "price"

    //price calculation
    newprice.textContent = "$" + String(amount)
    sign.textContent = " x "
    let totalprice = amount * intcount
    stron.textContent = " $" + String(totalprice)

    newprice.appendChild(sign)
    newprice.append(count.textContent)
    newprice.appendChild(stron)




    divimg.appendChild(itemimg)
    divname.appendChild(newitemname)
    divname.appendChild(newprice)
    divcart.appendChild(divimg)
    divcart.appendChild(divname)
    cartcheck.appendChild(divcart)


    itemNum.textContent = cartitems.length

})



// const activeimg=document.querySelectorAll(".activeimg")
// if (activeimg[0].className===activeimg[1].className) {
//     activeimg[1].style="border:3px solid hsl(26, 100%, 55%);opacity:0.4"   
// }
const bigimg = document.querySelectorAll(".bigimg>img")
function checks(show) {
    bigimg.forEach((e) => {
        if (e.id === show.id) {
            bigimg[0].className = "inactiveimg"
            //THE CLASS NAME CHANGES TO ACTIVE
            e.className = show.className
            newsrc = show.src
        } else {
            e.className = "inactiveimg"
        }
    })
}



const thum = document.querySelectorAll(".thumbnail>div>img")
thum.forEach((el) => {
    el.addEventListener("click", (e) => {
        checks(e.target)
    })
})



//MOBILE 


let inital = 0
// 
function next() {
    if (thum.length - 1 > inital) {
        inital = inital + 1
        checks(thum[inital])
    }
}
function previous() {
    if (inital > 0) {
        inital = inital - 1
        checks(thum[inital])
    }
}

const menu = document.querySelector(".menu")
const navigate = document.querySelector(".mobilenav")
const boxcontainer = document.querySelector(".boxcontainer")

menu.addEventListener("click", (e) => {

    boxcontainer.style = "background-color:rgba(47, 79, 79, 0.382);"
    navigate.style.width = "70vw"
})

const closemenu = document.querySelector(".close")
closemenu.addEventListener("click", (e) => {

    boxcontainer.style = "background-color:white"
    navigate.style.width = "0"
})