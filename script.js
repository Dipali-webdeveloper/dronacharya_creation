
document.addEventListener('DOMContentLoaded', () => {
  console.log("Website Loaded");
  AOS.init({ duration: 1200, once: true });

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });

  document.querySelectorAll("video").forEach(v => {
    v.addEventListener("contextmenu", e => e.preventDefault());
  });
  
  document.addEventListener('DOMContentLoaded', () => {

    console.log("Website Loaded");
    AOS.init({ duration: 1200, once: true });

    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
      });
    });

    // ============================
    // LIGHTBOX FIXED VERSION
    // ============================

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const closeBtn = document.querySelector(".close-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    // Open Lightbox
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
      });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Next Image
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
      }
      lightboxImg.src = galleryImages[currentIndex].src;
    });

    // Previous Image
    prevBtn.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
      }
      lightboxImg.src = galleryImages[currentIndex].src;
    });

    // Close when clicking outside image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });

  });

  
  function openFullscreen(video) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }



});
let videos = [
  { type: "youtube", src: "https://www.youtube.com/embed/rbdYBimredU" },
  { type: "youtube", src: "https://www.youtube.com/embed/dL7upUW4mUQ" },
  { type: "local", src: "video/video2.mp4" },
  { type: "local", src: "video/video3.mp4" }
];

let currentVideo = 0;

function openVideo(index) {
  currentVideo = index;
  document.getElementById("videoModal").style.display = "block";
  loadVideo();
}

function closeVideo() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("modalIframe").src = "";
  document.getElementById("modalVideo").pause();
}

function changeVideo(direction) {
  currentVideo += direction;

  if (currentVideo < 0) currentVideo = videos.length - 1;
  if (currentVideo >= videos.length) currentVideo = 0;

  loadVideo();
}

function loadVideo() {
  let iframe = document.getElementById("modalIframe");
  let video = document.getElementById("modalVideo");

  iframe.style.display = "none";
  video.style.display = "none";

  if (videos[currentVideo].type === "youtube") {
    iframe.src = videos[currentVideo].src + "?autoplay=1";
    iframe.style.display = "block";
  } else {
    video.src = videos[currentVideo].src;
    video.style.display = "block";
    video.play();
  }
}


