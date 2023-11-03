document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".animation-element");
  const options = {
    threshold: 0.25, // This specifies how much of the element needs to be visible for the callback to be triggered (in this case, 50%)
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(element);
});
