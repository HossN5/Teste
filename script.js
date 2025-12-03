// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href.startsWith("#") && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animate on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".skill-card, .project-card, .contact-card").forEach((el) => {
  el.style.opacity = "0"
  observer.observe(el)
})

function openDashboardModal(event) {
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }
  const modal = document.getElementById("dashboardModal")
  if (modal) {
    modal.classList.add("show")
    document.body.style.overflow = "hidden"
  }
}

function closeDashboardModal() {
  const modal = document.getElementById("dashboardModal")
  if (modal) {
    modal.classList.remove("show")
    document.body.style.overflow = "auto"
  }
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("dashboardModal")
  if (modal && event.target === modal) {
    closeDashboardModal()
  }
})

// Close modal with escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDashboardModal()
  }
})

// Navbar scroll effect
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(255, 107, 53, 0.1)"
  } else {
    navbar.style.boxShadow = "none"
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})

// Add active class to nav links on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")
  const scrollY = window.pageYOffset || document.documentElement.scrollTop

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").includes(current)) {
      link.style.color = "var(--accent)"
    } else {
      link.style.color = "var(--text-secondary)"
    }
  })
})

// Parallax effect on hero
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero")
  if (hero) {
    const scrollPosition = window.pageYOffset
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
  }
})
