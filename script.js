let balance = localStorage.getItem("balance") || 0;

function updateBalance(amount) {
  balance = parseFloat(balance) + parseFloat(amount);
  document.getElementById("balanceAmount").textContent = balance.toFixed(2);
  localStorage.setItem("balance", balance);
}

function showCaptcha(channelId) {
  // Генерируем 8 случайных цифр для капчи
  const captchaCode = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join("");
  // Отображаем капчу с сгенерированным кодом
  document.getElementById("captchaText").textContent = captchaCode.replace(/\d/g, "█");
  document.getElementById("captchaWrapper").style.display = "block";
  // Скрываем кнопку канала
  document.getElementById(channelId).style.display = "none";
}

function solveCaptcha() {
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const captchaText = document.getElementById("captchaText").textContent.replace(/█/g, "");
  if (captchaInput === captchaText) {
    // Если капча решена успешно, начисляем баланс и скрываем капчу
    updateBalance(0.01);
    document.getElementById("captchaWrapper").style.display = "none";
    // Показываем кнопку канала, но делаем её неактивной
    const channelButton = document.createElement("button");
    channelButton.textContent = "Канал 1 (Подписка оформлена)";
    channelButton.disabled = true;
    document.getElementById("channel1").appendChild(channelButton);
  } else {
    alert("Неправильный код с капчи!");
  }
}
