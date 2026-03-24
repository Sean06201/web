// 1. 動態安撫文字輪播
const messages = [
    "正在幫胖達機車加油...",
    "正在安撫廚師的情緒...",
    "工程師正在狂敲鍵盤搶修中...",
    "喝口水，馬上為您重新連線...",
    "訂單太多啦！正在努力消化中..."
];

let messageIndex = 0;
const dynamicTextElement = document.getElementById('dynamic-text');

// 使用 setInterval 每 3 秒切換一次陣列中的文字
setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    dynamicTextElement.innerText = messages[messageIndex];
}, 3000);


// 2. 倒數計時器
let timeLeft = 30;
const countdownElement = document.getElementById('countdown');

// 每 1 秒執行一次扣減
const timer = setInterval(() => {
    timeLeft--;
    countdownElement.innerText = timeLeft;

    // 當時間歸零時，停止計時並重新整理頁面
    if (timeLeft <= 0) {
        clearInterval(timer);
        location.reload(); 
    }
}, 1000);