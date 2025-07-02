// State management
const sectionStates = {
  ordenTrabajo: true,
  informacionPersonal: false,
  gestionPlan: false,
  domicilio: false,
  observaciones: false,
}

// Toggle section function
function toggleSection(sectionName) {
  const content = document.getElementById(`content-${sectionName}`)
  const chevron = document.getElementById(`chevron-${sectionName}`)

  if (!content || !chevron) return

  // Toggle state
  sectionStates[sectionName] = !sectionStates[sectionName]

  if (sectionStates[sectionName]) {
    // Show section
    content.classList.remove("collapsed")
    chevron.classList.remove("collapsed")
  } else {
    // Hide section
    content.classList.add("collapsed")
    chevron.classList.add("collapsed")
  }
}

// Update character count for observations
function updateCharCount() {
  const textarea = document.getElementById("observaciones")
  const counter = document.getElementById("char-count")

  if (textarea && counter) {
    const currentLength = textarea.value.length
    counter.textContent = currentLength

    // Prevent typing if limit reached
    if (currentLength >= 30) {
      textarea.value = textarea.value.substring(0, 30)
      counter.textContent = "30"
    }
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Set initial section states
  Object.keys(sectionStates).forEach((sectionName) => {
    const content = document.getElementById(`content-${sectionName}`)
    const chevron = document.getElementById(`chevron-${sectionName}`)

    if (content && chevron) {
      if (sectionStates[sectionName]) {
        content.classList.remove("collapsed")
        chevron.classList.remove("collapsed")
      } else {
        content.classList.add("collapsed")
        chevron.classList.add("collapsed")
      }
    }
  })

  // Add event listeners for form validation
  const requiredFields = document.querySelectorAll(".form-input.required")
  requiredFields.forEach((field) => {
    field.addEventListener("blur", function () {
      if (this.value.trim() === "") {
        this.classList.add("required")
      } else {
        this.classList.remove("required")
      }
    })
  })

  // Add event listener for observations textarea
  const observacionesTextarea = document.getElementById("observaciones")
  if (observacionesTextarea) {
    observacionesTextarea.addEventListener("input", updateCharCount)
  }

  // Add event listeners for exit buttons
  const exitButtons = document.querySelectorAll(".btn-salir")
  exitButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (confirm("¿Está seguro que desea salir?")) {
        // Handle exit logic here
        console.log("Saliendo de la aplicación...")
      }
    })
  })
})

// Form data collection function
function collectFormData() {
  const formData = {
    ordenTrabajo: {
      numeroOrden: document.getElementById("numeroOrden")?.value || "",
    },
    informacionPersonal: {
      apellido: document.getElementById("apellido")?.value || "",
      nombre: document.getElementById("nombre")?.value || "",
      fechaNacimiento: document.getElementById("fechaNacimiento")?.value || "",
      tipoDocumento: document.getElementById("tipoDocumento")?.value || "",
      nroDocumento: document.getElementById("nroDocumento")?.value || "",
      email: document.getElementById("email")?.value || "",
      prefijo1: document.getElementById("prefijo1")?.value || "",
      telefono1: document.getElementById("telefono1")?.value || "",
      prefijo2: document.getElementById("prefijo2")?.value || "",
      telefono2: document.getElementById("telefono2")?.value || "",
    },
    gestionPlan: {
      planSeleccionado: document.getElementById("planSeleccion")?.value || "",
    },
    domicilio: {
      calle: document.getElementById("calle")?.value || "",
      nro: document.getElementById("nro")?.value || "",
      piso: document.getElementById("piso")?.value || "",
      departamento: document.getElementById("departamento")?.value || "",
      pais: document.getElementById("pais")?.value || "",
      provincia: document.getElementById("provincia")?.value || "",
      localidad: document.getElementById("localidad")?.value || "",
      codigoPostal: document.getElementById("codigoPostal")?.value || "",
      franjaHoraria: document.getElementById("franjaHoraria")?.value || "",
    },
    observaciones: {
      texto: document.getElementById("observaciones")?.value || "",
    },
  }

  return formData
}

// Form validation function
function validateForm() {
  const errors = []

  // Validate required fields
  const numeroOrden = document.getElementById("numeroOrden")
  if (!numeroOrden.value.trim()) {
    errors.push("El número de orden es requerido")
    numeroOrden.classList.add("required")
  }

  // Add more validation rules as needed
  const email = document.getElementById("email")
  if (email.value && !isValidEmail(email.value)) {
    errors.push("El formato del email no es válido")
  }

  return errors
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Save form data to localStorage
function saveFormData() {
  const formData = collectFormData()
  localStorage.setItem("baf-form-data", JSON.stringify(formData))
  console.log("Datos guardados:", formData)

  // Limpiar el formulario después de guardar
  resetFormFields()
}


// Load form data from localStorage
function loadFormData() {
  const savedData = localStorage.getItem("baf-form-data")
  if (savedData) {
    const formData = JSON.parse(savedData)

    // Populate form fields
    Object.keys(formData).forEach((section) => {
      Object.keys(formData[section]).forEach((field) => {
        const element = document.getElementById(field === "texto" ? "observaciones" : field)
        if (element && formData[section][field]) {
          element.value = formData[section][field]
        }
      })
    })

    // Update character count if observations were loaded
    updateCharCount()
  }
}

// Auto-save functionality
setInterval(saveFormData, 30000) // Auto-save every 30 seconds

// Load saved data on page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(loadFormData, 100) // Small delay to ensure DOM is ready
})


function resetFormFields() {
  const inputs = document.querySelectorAll("input, select, textarea")
  inputs.forEach((input) => {
    if (input.type === "checkbox" || input.type === "radio") {
      input.checked = false
    } else {
      input.value = ""
    }
  })

  // También podés resetear el contador de caracteres
  updateCharCount()
}

