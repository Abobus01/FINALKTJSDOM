let colors = document.querySelectorAll('.colors')
let ready = document.querySelector('.choosed-colours')

ready.style.opacity = "0.3"

ready.disabled = true

let btn1 = document.querySelector('.btn1')
btn1.style.opacity = "0.3"
let btn2 = document.querySelector('.btn2')
btn2.style.opacity = "0.3"
let card = document.querySelector('.card')
let pagenation = document.querySelector('.pagenation')


let whatColors = []

colors = Array.from(colors)
colors.forEach(el => {
    el.sign = false
    el.addEventListener('mouseenter', e => {
        if(e.shiftKey){
            btn1.style.opacity = "0.3"
            btn2.style.opacity = "0.3"
            card.firstChild.innerHTML = 'выберите цвета'
            card.firstChild.style.color = '#4169e1'

            if(!el.sign){
                el.style.backgroundColor = el.firstChild.nextSibling.innerHTML
                if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
                 el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' || 
                 el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                    el.style.color = 'white'
                }
                whatColors.push([el.firstChild.nextSibling.innerHTML, el.lastChild.previousSibling.innerHTML])
                el.sign = true
    
                ready.style.opacity = "1"
                ready.disabled = false
            } else {
                el.style.backgroundColor = 'gainsboro'
                if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
                 el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' ||
                  el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                    el.style.color = 'black'
                }
                whatColors.splice(whatColors.findIndex(element => element[0] == el.firstChild.nextSibling.innerHTML), 1)
    
    
                el.sign = false
    
                if(whatColors.length == 0){
                    ready.style.opacity = "0.3"
                    ready.disabled = true
                }
            }
        }
    })


    el.addEventListener('click', () => {
    btn1.style.opacity = "0.3"
    btn2.style.opacity = "0.3"
    card.firstChild.innerHTML = 'выберите цвета'
    card.firstChild.style.color = '#4169e1'

        if(!el.sign){
            el.style.backgroundColor = el.firstChild.nextSibling.innerHTML
            if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
             el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' || 
             el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                el.style.color = 'white'
            }
            whatColors.push([el.firstChild.nextSibling.innerHTML, el.lastChild.previousSibling.innerHTML])
            el.sign = true

            ready.style.opacity = "1"
            ready.disabled = false
        } else {
            el.style.backgroundColor = 'gainsboro'
            if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
             el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' ||
              el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                el.style.color = 'black'
            }
            whatColors.splice(whatColors.findIndex(element => element[0] == el.firstChild.nextSibling.innerHTML), 1)


            el.sign = false

            if(whatColors.length == 0){
                ready.style.opacity = "0.3"
                ready.disabled = true
            }
        }
    })
})

ready.addEventListener('click', () => {
    card.firstChild.innerHTML = whatColors[0][0]
    readyColors(whatColors)
})

function readyColors(words){

    console.log(words.length)
    let cnt = 0
    let lang = 0
    btn2.style.opacity = "1"
    btn2.disabled = false
    if(words.length == 1){
        btn1.disabled = true  
        btn2.disabled = true
        btn2.style.opacity = "0.3" 
    }
    card.firstChild.innerHTML = words[cnt][0]
    card.firstChild.style.color = words[cnt][0]
    card.addEventListener('click', () => {
    console.log(lang)
        if(lang == 0) {
            lang = 1
            card.style.transform = "rotateY(180deg)"
            card.firstChild.style.transform = "rotateY(180deg)"
            setTimeout(() => { card.firstChild.innerHTML = words[cnt][lang] }, 500)
        } else {
            lang = 0
            card.style.transform = "rotateY(0deg)"
            card.firstChild.style.transform = "rotateY(0deg)"
            setTimeout(() => { card.firstChild.innerHTML = words[cnt][lang] }, 500)
        }
    })

    btn2.addEventListener('click', () => {
        cnt++
        card.firstChild.innerHTML = words[cnt][lang]
        card.firstChild.style.color = words[cnt][0]

        card.style.boxShadow = `0px 5px 25px 0 ${words[cnt][0]}`
        setTimeout(() => card.style.boxShadow = `0px 5px 15px 0 rgba(196, 196, 196, 0.5)`, 350)
        if(cnt == words.length-1){
            btn2.disabled = true
            btn2.style.opacity = '0.3'
        }
        btn1.style.opacity = '1'
        btn1.disabled = false
    })
    btn1.addEventListener('click', () => {
        cnt--
        card.firstChild.innerHTML = words[cnt][lang]
        card.firstChild.style.color = words[cnt][0]

        card.style.boxShadow = `0px 5px 15px 0 ${words[cnt][0]}`
        setTimeout(() => card.style.boxShadow = `0px 5px 15px 0 rgba(196, 196, 196, 0.5)`, 250)

        if(cnt == 0){
            btn1.disabled = true
            btn1.style.opacity = '0.3'
        }
        btn2.style.opacity = '1'
        btn2.disabled = false
    })
}