window.addEventListener("DOMContentLoaded", function () {
  //G-SAP
  const imageContainer = document.getElementById("img-container");
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const slideTxt = document.querySelector(".slide-txt1");
  const tl = gsap.timeline({ repeat: 3 });
  tl.to(image1, {
    opacity: 0,
    duration: 0.3,
    delay: 5,
  })

    .to(image2, {
      opacity: 1,
      duration: 0.2,
    })

    // slideTxt slides to x: -150%
    .to(slideTxt, {
      x: "-150%",
      duration: 0.5,
    })

    // After slideTxt finishes, .slide-txt2 slides from x: -150% to x: 0%
    .to(".slide-txt2", {
      x: "0%",
      duration: 0.5,
    })

    .to(".p", {
      opacity: 1,
      duration: 0.2,
    })

    .call(function () {
      if (!tl.loop) tl.loop = 1;
      if (tl.loop++ == 3) tl.pause();
    })

    .to(image2, {
      opacity: 0,
      duration: 0.3,
      delay: 5,
    })

    .to(image1, {
      opacity: 1,
      duration: 0.3,
    })

    .to(".slide-txt2", {
      x: "-150%",
      duration: 0.5,
    })

    .to(".p", {
      opacity: 0,
      duration: 0.2,
    })

    .to(slideTxt, {
      x: "0%",
      duration: 0.5,
    });

  //END OF G-SAP

  // Get the element to scroll
  const scrollBox = document.querySelector(".scrollBox");

  // Initialize a variable to store the interval ID
  let scrollInterval;

  // Function to start scrolling
  function startScrolling() {
    scrollInterval = setInterval(() => {
      scrollBox.scrollTop += 1; // Adjust the scroll speed as needed
    }, 90); // Adjust the scroll speed as needed
  }

  // Function to stop scrolling
  function stopScrolling() {
    clearInterval(scrollInterval);
  }
  startScrolling();
  // Attach event listeners to start and stop scrolling
  scrollBox.addEventListener("mouseover", stopScrolling);
  scrollBox.addEventListener("mouseout", startScrolling);

  // Automatically start scrolling when content is loaded

  //Click Tag
  const clickTag =
    getParameterByName("clickTAG") +
    encodeURIComponent(
      "https://lomaira.com/hcp/?utm_source=Adfire&utm_medium=Display&utm_campaign=HCP_2024"
    );
  document.querySelector(".main-ad_container").addEventListener("click", () => {
    window.open(clickTag);
  });

  const fda = document.querySelector(".fda");
  document.querySelector(".isi").addEventListener("click", (e) => {
    e.target === fda
      ? window.open(
          "https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
        )
      : window.open(clickTag);
  });
});
