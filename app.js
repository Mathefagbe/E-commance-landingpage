const cart = document.querySelector("#on")
const cartcontain = document.querySelector("section>.cartcontainer")
const cartitems = document.getElementsByClassName("filledcart")
const empty = document.querySelector(".cartcontainer>p")
const itemcont = document.querySelector(".cartwithcheckout")
var itemNum = document.getElementById("cartNum")






//INITIAL SCR FOR THE CART
var newsrc = document.querySelector(".thumbnail>div>img").src
// var remove=document.querySelector("#removeid")


//THE CART ICON
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


//
function cartitem() {
    if (cartitems.length > 0) {
        empty.style.display = "none"
        itemcont.style.display = "flex"
        Array.from(cartitems).forEach((e) =>
            e.style.display = "flex"

        )
    } else {
        itemcont.style.display = "none"
        empty.style.display = "block"
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
let cartcheck = document.querySelector(".cartwithcheckout>div")

addtocart.addEventListener("click", (e) => {


    // create an element
    let divcart = document.createElement("div")
    divcart.className = "filledcart"


    //create the first inner element
    let divimg = document.createElement("div")
    let itemimg = document.createElement("img")
    itemimg.className = "itemimg"
    itemimg.src = newsrc

    //create the second inner element
    let divname = document.createElement("div")
    // divname.style="margin-right:30px"


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



    let removediv = document.createElement("div")
    removediv.innerHTML = `<svg class="remove" onclick="remove()" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>`



    divimg.appendChild(itemimg)
    divname.appendChild(newitemname)
    divname.appendChild(newprice)

    divcart.appendChild(divimg)
    divcart.appendChild(divname)
    divcart.appendChild(removediv)
    
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

    boxcontainer.style = "background-color:rgba(0, 0, 0, 0.19);"
    navigate.style.width = "70vw"
})

const closemenu = document.querySelector(".close")
closemenu.addEventListener("click", (e) => {

    boxcontainer.style = "background-color:white"
    navigate.style.width = "0"
})


function remove() {
    const removebtn = document.querySelector(".remove")
    const removebtnContainer = removebtn.parentElement;
    cartcheck.removeChild(removebtnContainer.parentElement)
    itemNum.textContent = cartitems.length
    cartitem()

}
