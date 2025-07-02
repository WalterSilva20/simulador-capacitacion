// Form data object
const formData = {
  // Información general
  tipoDocumento: "DNI",
  numeroDocumento: "",
  fechaNacimiento: "",
  sexo: "",
  nombrePortar: "",
  telefonoAdicional: "",
  email: "digital@claro.com",
  empresaOrigen: "",
  cuentaAfiliar: "",
  mercadoOrigen: "",
  numeroPIN: "",
  fechaExpiracionPIN: "",

  // Gestión de plan
  mercadoDestino: "",
  campana: "",
  promocion: "",
  abonoElegido: "",
  tipoGestionMultiple: false,

  // Domicilio
  calle: "",
  numero: "",
  piso: "",
  depto: "",
  pais: "",
  provincia: "",
  localidad: "",
  codigoPostal: "",
  observaciones: "",
  franjaHoraria: "",
  observacionesGenerales: "",
  origen: "Porta Out",

  // Envío de mensaje
  prefijoMensaje: "+54 9",
  numeroMensaje: "",
}

// Required fields for validation (updated list)
const requiredFields = [
  "mercadoDestino",
  "campana",
  "promocion",
  "abonoElegido",
  "calle",
  "numero",
  "pais",
  "provincia",
  "localidad",
  "codigoPostal",
  "observaciones",
  "franjaHoraria",
]

// Multiple lines array
let lineasMultiples = []
let lineaCounter = 0

