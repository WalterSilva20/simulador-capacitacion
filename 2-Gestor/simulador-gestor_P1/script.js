// Form data object
const formData = {
  apellido: "",
  nombre: "",
  tipoDocumento: "DNI",
  numeroDocumento: "",
  fechaNacimiento: "",
  sexo: "",
  prefijoTelefono: "",
  numeroTelefono: "",
  prefijoAdicional: "",
  numeroAdicional: "",
  email: "",
  empresaOrigen: "",
  cuentaAfiliar: "",
  mercadoOrigen: "",
}

// Required fields for validation
const requiredFields = [
  "apellido",
  "nombre",
  "numeroDocumento",
  "fechaNacimiento",
  "sexo",
  "prefijoTelefono",
  "numeroTelefono",
  "email",
  "empresaOrigen",
  "cuentaAfiliar",
  "mercadoOrigen",
]

// Error messages
const errorMessages = {
  apellido: "El apellido del contacto es requerido",
  nombre: "El nombre del contacto es requerido",
  numeroDocumento: "El número de documento es requerido",
  fechaNacimiento: "La fecha de nacimiento no es correcta",
  prefijoTelefono: "El código de área del Nom a portar es requerido",
  numeroTelefono: "El número del Nom a portar es requerido",
  email: "El email es requerido",
  cuentaAfiliar: "La cuenta a afiliar es requerida",
}

// Initialize the application
function init() {
  updateDateTime()
  setInterval(updateDateTime, 1000)
  setupEventListeners()
  validateForm()
}

// Update current date and time
function updateDateTime() {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, "0")
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const year = now.getFullYear()
  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  const seconds = String(now.getSeconds()).padStart(2, "0")

  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  document.getElementById("current-datetime").textContent = formattedDateTime
}

// Setup event listeners for form fields
function setupEventListeners() {
  // Add event listeners for all form fields
  Object.keys(formData).forEach((field) => {
    const element = document.getElementById(field)
    if (element) {
      element.addEventListener("input", (e) => {
        updateFormData(field, e.target.value)
      })
      element.addEventListener("change", (e) => {
        updateFormData(field, e.target.value)
      })
    }
  })

  // Button event listeners
  document.getElementById("continuar-btn").addEventListener("click", handleContinuar)
  document.getElementById("desestimar-btn").addEventListener("click", handleDesestimar)
}

// Update form data and validate
function updateFormData(field, value) {
  formData[field] = value
  validateField(field)
  validateForm()
}

// Validate individual field
function validateField(field) {
  const value = formData[field]
  const errorElement = document.getElementById(`error-${field}`)

  if (errorElement) {
    if (requiredFields.includes(field) && value.trim() === "") {
      errorElement.classList.add("show")
    } else {
      errorElement.classList.remove("show")
    }
  }
}

// Validate entire form
function validateForm() {
  const isValid = requiredFields.every((field) => formData[field].trim() !== "")
  const continueBtn = document.getElementById("continuar-btn")

  continueBtn.disabled = !isValid

  // Update button appearance
  if (isValid) {
    continueBtn.style.backgroundColor = "#dc2626"
    continueBtn.style.color = "white"
    continueBtn.style.borderColor = "#dc2626"
  } else {
    continueBtn.style.backgroundColor = "#d1d5db"
    continueBtn.style.color = "#6b7280"
    continueBtn.style.borderColor = "#d1d5db"
  }
}

// Handle continue button click
function handleContinuar() {
  if (requiredFields.every((field) => formData[field].trim() !== "")) {
    alert("Formulario completado correctamente. Continuando al siguiente paso...")
    console.log("Form data:", formData)
    // Here you would typically navigate to the next step or submit the form
  }
}

// Handle dismiss button click
function handleDesestimar() {
  if (confirm("¿Está seguro que desea desestimar este trámite?")) {
    // Reset form
    Object.keys(formData).forEach((field) => {
      formData[field] = field === "tipoDocumento" ? "DNI" : ""
      const element = document.getElementById(field)
      if (element) {
        element.value = formData[field]
      }
    })

    // Hide all error messages
    document.querySelectorAll(".error-message").forEach((error) => {
      error.classList.remove("show")
    })

    validateForm()
    alert("Trámite desestimado. Formulario reiniciado.")
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init)

// Export functions for external use (optional)
window.SimuladorGestor = {
  getFormData: () => formData,
  validateForm: validateForm,
  resetForm: handleDesestimar,
}
