document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");
    const countdownDate = new Date("2024-03-15").getTime();
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      if (distance <= 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "Поздравляю!";
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    };
  
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
  });
  


