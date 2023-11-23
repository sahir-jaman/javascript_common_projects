let is_status = document.querySelector("h5")
let btn = document.querySelector("#add")

var flag = false

btn.addEventListener("click", function () {
    // if (btn.innerHTML == "Add Friend") {  -> it is also aplicable. 
    if (flag == false) {
        is_status.innerHTML = "Friends"
        is_status.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = true
    }
    else {
        is_status.innerHTML = "Stranger"
        is_status.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = false
    }
})

// remFriend.addEventListener("click", function () {
//     is_stranger.innerHTML = "Stranger"
//     is_stranger.style.color = "red"
// })