let everything = document.getElementById('everything');
let actionButton = document.getElementById('actionButton');
actionButton.onclick = ()=>{
        getRandomEmoji();
    }

let emojiList = ['9977','127877','127917','127939','127940','127943','127946','127947','127948','128000',
'128001','128002','128003','128004','128005','128006','128007','128008','128009','128010',
'128011','128012','128013','128373','128378','128512','128513','128514','128516','128517',
'128518','128519','128520','128521','128526','128536','128539','128540','128541','128542',
'128545','128546','128552', '128554','128561','128562','128568','128571','128579','128581',
'128584','128585','128586','128589','128590','128675','128692','129297','129298','129299',
'129302','129303','129312','129313','129314','129315','129317','129319','129320','129321',
'129322','129324','129326','129332','129334','129498','129499','129501','129502','129503'];

let secretClicker = document.getElementById('secretClicker');
secretClicker.onclick = ()=>{
    secretFunction();
}

let secretCount = 0;

function secretFunction(){
    secretCount++;
    let magicText = document.getElementById('littleText');
    if(secretCount >= 9){
        magicText.className = 'text-base';
        magicText.innerHTML = "&#10024; Voila! Magic! &#10024;"
    }
}
    function getRandomEmoji(){
        let spiritAnimalElement = document.getElementById('spiritAnimal');
        let randomIndex = Math.floor(Math.random() * emojiList.length)
        spiritAnimalElement.innerHTML =`&#${emojiList[randomIndex]};`;
    }
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    
    getRandomEmoji();