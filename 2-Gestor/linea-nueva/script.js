// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Character counter for observaciones para el cartero
  const observacionesCartero = document.getElementById("observacionesCartero")
  if (observacionesCartero) {
    const counter = observacionesCartero.parentElement.querySelector(".char-counter")

    observacionesCartero.addEventListener("input", function () {
      const currentLength = this.value.length
      const maxLength = 30

      if (currentLength > maxLength) {
        this.value = this.value.substring(0, maxLength)
        counter.textContent = `${maxLength} / ${maxLength}`
      } else {
        counter.textContent = `${currentLength} / ${maxLength}`
      }
    })
  }

  // Toggle switches functionality
  const toggleInputs = document.querySelectorAll(".toggle-input")
  toggleInputs.forEach((toggle) => {
    toggle.addEventListener("change", function () {
      console.log(`${this.id} toggled:`, this.checked)
    })
  })

  // Form validation
  const requiredFields = document.querySelectorAll("input[required], select[required]")
  requiredFields.forEach((field) => {
    field.addEventListener("blur", function () {
      validateField(this)
    })
  })

  // Button event listeners
  const btnFrecuenciador = document.querySelector(".btn-frecuenciador")
  if (btnFrecuenciador) {
    btnFrecuenciador.addEventListener("click", () => {
      alert("Abriendo frecuenciador...")
    })
  }

  const btnHistorial = document.querySelector(".btn-historial")
  if (btnHistorial) {
    btnHistorial.addEventListener("click", () => {
      alert("Abriendo historial de observaciones...")
    })
  }

  const btnMicrophone = document.querySelector(".btn-microphone")
  if (btnMicrophone) {
    btnMicrophone.addEventListener("click", () => {
      alert("Iniciando verificación por voz...")
    })
  }

  const btnCancelar = document.querySelector(".btn-cancelar")
  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      if (confirm("¿Está seguro que desea cancelar? Se perderán los datos no guardados.")) {
        clearForm()
      }
    })
  }

  // Exit buttons
  const exitButtons = document.querySelectorAll(".btn-salir")
  exitButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (confirm("¿Está seguro que desea salir?")) {
        console.log("Saliendo de la aplicación...")
      }
    })
  })

  // Auto-save functionality
  setInterval(saveFormData, 30000) // Auto-save every 30 seconds

  // Load saved data
  setTimeout(loadFormData, 100)
})

// Form validation function
function validateField(field) {
  const value = field.value.trim()
  const isRequired = field.hasAttribute("required") || field.querySelector("span.required-asterisk")

  if (isRequired && !value) {
    field.style.borderColor = "#dc2626"
    showFieldError(field, "Este campo es requerido")
    return false
  } else {
    field.style.borderColor = "#d1d5db"
    hideFieldError(field)
    return true
  }
}

function showFieldError(field, message) {
  let errorDiv = field.parentElement.querySelector(".error-message")
  if (!errorDiv) {
    errorDiv = document.createElement("div")
    errorDiv.className = "error-message"
    field.parentElement.appendChild(errorDiv)
  }
  errorDiv.textContent = message
}

