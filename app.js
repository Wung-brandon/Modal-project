// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// function program(n){
//     for (let i = 0; i < 1000; ++i){
//         for (let j = 0; j < n; ++j){
//             for (let k = 0; k < j; ++k){
//                 console.log("k = " + k)
//             }
//         for (let m = 0; m < i; ++m){
//             console.log("m = " + m)
//         }    
//         }
//     }
// }

// program(5)

// function num(n, m){
//     if (n < 5){
//         return
//     }
//     if(n < m){
//         num(n/2, m+1)
//     }
//     else{
//         num(n/2, m)
//     }
// }

// num(4, 8)

const openBtn = document.querySelector(".btn")
const closeBtn = document.querySelector(".close-btn")
const modalOverlay = document.querySelector(".modal-overlay")


openBtn.addEventListener("click", () => {
    modalOverlay.classList.add("open-modal")

}) 

closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("open-modal")
})