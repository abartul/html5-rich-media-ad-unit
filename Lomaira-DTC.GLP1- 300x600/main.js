document.addEventListener("DOMContentLoaded", () => {
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  ///CLICK TAG/////
  const clickTag =
    getParameterByName("clickTAG") +
    encodeURIComponent(
      "https://lomaira.com/?utm_source=Adfire&utm_medium=Display&utm_campaign=DTC_2025"
    );
  const clickTag2 =
    getParameterByName("clickTAG") +
    encodeURIComponent("http://www.fda.gov/medwatch");
  const ad = document.querySelector("#ad");
  const link = document.querySelector(".link");

  ad.addEventListener("click", function (e) {
    e.target == link ? window.open(clickTag2) : window.open(clickTag);
  });
  /////////////////CLICK TAG ENDS/////////////////////

  // Timeline for the first two sequences
  const tlRepeat = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    delay: 5, // Initial delay before starting the first sequence
    repeat: 1, // Repeat once, resulting in 2 total executions
    repeatDelay: 5, // 5 seconds pause between each repeat
    onComplete: () => startFinalSequence(), // Start final sequence after repeats
  });

  tlRepeat
    // Fade out p1 before transitioning
    .to(".p1", { opacity: 0, duration: 0.5 })
    .to(".cta", { opacity: 0, duration: 0.5 })
    .to(".i-1", { x: "-100%", duration: 0.2 })
    .fromTo(".i-2", { x: "100%" }, { x: 0, duration: 0.2 }, "same")
    .to(".i-1", { x: "100%", duration: 0, opacity: 0 }, "same")
    .to(".p2", { opacity: 1, duration: 0.5 })
    .to(".cta", { opacity: 1, duration: 0.5 })

    .to({}, { duration: 5 }) // Pause 5s before next transition

    // Fade out p2 before transitioning
    .to(".p2", { opacity: 0, duration: 0.5 })
    .to(".cta", { opacity: 0, duration: 0.5 })
    .to(".i-2", { x: "-100%", duration: 0.2 })
    .fromTo(".i-3", { x: "100%" }, { x: 0, duration: 0.2 })
    .to(".p3", { opacity: 1, duration: 0.5 })
    .to(".cta", { opacity: 1, duration: 0.5 })

    .to({}, { duration: 5 }) // Pause 5s before transitioning to last slide

    // Transition from p3 to last_slide and p4
    .to(".p3", { opacity: 0, duration: 0.5 })
    .to(".cta", { opacity: 0, duration: 0.5 })
    .to(".i-3", { x: "-100%", duration: 0.2 })
    .fromTo(".last_slide", { x: "100%" }, { x: 0, duration: 0.2 })
    .set(".ad-id", { color: "#0c284c" })
    .to(".p4", { opacity: 1, duration: 0.5 })
    .to(".cta2", { opacity: 1, duration: 0.5 })

    .to({}, { duration: 5 }) // Pause 5s after p4 fades in

    // Fade out p4 and slide out last_slide
    .to(".p4", { opacity: 0, duration: 0.5 })
    .to(".cta2", { opacity: 0, duration: 0.5 })

    .to(".last_slide", { x: "-100%", duration: 0.2 })
    .set(".ad-id", { color: "#ffffff" })
    // Continue with transition back to p1
    .set(".i-1", { opacity: 1 }) // ensure i-1 is visible before sliding in
    .to(".i-1", { x: 0, duration: 0.2 }, "same2")
    .to(".p1", { opacity: 1, duration: 0.5 })
    .to(".cta", { opacity: 1, duration: 0.5 });

  function startFinalSequence() {
    const tlFinal = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      delay: 5, // Delay before starting the final sequence
      onComplete: () => console.log("Final Animation Complete."),
    });

    tlFinal
      // Fade out p1 before transitioning
      .to(".p1", { opacity: 0, duration: 0.5 })
      .to(".cta", { opacity: 0, duration: 0.5 })
      .to(".i-1", { x: "-100%", duration: 0.2 })
      .fromTo(".i-2", { x: "100%" }, { x: 0, duration: 0.2 }, "same")
      .to(".i-1", { x: "100%", duration: 0, opacity: 0 }, "same")
      .to(".p2", { opacity: 1, duration: 0.5 })
      .to(".cta", { opacity: 1, duration: 0.5 })

      .to({}, { duration: 5 }) // Pause 5s before next transition

      // Fade out p2 before transitioning
      .to(".p2", { opacity: 0, duration: 0.5 })
      .to(".cta", { opacity: 0, duration: 0.5 })
      .to(".i-2", { x: "-100%", duration: 0.2 })
      .fromTo(".i-3", { x: "100%" }, { x: 0, duration: 0.2 }, "same")
      .to(".p3", { opacity: 1, duration: 0.5 })
      .to(".cta", { opacity: 1, duration: 0.5 })

      .to({}, { duration: 5 }) // Pause 5s before transitioning to last slide

      // Transition from p3 to last_slide and p4
      .to(".p3", { opacity: 0, duration: 0.5 })
      .to(".cta", { opacity: 0, duration: 0.5 })
      .to(".i-3", { x: "-100%", duration: 0.2 })
      .fromTo(".last_slide", { x: "100%" }, { x: 0, duration: 0.2 })
      .set(".ad-id", { color: "#0c284c" })
      .to(".p4", { opacity: 1, duration: 0.5 })
      .to(".cta2", { opacity: 1, duration: 0.5 });
  }
});
