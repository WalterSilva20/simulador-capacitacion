// STEALTH Interface JavaScript
class StealthInterface {
  constructor() {
    this.activeMenu = null
    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    // Menu button clicks
    const menuButtons = document.querySelectorAll(".menu-button")
    menuButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation()
        const menuItem = button.closest(".menu-item")
        const menuName = menuItem.dataset.menu
        this.toggleMenu(menuName, menuItem)
      })
    })

    // Dropdown item clicks
    const dropdownItems = document.querySelectorAll(".dropdown-item")
    dropdownItems.forEach((item) => {
      if (!item.classList.contains("has-submenu")) {
        item.addEventListener("click", (e) => {
          console.log("Clicked:", e.target.textContent.trim())
          this.closeAllMenus()
        })
      }
    })

    // Submenu items clicks
    const submenuItems = document.querySelectorAll(".submenu .dropdown-item")
    submenuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation()
        console.log("Submenu clicked:", e.target.textContent.trim())
        this.closeAllMenus()
      })
    })

    // Exit button
    const exitButton = document.querySelector(".exit-button")
    exitButton.addEventListener("click", () => {
      if (confirm("¿Está seguro que desea salir?")) {
        console.log("Saliendo de la aplicación...")
        // Here you would implement the exit logic
      }
    })

    // Help section
    const helpSection = document.querySelector(".help-section")
    helpSection.addEventListener("click", () => {
      alert("Sistema de ayuda - Contacte al administrador para más información.")
    })

    // Overlay click to close menus
    const overlay = document.getElementById("overlay")
    overlay.addEventListener("click", () => {
      this.closeAllMenus()
    })

    // Close menus when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".menu-item")) {
        this.closeAllMenus()
      }
    })

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeAllMenus()
      }
    })
  }

  toggleMenu(menuName, menuElement) {
    if (this.activeMenu === menuName) {
      this.closeAllMenus()
    } else {
      this.closeAllMenus()
      this.openMenu(menuName, menuElement)
    }
  }

  openMenu(menuName, menuElement) {
    this.activeMenu = menuName
    menuElement.classList.add("active")

    // Show overlay
    const overlay = document.getElementById("overlay")
    overlay.classList.add("active")
  }

  closeAllMenus() {
    this.activeMenu = null

    // Remove active class from all menu items
    const menuItems = document.querySelectorAll(".menu-item")
    menuItems.forEach((item) => {
      item.classList.remove("active")
    })

    // Hide overlay
    const overlay = document.getElementById("overlay")
    overlay.classList.remove("active")
  }

  // Utility method to simulate menu actions
  executeMenuAction(action) {
    console.log(`Ejecutando acción: ${action}`)

    // Here you would implement the actual functionality
    switch (action) {
      case "nuevo-usuario":
        this.showNewUserDialog()
        break
      case "consulta":
        this.showConsultaDialog()
        break
      case "proceso":
        this.showProcesoDialog()
        break
      default:
        console.log(`Acción no implementada: ${action}`)
    }
  }

  showNewUserDialog() {
    alert("Funcionalidad de Nuevo Usuario - Por implementar")
  }

  showConsultaDialog() {
    alert("Funcionalidad de Consultas - Por implementar")
  }

  showProcesoDialog() {
    alert("Funcionalidad de Procesos - Por implementar")
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new StealthInterface()
  console.log("STEALTH Interface initialized")
})

// Additional utility functions
function showNotification(message, type = "info") {
  // Simple notification system
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Style the notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "12px 20px",
    backgroundColor: type === "error" ? "#dc2626" : "#059669",
    color: "white",
    borderRadius: "4px",
    zIndex: "9999",
    fontSize: "14px",
  })

  document.body.appendChild(notification)

  // Remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification)
    }
  }, 3000)
}

// Export for potential module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = StealthInterface
}