function hideFieldError(field) {
  const errorDiv = field.parentElement.querySelector(".error-message")
  if (errorDiv) {
    errorDiv.remove()
  }
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Form data collection
function collectFormData() {
  const formData = {
    informacionPersonal: {
      apellido: document.getElementById("apellido")?.value || "",
      nombre: document.getElementById("nombre")?.value || "",
      fechaNacimiento: document.getElementById("fechaNacimiento")?.value || "",
      sexo: document.getElementById("sexo")?.value || "",
      tipoDocumento: document.getElementById("tipoDocumento")?.value || "",
      nroDocumento: document.getElementById("nroDocumento")?.value || "",
      prefijoContacto: document.getElementById("prefijoContacto")?.value || "",
      telefonoContacto: document.getElementById("telefonoContacto")?.value || "",
      prefijoAdicional: document.getElementById("prefijoAdicional")?.value || "",
      telefonoAdicional: document.getElementById("telefonoAdicional")?.value || "",
      email: document.getElementById("email")?.value || "",
    },
    gestionPlan: {
      campana: document.getElementById("campana")?.value || "",
      promocion: document.getElementById("promocion")?.value || "",
      abonoElegido: document.getElementById("abonoElegido")?.value || "",
      multiple: document.getElementById("multiple")?.checked || false,
    },
    domicilioEnvio: {
      calle: document.getElementById("calle")?.value || "",
      numero: document.getElementById("numero")?.value || "",
      piso: document.getElementById("piso")?.value || "",
      depto: document.getElementById("depto")?.value || "",
      pais: document.getElementById("pais")?.value || "",
      provincia: document.getElementById("provincia")?.value || "",
      localidad: document.getElementById("localidad")?.value || "",
      cp: document.getElementById("cp")?.value || "",
      franjaHoraria: document.getElementById("franjaHoraria")?.value || "",
      observacionesCartero: document.getElementById("observacionesCartero")?.value || "",
      domicilioFacturacion: document.getElementById("domicilioFacturacion")?.checked || false,
    },
    caracteristicaPrefijo: {
      caracteristicaPrefijo: document.getElementById("caracteristicaPrefijo")?.value || "",
      bloque: document.getElementById("bloque")?.value || "",
      cpBloque: document.getElementById("cpBloque")?.value || "",
      producto: document.getElementById("producto")?.value || "",
    },
    formaPago: {
      metodoPago: document.getElementById("metodoPago")?.value || "",
    },
    cuentaAnadir: {
      cuenta: document.getElementById("cuentaAnadir")?.value || "",
    },
    observaciones: {
      observacionesGenerales: document.getElementById("observacionesGenerales")?.value || "",
    },
  }

  return formData
}

// Save form data to localStorage
function saveFormData() {
  const formData = collectFormData()
  localStorage.setItem("voz-out-form-data", JSON.stringify(formData))
  console.log("Datos guardados:", formData)
}

// Load form data from localStorage
function loadFormData() {
  const savedData = localStorage.getItem("voz-out-form-data")
  if (savedData) {
    const formData = JSON.parse(savedData)

    // Populate form fields
    Object.keys(formData).forEach((section) => {
      Object.keys(formData[section]).forEach((field) => {
        const element = document.getElementById(field)
        if (element) {
          if (element.type === "checkbox") {
            element.checked = formData[section][field]
          } else {
            element.value = formData[section][field]
          }
        }
      })
    })

    console.log("Datos cargados:", formData)
  }
}

// Clear form function
function clearForm() {
  const form = document.querySelector(".form-content")
  const inputs = form.querySelectorAll("input, select, textarea")

  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = false
    } else {
      input.value = ""
    }
  })

  // Clear localStorage
  localStorage.removeItem("voz-out-form-data")
  console.log("Formulario limpiado")
}

// Validate entire form
function validateForm() {
  const errors = []

  // Required fields validation
  const requiredFields = [
    { id: "apellido", name: "Apellido" },
    { id: "nombre", name: "Nombre" },
    { id: "fechaNacimiento", name: "Fecha de nacimiento" },
    { id: "tipoDocumento", name: "Tipo de documento" },
    { id: "nroDocumento", name: "Número de documento" },
    { id: "telefonoContacto", name: "Teléfono de contacto" },
    { id: "email", name: "Email" },
    { id: "campana", name: "Campaña" },
    { id: "promocion", name: "Promoción" },
    { id: "abonoElegido", name: "Abono elegido" },
    { id: "calle", name: "Calle" },
    { id: "numero", name: "Número" },
    { id: "pais", name: "País" },
    { id: "provincia", name: "Provincia" },
    { id: "localidad", name: "Localidad" },
    { id: "cp", name: "Código postal" },
    { id: "franjaHoraria", name: "Franja horaria" },
    { id: "bloque", name: "Bloque" },
    { id: "producto", name: "Producto" },
    { id: "metodoPago", name: "Método de pago" },
  ]

  requiredFields.forEach((field) => {
    const element = document.getElementById(field.id)
    if (element && !element.value.trim()) {
      errors.push(`${field.name} es requerido`)
    }
  })

  // Email validation
  const email = document.getElementById("email")
  if (email && email.value && !isValidEmail(email.value)) {
    errors.push("El formato del email no es válido")
  }

  return errors
}

// Submit form function
function submitForm() {
  const errors = validateForm()

  if (errors.length > 0) {
    alert("Por favor corrija los siguientes errores:\n" + errors.join("\n"))
    return false
  }

  const formData = collectFormData()
  console.log("Enviando formulario:", formData)

  // Here you would typically send the data to a server
  alert("Formulario enviado correctamente")
  return true
}
