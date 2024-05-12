let balance = 0;

function updateBalance(amount) {
  balance += amount;
  document.getElementById("balanceAmount").textContent = balance;
}

function showCaptcha(channelId) {
  // Показываем капчу
  document.getElementById("captcha").style.display = "block";
  // Скрываем кнопку канала
  document.getElementById(channelId).style.display = "none";
}

function solveCaptcha() {
  const captchaInput = document.getElementById("captchaInput").value.trim().toLowerCase();
  if (captchaInput === "captcha") {
    // Если капча решена успешно, начисляем баланс и скрываем капчу
    updateBalance(0.01);
    document.getElementById("captcha").style.display = "none";
    // Показываем кнопку канала, но делаем её неактивной
    const channelButton = document.createElement("button");
    channelButton.textContent = "Канал 1 (Подписка оформлена)";
    channelButton.disabled = true;
    document.getElementById("channel1").appendChild(channelButton);
  } else {
    alert("Неправильный код с капчи!");
  }
}
