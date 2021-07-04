const addTaskBtn = document.getElementById("addTask");
let tableData = document.getElementById("tableData");
let usrName = document.getElementById("userName");

const audio = new Audio();
audio.src = "sound.mp3";

let song = new Audio();
song.src = "countingStar.mp3";
let count = 0;
playSong.addEventListener('click', ()=>{
    playSong.classList.toggle("songAnimation");
    if (count%2==0){
        song.play()
    }
    else{
        song.pause()
    }
    count += 1;
})
function clientName() {
    let nameusr = prompt("Please enter your name", "username");
    localStorage.setItem("username", nameusr);
    usrName.innerText = nameusr;
}

if (localStorage.getItem("username")==null){
    clientName()
}
else{
    let nameusr = localStorage.getItem("username");
    usrName.innerText = nameusr;
}
usrName.addEventListener('click', clientName)
addTaskBtn.addEventListener("click", ()=>{
    addData();
    displayData();
})

function addData() {
    let arr = [];
    const taskData = document.getElementById("task").value;
    let descrData = document.getElementById("description").value;
    if (descrData.length==0){
        descrData = "Just do it!";
    }
    if (taskData.length>1){
        if (localStorage.getItem("mainData")==null){
            arr.push([taskData, descrData]);
            localStorage.setItem("mainData", JSON.stringify(arr));
        }
        else{
            let oldData = JSON.parse(localStorage.getItem("mainData"));
            arr = oldData;
            arr.push([taskData, descrData]);
            localStorage.setItem("mainData", JSON.stringify(arr));
        }
    }
}

function displayData() {
    const data = JSON.parse(localStorage.getItem("mainData"))
    console.log(data)
    let str = "";
    if (data!=null){
        let sno = 1;
        for (item of data){
            str += `<tr>
            <td class="fst">${sno}</td>
            <td class="mid">${item[0]}</td>
            <td class="lst">${item[1]}</td>
            <td class="icon" onclick="audio.play(); deleted(${sno})"><img src="done.png"></td>
            <td class="icon" onclick="deleted(${sno})"><img src="trash.png"></td>
            </tr><hr>`
            sno += 1;
        }
    }
    if (data.length==0){
        str += `<tr>
        <td class="fst"></td>
        <td class="mid empty">Add task to your day</td>
        <td class="lst"></td>
        <td></td>
        </tr>`
    }
    tableData.innerHTML = str;
}

displayData()

function deleted(item) {
    let userdata = JSON.parse(localStorage.getItem("mainData"));
    userdata.splice(item-1, 1);
    localStorage.setItem("mainData", JSON.stringify(userdata));
    displayData()
}