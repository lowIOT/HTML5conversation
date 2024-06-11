let favorability = 0;

// 会話のパターンを増やしました
const dialogues = [
    "こんにちは！どうしますか？",
    "それは素晴らしい選択ですね！",
    "いい感じです！",
    "あなたと話すのが楽しいです！",
    "もっと話を聞かせてください！",
    "あなたの意見はとても参考になります！",
    "こんなに楽しい会話は初めてです！",
    "もっと知りたいことがたくさんあります！"
];

// 画像リスト
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
const bgm = document.getElementById("bgm");
const se = document.getElementById("se");

// BGM再生
bgm.play();

function chooseOption(option) {
    favorability++;
    updateDialogue();
    updateImage();
    playSE();
}

// 会話テキストの更新
function updateDialogue() {
    let dialogueIndex = Math.min(favorability, dialogues.length - 1);
    document.getElementById("dialogue").innerText = dialogues[dialogueIndex];
}

// 画像の更新
function updateImage() {
    let imageIndex = Math.min(Math.floor(favorability / 2), images.length - 1);
    const characterImage = document.getElementById("character-image");
    characterImage.src = images[imageIndex];
    characterImage.onerror = function() {
        this.src = 'images/default.jpg';
        this.alt = '画像が見つかりません';
    };
}

// 効果音再生
function playSE() {
    se.currentTime = 0;
    se.play();
}
