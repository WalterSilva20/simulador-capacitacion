// Estado del formulario
const formData = {
  campana: "2",
  nombreEmpresa: "",
  megaregion: "ARGENTINA",
  negocio: "CO",
  regularPA: "",
  nroPedido: "",
  preactivacion: false,
  cambioTitularidad: false,
  nimAnterior: "",
  nroSerie: "",
  entidad: "000000",
  nombreEntidad: "",
  vendedor: "",
  capacitacion: "",
  pos: "",
  equipoPropio: false,
  porPDA: false,
  migracionPPaReg: false,
  fwa: false,
  tipoPortacion: "S",
  negocioActual: "POSPAGO",
  formulario: "",
  nroSPN: "",
  spnManual: false,
  sdsManual: false,
  formularioSDS: "",
  nroSDS: "",
  excepcion: false,
  portacion: false,
  dni: "",
  nombreCompleto: "",
  telefono: "",
  email: "",
  direccion: "",
  localidad: "",
  codigoPostal: "",
  provincia: "",
}

// Datos para auto-completado
const autoFillData = {
  nombreEmpresa: "NOMBRE DE LA EMPRESA",
  nombreEntidad: "NOMBRE DE LA ENTIDAD",
  vendedor: "001",
  capacitacion: "CAPACITACION",
  pos: "12345",
  nimAnterior: "987654321",
  nroSerie: "SER123456",
  formulario: "FORM001",
  nroSPN: "SPN789",
  formularioSDS: "SDS001",
  nroSDS: "123456",
  dni: "12345678",
  nombreCompleto: "JUAN CARLOS PEREZ",
  telefono: "011-4567-8900",
  email: "juan.perez@email.com",
  direccion: "AV. CORRIENTES 1234",
  localidad: "CAPITAL FEDERAL",
  codigoPostal: "1043",
  provincia: "BUENOS AIRES",
}

// Pestaña activa
let activeTab = "compania"

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initializeTabs()
  initializeFormElements()
  setupEventListeners()
})

// Inicializar pestañas
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab[data-tab]")
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")
      switchTab(tabName)
    })
  })
}

// Cambiar pestaña
function switchTab(tabName) {
  // Remover clase active de todas las pestañas
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active")
  })

  // Ocultar todo el contenido
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active")
  })

  // Activar pestaña seleccionada
  const selectedTab = document.querySelector(`[data-tab="${tabName}"]`)
  if (selectedTab) {
    selectedTab.classList.add("active")
  }

  // Mostrar contenido correspondiente
  const selectedContent = document.getElementById(`tab-${tabName}`)
  if (selectedContent) {
    selectedContent.classList.add("active")
  }

  activeTab = tabName
}

// Inicializar elementos del formulario
function initializeFormElements() {
  // Llenar campos con valores iniciales
  Object.keys(formData).forEach((key) => {
    const element = document.getElementById(key)
    if (element) {
      if (element.type === "checkbox") {
        element.checked = formData[key]
      } else {
        element.value = formData[key]
      }
    }
  })

  // Sincronizar campos readonly
  syncReadonlyFields()
}

// Configurar event listeners
function setupEventListeners() {
  // Event listeners para todos los inputs
  Object.keys(formData).forEach((key) => {
    const element = document.getElementById(key)
    if (element) {
      if (element.type === "checkbox") {
        element.addEventListener("change", function () {
          formData[key] = this.checked
        })
      } else {
        element.addEventListener("input", function () {
          formData[key] = this.value
          syncReadonlyFields()
        })

        // Auto-completado al presionar Tab
        element.addEventListener("keydown", (e) => {
          if (e.key === "Tab") {
            handleTabKey(e, key)
          }
        })
      }
    }
  })
}

// Manejar tecla Tab
function handleTabKey(e, fieldName) {
  // Auto-completar si hay datos disponibles
  if (autoFillData[fieldName]) {
    setTimeout(() => {
      const element = document.getElementById(fieldName)
      if (element && element.classList.contains("input-auto")) {
        element.value = autoFillData[fieldName]
        formData[fieldName] = autoFillData[fieldName]
        syncReadonlyFields()
      }
    }, 50)
  }

  // Cambiar a pestaña Cliente al tabular desde nroSDS
  if (fieldName === "nroSDS") {
    e.preventDefault()
    switchTab("cliente")
    // Enfocar primer campo de la pestaña cliente
    setTimeout(() => {
      const dniField = document.getElementById("dni")
      if (dniField) {
        dniField.focus()
      }
    }, 100)
  }
}

// Sincronizar campos readonly
function syncReadonlyFields() {
  const nimAnteriorReadonly = document.getElementById("nimAnteriorReadonly")
  const nroSerieReadonly = document.getElementById("nroSerieReadonly")

  if (nimAnteriorReadonly) {
    nimAnteriorReadonly.value = formData.nimAnterior
  }

  if (nroSerieReadonly) {
    nroSerieReadonly.value = formData.nroSerie
  }
}

// Función para exportar datos (opcional)
function exportFormData() {
  return JSON.stringify(formData, null, 2)
}

// Función para importar datos (opcional)
function importFormData(jsonData) {
  try {
    const importedData = JSON.parse(jsonData)
    Object.assign(formData, importedData)
    initializeFormElements()
  } catch (error) {
    console.error("Error importing data:", error)
  }
}

// Validar campos obligatorios
function validateRequiredFields() {
  const requiredFields = ["campana", "megaregion", "negocio", "entidad", "tipoPortacion", "negocioActual"]
  const clientRequiredFields = ["dni", "nombreCompleto"]

  let isValid = true
  const errors = []

  // Validar campos de compañía
  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].trim() === "") {
      isValid = false
      errors.push(`El campo ${field} es obligatorio`)
    }
  })

  // Validar campos de cliente si está en esa pestaña
  if (activeTab === "cliente") {
    clientRequiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        isValid = false
        errors.push(`El campo ${field} es obligatorio`)
      }
    })
  }

  return { isValid, errors }
}

// Función para guardar (placeholder)
function saveForm() {
  const validation = validateRequiredFields()

  if (validation.isValid) {
    console.log("Formulario guardado:", formData)
    alert("Formulario guardado exitosamente")
  } else {
    alert("Por favor complete los campos obligatorios:\n" + validation.errors.join("\n"))
  }
}

// Exponer funciones globalmente para uso externo
window.simuladorPortabilidad = {
  exportFormData,
  importFormData,
  saveForm,
  validateRequiredFields,
  switchTab,
  formData,
}
