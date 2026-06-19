document.addEventListener("DOMContentLoaded", function () {
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
  const clickTag2 = "http://www.fda.gov/medwatch";
  const ad = document.querySelector("#ad");
  const link = document.querySelector(".link");

  ad.addEventListener("click", function (e) {
    e.target == link ? window.open(clickTag2) : window.open(clickTag);
  });
  /////////////////CLICK TAG ENDS/////////////////////
  const tl = gsap.timeline({
    defaults: { duration: 0.3, ease: "power2.inOut" },
    repeat: 2, // Total of 3 iterations (initial + 2 repeats)
  });
  //first sequance

  tl.to(".p1", { opacity: 1 }) // Fade in .p1
    .to(".pp1", { opacity: 1 }) // Then fade in .pp1
    .to(".ppp1", { opacity: 1 }) // Then fade in .ppp1
    .to({}, { duration: 5 }) // Pause for 5 seconds
    .to([".p1", ".pp1", ".ppp1"], { opacity: 0 }) // Fade out all from sequence 1

    .to(".p2", { opacity: 1 }) // Fade in .p2
    .to(".pp2", { opacity: 1 }) // Then fade in .pp2
    .to(".ppp2", { opacity: 1 }) // Then fade in .ppp2
    .to({}, { duration: 5 }) // Pause for 5 seconds
    .to([".p2", ".pp2", ".ppp2"], { opacity: 0 }) // Fade out all from sequence 2

    .to(".p3", { opacity: 1 }) // Fade in .p3
    .to(".pp3", { opacity: 1 }) // Then fade in .pp3
    .to(".ppp3", { opacity: 1 }) // Then fade in .ppp3
    .to(".bottom-p", { opacity: 1 }) // Fade in .bottom-p after others
    .to({}, { duration: 5 }); // Final pause before repeat

  //end of first sequance
});
