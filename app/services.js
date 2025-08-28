document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  const options = { threshold: 0.5 };

  const startCounter = (entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      const duration = 1500; // animasyon süresi (ms)
      let start = null;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        counter.textContent = Math.floor(progress * target);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          counter.textContent = target; // son değer
        }
      };

      requestAnimationFrame(animate);
      observer.unobserve(counter);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(startCounter);
  }, options);

  counters.forEach(counter => observer.observe(counter));
});