// Initialize the application
function init() {
  updateDateTime()
  setInterval(updateDateTime, 60000) // Update every minute
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

  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes} - Nuevo Usuario`
  document.getElementById("current-datetime").textContent = formattedDateTime
  document.getElementById("status-datetime").textContent = `${day}/${month}/${year} ${hours}:${minutes}`
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

  // Special handling for checkbox
  const multipleCheckbox = document.getElementById("tipoGestionMultiple")
  if (multipleCheckbox) {
    multipleCheckbox.addEventListener("change", (e) => {
      updateFormData("tipoGestionMultiple", e.target.checked)
      if (e.target.checked) {
        openMultipleModal()
      }
    })
  }

  // Character counter for observations
  const observacionesField = document.getElementById("observaciones")
  if (observacionesField) {
    observacionesField.addEventListener("input", (e) => {
      const charCount = e.target.value.length
      const counter = document.querySelector(".char-counter")
      if (counter) {
        counter.textContent = `${charCount} / 50`
      }
    })
  }

  // Button event listeners
  document.getElementById("btn-guardar").addEventListener("click", handleGuardar)

  // Modal event listeners
  setupModalEventListeners()
}

// Setup modal event listeners
function setupModalEventListeners() {
  const modal = document.getElementById("modal-multiple")
  const closeBtn = document.querySelector(".modal-close")
  const cancelBtn = document.getElementById("btn-cancelar-modal")
  const saveBtn = document.getElementById("btn-guardar-modal")
  const addLineBtn = document.getElementById("btn-agregar-linea")

  closeBtn.addEventListener("click", closeMultipleModal)
  cancelBtn.addEventListener("click", closeMultipleModal)
  saveBtn.addEventListener("click", saveMultipleLines)
  addLineBtn.addEventListener("click", agregarLineaMultiple)

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeMultipleModal()
    }
  })
}

// Update form data and validate
function updateFormData(field, value) {
  formData[field] = value
  validateForm()
}

// Validate entire form
function validateForm() {
  const isValid = requiredFields.every((field) => {
    const value = formData[field]
    return value && value.toString().trim() !== ""
  })

  const guardarBtn = document.getElementById("btn-guardar")
  guardarBtn.disabled = !isValid

  // Update button appearance
  if (isValid) {
    guardarBtn.style.backgroundColor = "#dc2626"
    guardarBtn.style.color = "white"
    guardarBtn.style.borderColor = "#dc2626"
  } else {
    guardarBtn.style.backgroundColor = "#d1d5db"
    guardarBtn.style.color = "#6b7280"
    guardarBtn.style.borderColor = "#d1d5db"
  }
}

// Handle save button click
function handleGuardar() {
  if (requiredFields.every((field) => formData[field] && formData[field].toString().trim() !== "")) {
    const dataToSave = {
      ...formData,
      lineasMultiples: lineasMultiples,
    }

    console.log("Datos guardados:", dataToSave)
    alert("Formulario guardado correctamente!")

    // Here you would typically send the data to a server
    // Example: sendDataToServer(dataToSave)
  }
}

// Multiple lines modal functions
function openMultipleModal() {
  document.getElementById("modal-multiple").style.display = "block"
}

function closeMultipleModal() {
  document.getElementById("modal-multiple").style.display = "none"
  // Reset checkbox if no lines were added
  if (lineasMultiples.length === 0) {
    document.getElementById("tipoGestionMultiple").checked = false
    formData.tipoGestionMultiple = false
  }
}

function agregarLineaMultiple() {
  lineaCounter++
  const nuevaLinea = {
    id: `linea-${lineaCounter}`,
    prefijoTelefono: "",
    numeroTelefono: "",
    companiaActual: "",
    mercadoActual: "",
    mercadoDestino: "",
    campana: "",
    promocion: "",
    abonoElegido: "",
  }

  lineasMultiples.push(nuevaLinea)
  renderLineasMultiples()
}

function eliminarLineaMultiple(id) {
  lineasMultiples = lineasMultiples.filter((linea) => linea.id !== id)
  renderLineasMultiples()
}

function actualizarLineaMultiple(id, field, value) {
  const linea = lineasMultiples.find((l) => l.id === id)
  if (linea) {
    linea[field] = value
  }
}

function renderLineasMultiples() {
  const container = document.getElementById("lineas-container")
  container.innerHTML = ""

  lineasMultiples.forEach((linea, index) => {
    const lineaElement = document.createElement("div")
    lineaElement.className = "linea-item"
    lineaElement.innerHTML = `
      <div class="linea-header">
        <h5>Línea ${index + 1}</h5>
        <button class="btn-eliminar" onclick="eliminarLineaMultiple('${linea.id}')">Eliminar</button>
      </div>
      <div class="linea-fields">
        <div class="form-group">
          <label>Núm a portar</label>
          <div class="phone-inputs">
            <input type="text" placeholder="Prefijo" value="${linea.prefijoTelefono}" 
                   onchange="actualizarLineaMultiple('${linea.id}', 'prefijoTelefono', this.value)">
            <input type="text" placeholder="Número" value="${linea.numeroTelefono}"
                   onchange="actualizarLineaMultiple('${linea.id}', 'numeroTelefono', this.value)">
          </div>
        </div>
        <div class="form-group">
          <label>Compañía Actual</label>
          <select onchange="actualizarLineaMultiple('${linea.id}', 'companiaActual', this.value)">
            <option value="">Seleccionar</option>
            <option value="Claro" ${linea.companiaActual === "Claro" ? "selected" : ""}>Claro</option>
            <option value="Movistar" ${linea.companiaActual === "Movistar" ? "selected" : ""}>Movistar</option>
            <option value="Personal" ${linea.companiaActual === "Personal" ? "selected" : ""}>Personal</option>
            <option value="Tuenti" ${linea.companiaActual === "Tuenti" ? "selected" : ""}>Tuenti</option>
          </select>
        </div>
        <div class="form-group">
          <label>Mercado Actual</label>
          <select onchange="actualizarLineaMultiple('${linea.id}', 'mercadoActual', this.value)">
            <option value="">Seleccionar</option>
            <option value="Postpago" ${linea.mercadoActual === "Postpago" ? "selected" : ""}>Postpago</option>
            <option value="Prepago" ${linea.mercadoActual === "Prepago" ? "selected" : ""}>Prepago</option>
          </select>
        </div>
        <div class="form-group">
          <label>Mercado Destino</label>
          <select onchange="actualizarLineaMultiple('${linea.id}', 'mercadoDestino', this.value)">
            <option value="">Seleccionar</option>
            <option value="Postpago" ${linea.mercadoDestino === "Postpago" ? "selected" : ""}>Postpago</option>
            <option value="Prepago" ${linea.mercadoDestino === "Prepago" ? "selected" : ""}>Prepago</option>
          </select>
        </div>
        <div class="form-group">
          <label>Campaña</label>
          <select onchange="actualizarLineaMultiple('${linea.id}', 'campana', this.value)">
            <option value="">Seleccionar</option>
            <option value="TLMPC1" ${linea.campana === "TLMPC1" ? "selected" : ""}>TLMPC1</option>
            <option value="TLMPC2" ${linea.campana === "TLMPC2" ? "selected" : ""}>TLMPC2</option>
          </select>
        </div>
        <div class="form-group">
          <label>Promoción</label>
          <select onchange="actualizarLineaMultiple('${linea.id}', 'promocion', this.value)">
            <option value="">Seleccionar</option>
            <option value="3055" ${linea.promocion === "3055" ? "selected" : ""}>3055</option>
            <option value="4001" ${linea.promocion === "4001" ? "selected" : ""}>4001</option>
          </select>
        </div>
        <div class="form-group">
          <label>Abono Elegido</label>
          <select onchange="actualizarLineaMultiple('${linea.id}', 'abonoElegido', this.value)">
            <option value="">Seleccionar</option>
            <option value="A061C" ${linea.abonoElegido === "A061C" ? "selected" : ""}>A061C</option>
            <option value="A062C" ${linea.abonoElegido === "A062C" ? "selected" : ""}>A062C</option>
            <option value="A063C" ${linea.abonoElegido === "A063C" ? "selected" : ""}>A063C</option>
            <option value="A064C" ${linea.abonoElegido === "A064C" ? "selected" : ""}>A064C</option>
            <option value="A065C" ${linea.abonoElegido === "A065C" ? "selected" : ""}>A065C</option>
            <option value="A066C" ${linea.abonoElegido === "A066C" ? "selected" : ""}>A066C</option>
          </select>
        </div>
      </div>
    `
    container.appendChild(lineaElement)
  })
}

function saveMultipleLines() {
  closeMultipleModal()
  console.log("Líneas múltiples guardadas:", lineasMultiples)
}

// Utility functions
function resetForm() {
  Object.keys(formData).forEach((field) => {
    if (field === "tipoDocumento") {
      formData[field] = "DNI"
    } else if (field === "email") {
      formData[field] = "digital@claro.com"
    } else if (field === "origen") {
      formData[field] = "Porta Out"
    } else if (field === "prefijoMensaje") {
      formData[field] = "+54 9"
    } else {
      formData[field] = ""
    }

    const element = document.getElementById(field)
    if (element) {
      if (element.type === "checkbox") {
        element.checked = formData[field]
      } else {
        element.value = formData[field]
      }
    }
  })

  // Reset multiple lines
  lineasMultiples = []
  lineaCounter = 0
  renderLineasMultiples()

  // Reset character counter
  const counter = document.querySelector(".char-counter")
  if (counter) {
    counter.textContent = "0 / 50"
  }

  validateForm()
  alert("Formulario reiniciado.")
}

// Export functions for external use (optional)
window.SimuladorGestor = {
  getFormData: () => ({ ...formData, lineasMultiples }),
  validateForm: validateForm,
  resetForm: resetForm,
  getLineasMultiples: () => lineasMultiples,
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init)


