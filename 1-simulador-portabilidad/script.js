// Simulador de Portabilidad - JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")
  const buttons = document.querySelectorAll(".btn")

  // Función para cambiar tabs
  function switchTab(targetTab) {
    // Remover clase active de todos los triggers y contenidos
    tabTriggers.forEach((trigger) => trigger.classList.remove("active"))
    tabContents.forEach((content) => content.classList.remove("active"))

    // Agregar clase active al trigger y contenido seleccionado
    const activeTrigger = document.querySelector(`[data-tab="${targetTab}"]`)
    const activeContent = document.getElementById(targetTab)

    if (activeTrigger && activeContent) {
      activeTrigger.classList.add("active")
      activeContent.classList.add("active")
    }
  }

  // Event listeners para los tabs
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")
      switchTab(targetTab)

      // Agregar efecto de animación
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 100)
    })
  })

  // Event listeners para los botones principales
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Efecto visual del botón
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 100)

      // Determinar qué botón fue presionado
      const buttonText = this.textContent.trim()

      if (buttonText.includes("Iniciar Nueva Simulación")) {
        handleGestorSimulation()
      } else if (buttonText.includes("Activar Modo Stealth")) {
        handleStealthMode()
      }
    })
  })

  // Función para manejar simulación en modo Gestor
  function handleGestorSimulation() {
    // Mostrar mensaje de confirmación
    showNotification("Iniciando nueva simulación en Modo Gestor...", "success")

    // Simular proceso de carga
    setTimeout(() => {
      showNotification("Simulación iniciada correctamente", "success")
    }, 1500)
  }

  // Función para manejar modo Stealth
  function handleStealthMode() {
    // Mostrar mensaje de confirmación
    showNotification("Activando Modo Stealth...", "info")

    // Simular activación
    setTimeout(() => {
      showNotification("Modo Stealth activado - Conexión segura establecida", "success")
    }, 2000)
  }

  // Función para mostrar notificaciones
  function showNotification(message, type = "info") {
    // Crear elemento de notificación
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.textContent = message

    // Estilos de la notificación
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            color: white;
            font-weight: 500;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        `

    // Colores según el tipo
    switch (type) {
      case "success":
        notification.style.background = "#16a34a"
        break
      case "info":
        notification.style.background = "#2563eb"
        break
      case "warning":
        notification.style.background = "#d97706"
        break
      case "error":
        notification.style.background = "#dc2626"
        break
      default:
        notification.style.background = "#64748b"
    }

    // Agregar al DOM
    document.body.appendChild(notification)

    // Animar entrada
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Remover después de 3 segundos
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }

  // Función para manejar responsive
  function handleResize() {
    const isMobile = window.innerWidth < 768

    if (isMobile) {
      // Ajustes para móvil
      document.body.classList.add("mobile")
    } else {
      document.body.classList.remove("mobile")
    }
  }

  // Event listener para resize
  window.addEventListener("resize", handleResize)
  handleResize() // Ejecutar al cargar

  // Animaciones de entrada
  function animateOnLoad() {
    const cards = document.querySelectorAll(".main-card, .stealth-card, .features-card, .security-card")

    cards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"

      setTimeout(() => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, index * 100)
    })
  }

  // Ejecutar animaciones al cargar
  animateOnLoad()

  // Mensaje de bienvenida
  setTimeout(() => {
    showNotification("¡Bienvenido al Simulador de Portabilidad!", "info")
  }, 500)
})
