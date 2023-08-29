// script.js

let game_ing = false;
const choices = ["✌", "✊", "🖐"];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function showPurchaseContent() {
  document.getElementById("modalContent").style.display = "block";
}

function play(userChoice) {
  if (game_ing == false) {
    const computer = computerChoice();
    let result = "";

    if (userChoice === computer) {
      result = "비겼습니다! 혹시모르니 재고 다시한번 확인하세요!";
      game_ing = true;
      setTimeout(function () {
        game_ing = false;
        window.location.href = "index.html";
      }, 3000);
    } else if (
      (userChoice === "✌" && computer === "🖐") ||
      (userChoice === "✊" && computer === "✌") ||
      (userChoice === "🖐" && computer === "✊")
    ) {
      result = "이겼습니다! 결제 창으로 넘어갑니다.";
      game_ing = true;
      setTimeout(function () {
        game_ing = false;
        window.location.href = "payment.html";
      }, 3000);
    } else {
      result = "졌습니다! 혹시모르니 재고 다시한번 확인하세요!";
      game_ing = true;
      setTimeout(function () {
        game_ing = false;
        window.location.href = "index.html";
      }, 3000);
    }

    document.getElementById(
      "result"
    ).innerHTML = `당신: ${userChoice}, 컴퓨터: ${computer}<br>${result}`;
  }
}

document.getElementById("rock").addEventListener("click", () => play("✊"));
document.getElementById("paper").addEventListener("click", () => play("🖐"));
document.getElementById("scissors").addEventListener("click", () => play("✌"));

document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("purchaseButton").addEventListener("click", openModal);

// 모달 바깥 클릭 시 모달 닫기
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};

