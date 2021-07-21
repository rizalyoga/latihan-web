// ====================SCROLL REVAL ANIMATION=====================

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// ScrollHome
sr.reveal(".foto-profile", { origin: "right", delay: 400 });
sr.reveal(".display-5", {});
sr.reveal(".lead", { delay: 200 });

// Scroll SubTitle About - Contact
sr.reveal(".sub-title", {});

// Scroll isi tiap content
sr.reveal(".col-md-4", { delay: 200 });

// Scroll Form
sr.reveal("form", { delay: 300 });
sr.reveal("button", { origin: "left", delay: 600 });
