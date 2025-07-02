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
  // Campos de Cliente
  tipoDocumento: "DNI",
  nroDocumento: "",
  apellidoCliente: "",
  nombreCliente: "",
  sexo: "",
  fechaNacimiento: "",
  condicionIVA: "",
  condicion1BB: "",
  nroInscripIIBB: "",
  proyectoSAP: "",
  clienteGobierno: false,
  crearCuentaNueva: false,
  buscaCuenta: "",
  cuenta: "",
  calificacion: "",
  rangoScoring: "",
  codArea: "",
  telTitular: "",
  emailCliente: "",
  otraLineaCelular: "",
  datosPersonales: "",
  tipoDocSolicitante: "",
  nroDocSolicitante: "",
  apellidoSolicitante: "",
  nombreSolicitante: "",
  sexoSolicitante: "",
  telSolicitante: "",
  tipoDocUsuario: "",
  nroDocUsuario: "",
  apellidoUsuario: "",
  nombreUsuario: "",
  telUsuario: "",
  cpa: "",
  calle: "",
  numero: "",
  piso: "",
  depto: "",
  casillaCorreo: "",
  aclaracionesCartero: "",
  localidadFacturar: "",
  barrio: "",
  departamento: "",
  provinciaFacturar: "",
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
}

// Pestaña activa
let activeTab = "compania"

// Modificar la inicialización para incluir los submenús de pestañas
document.addEventListener("DOMContentLoaded", () => {
  initializeTabs()
  initializeFormElements()
  setupEventListeners()
  setupDNIHandler()
  initializeMenus()
  initializeTabMenus() // Agregar esta línea
})

// Función para auto-completar datos del cliente basado en DNI
function autoCompleteClientData(dni) {
  const nombres = [
    "MARIA ELENA",
    "CARLOS ALBERTO",
    "ANA SOFIA",
    "JUAN CARLOS",
    "LUCIA FERNANDA",
    "DIEGO MARTIN",
    "PATRICIA BEATRIZ",
    "ROBERTO DANIEL",
  ]
  const apellidos = [
    "RODRIGUEZ",
    "GONZALEZ",
    "MARTINEZ",
    "LOPEZ",
    "GARCIA",
    "FERNANDEZ",
    "PEREZ",
    "SANCHEZ",
    "ROMERO",
    "TORRES",
  ]
  const calles = [
    "AV. SANTA FE",
    "AV. CORRIENTES",
    "AV. RIVADAVIA",
    "FLORIDA",
    "LAVALLE",
    "SAN MARTIN",
    "MAIPU",
    "RECONQUISTA",
  ]
  const localidades = ["CAPITAL FEDERAL", "SAN ISIDRO", "VICENTE LOPEZ", "OLIVOS", "MARTINEZ", "TIGRE", "SAN FERNANDO"]
  const barrios = ["PALERMO", "RECOLETA", "BELGRANO", "CABALLITO", "FLORES", "VILLA CRESPO", "BARRACAS"]

  // Usar el DNI como semilla para generar datos consistentes
  const seed = Number.parseInt(dni) || 12345678
  const random = (max) => Math.floor((((seed * 9301 + 49297) % 233280) / 233280) * max)

  const clientData = {
    apellidoCliente: apellidos[random(apellidos.length)],
    nombreCliente: nombres[random(nombres.length)],
    sexo: random(2) === 0 ? "M" : "F",
    fechaNacimiento: `${String(10 + random(20)).padStart(2, "0")}/${String(1 + random(12)).padStart(2, "0")}/${1970 + random(35)}`,
    condicionIVA: ["CONSUMIDOR FINAL", "RESPONSABLE INSCRIPTO", "EXENTO"][random(3)],
    condicion1BB: ["NO INSCRIPTO", "INSCRIPTO", "EXENTO"][random(3)],
    nroInscripIIBB: random(2) === 0 ? "" : String(10000000 + random(89999999)),
    proyectoSAP: `PROJ${String(random(999)).padStart(3, "0")}`,
    buscaCuenta: dni,
    cuenta: `CTA-${String(random(999)).padStart(3, "0")}-2024`,
    calificacion: ["A", "B", "C", "D"][random(4)],
    rangoScoring: `${650 + random(200)}-${750 + random(200)}`,
    codArea: ["011", "0221", "0341", "0351"][random(4)],
    telTitular: `${4000 + random(5999)}-${1000 + random(8999)}`,
    emailCliente: `${nombres[random(nombres.length)].toLowerCase().replace(" ", ".")}.${apellidos[random(apellidos.length)].toLowerCase()}@email.com`,
    otraLineaCelular: random(2) === 0 ? "" : `11-${1000 + random(8999)}-${1000 + random(8999)}`,
    // Solicitante (mismo que cliente por defecto)
    tipoDocSolicitante: "DNI",
    nroDocSolicitante: dni,
    apellidoSolicitante: apellidos[random(apellidos.length)],
    nombreSolicitante: nombres[random(nombres.length)],
    sexoSolicitante: random(2) === 0 ? "M" : "F",
    telSolicitante: `11-${2000 + random(7999)}-${1000 + random(8999)}`,
    // Usuario (familiar)
    tipoDocUsuario: "DNI",
    nroDocUsuario: String(Number.parseInt(dni) + random(1000)),
    apellidoUsuario: apellidos[random(apellidos.length)],
    nombreUsuario: nombres[random(nombres.length)],
    telUsuario: `11-${3000 + random(6999)}-${1000 + random(8999)}`,
    // Domicilio
    cpa: String(1000 + random(8999)),
    calle: calles[random(calles.length)],
    numero: String(100 + random(8900)),
    piso: random(3) === 0 ? "" : String(1 + random(20)),
    depto: random(3) === 0 ? "" : String.fromCharCode(65 + random(26)),
    casillaCorreo: random(3) === 0 ? "" : `CC ${100 + random(899)}`,
    aclaracionesCartero:
      random(2) === 0 ? "" : "PORTERO ELECTRICO - TIMBRE " + (1 + random(20)) + String.fromCharCode(65 + random(4)),
    localidadFacturar: localidades[random(localidades.length)],
    barrio: barrios[random(barrios.length)],
    departamento: `COMUNA ${1 + random(15)}`,
    provinciaFacturar: "BUENOS AIRES",
  }

  return clientData
}

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
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active")
  })

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active")
  })

  const selectedTab = document.querySelector(`[data-tab="${tabName}"]`)
  if (selectedTab) {
    selectedTab.classList.add("active")
  }

  const selectedContent = document.getElementById(`tab-${tabName}`)
  if (selectedContent) {
    selectedContent.classList.add("active")
  }

  activeTab = tabName
}

// Inicializar elementos del formulario
function initializeFormElements() {
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

  syncReadonlyFields()
}

// Configurar event listeners
function setupEventListeners() {
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
  // Auto-completado especial para DNI
  if (fieldName === "nroDocumento") {
    const dniValue = e.target.value.trim()
    if (dniValue && dniValue.length >= 7) {
      setTimeout(() => {
        const clientData = autoCompleteClientData(dniValue)

        Object.keys(clientData).forEach((key) => {
          const element = document.getElementById(key)
          if (element) {
            if (element.type === "checkbox") {
              element.checked = clientData[key]
              formData[key] = clientData[key]
            } else if (element.type === "radio") {
              if (element.value === clientData[key]) {
                element.checked = true
                formData[key] = clientData[key]
              }
            } else {
              element.value = clientData[key]
              formData[key] = clientData[key]
            }
          }
        })

        // Marcar datos personales como "Si"
        const datosPersonalesSi = document.getElementById("datosPersonalesSi")
        if (datosPersonalesSi) {
          datosPersonalesSi.checked = true
          formData.datosPersonales = "Si"
        }
      }, 100)
    }
    return
  }

  // Auto-completado normal para otros campos
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
    setTimeout(() => {
      const dniField = document.getElementById("nroDocumento")
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

// Configurar manejador especial para DNI
function setupDNIHandler() {
  const dniField = document.getElementById("nroDocumento")
  if (dniField) {
    dniField.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === "Tab") {
        handleTabKey(e, "nroDocumento")
      }
    })
  }
}

// Función para exportar datos
function exportFormData() {
  return JSON.stringify(formData, null, 2)
}

// Función para importar datos
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
  const clientRequiredFields = [
    "nroDocumento",
    "apellidoCliente",
    "nombreCliente",
    "sexo",
    "cpa",
    "calle",
    "numero",
    "localidadFacturar",
    "provinciaFacturar",
  ]

  let isValid = true
  const errors = []

  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].trim() === "") {
      isValid = false
      errors.push(`El campo ${field} es obligatorio`)
    }
  })

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

// Función para guardar
function saveForm() {
  const validation = validateRequiredFields()

  if (validation.isValid) {
    console.log("Formulario guardado:", formData)
    alert("Formulario guardado exitosamente")
  } else {
    alert("Por favor complete los campos obligatorios:\n" + validation.errors.join("\n"))
  }
}

// Funcionalidad de menús desplegables
function initializeMenus() {
  const menuItems = document.querySelectorAll(".menu-item[data-menu]")
  const submenus = document.querySelectorAll(".submenu")

  // Agregar event listeners a los elementos del menú
  menuItems.forEach((menuItem) => {
    const menuType = menuItem.getAttribute("data-menu")
    const submenu = document.getElementById(`submenu-${menuType}`)

    if (submenu) {
      // Mostrar submenú al hacer hover
      menuItem.addEventListener("mouseenter", () => {
        // Ocultar todos los submenús
        hideAllSubmenus()
        // Mostrar el submenú correspondiente
        submenu.classList.add("show")
        menuItem.classList.add("active")
      })

      // Mantener submenú visible cuando el mouse está sobre él
      submenu.addEventListener("mouseenter", () => {
        submenu.classList.add("show")
        menuItem.classList.add("active")
      })

      // Ocultar submenú cuando el mouse sale
      submenu.addEventListener("mouseleave", () => {
        submenu.classList.remove("show")
        menuItem.classList.remove("active")
      })
    }

    // Ocultar submenú cuando el mouse sale del elemento del menú
    menuItem.addEventListener("mouseleave", (e) => {
      // Verificar si el mouse se movió hacia el submenú
      const submenu = document.getElementById(`submenu-${menuType}`)
      if (submenu) {
        setTimeout(() => {
          if (!submenu.matches(":hover") && !menuItem.matches(":hover")) {
            submenu.classList.remove("show")
            menuItem.classList.remove("active")
          }
        }, 100)
      }
    })
  })

  // Agregar event listeners a los elementos del submenú
  const submenuItems = document.querySelectorAll(".submenu-item")
  submenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const menuText = e.target.textContent
      console.log(`Menú seleccionado: ${menuText}`)

      // Aquí puedes agregar la lógica específica para cada opción del menú
      handleMenuSelection(menuText)

      // Ocultar todos los submenús después de la selección
      hideAllSubmenus()
    })
  })

  // Ocultar submenús al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-item-container")) {
      hideAllSubmenus()
    }
  })
}

// Inicializar submenús de pestañas
function initializeTabMenus() {
  const tabs = document.querySelectorAll(".tab[data-tab]")
  const tabSubmenus = document.querySelectorAll(".tab-submenu")

  // Agregar event listeners a las pestañas
  tabs.forEach((tab) => {
    const tabType = tab.getAttribute("data-tab")
    const tabSubmenu = document.getElementById(`tab-submenu-${tabType}`)

    if (tabSubmenu) {
      // Mostrar/ocultar submenú SOLO al hacer clic en la pestaña
      tab.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()

        // Si el submenú ya está visible, ocultarlo
        if (tabSubmenu.classList.contains("show")) {
          hideAllTabSubmenus()
          return
        }

        // Ocultar todos los submenús de pestañas
        hideAllTabSubmenus()

        // Mostrar el submenú correspondiente
        tabSubmenu.classList.add("show")

        // Activar la pestaña si no está activa
        if (!tab.classList.contains("active")) {
          switchTab(tabType)
        }
      })

      // REMOVER los event listeners de mouseenter y mouseleave
      // Solo mantener el comportamiento de clic
    }
  })

  // Agregar event listeners a los elementos del submenú de pestañas
  const tabSubmenuItems = document.querySelectorAll(".tab-submenu-item")
  tabSubmenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation()
      const contentType = e.target.getAttribute("data-content")
      console.log(`Sección seleccionada: ${contentType}`)

      // Remover clase active de todos los elementos del submenú
      const parentSubmenu = e.target.closest(".tab-submenu")
      parentSubmenu.querySelectorAll(".tab-submenu-item").forEach((subItem) => {
        subItem.classList.remove("active")
      })

      // Agregar clase active al elemento seleccionado
      e.target.classList.add("active")

      // Manejar la selección de contenido
      handleTabSubmenuSelection(contentType)

      // Ocultar el submenú después de la selección
      hideAllTabSubmenus()
    })
  })

  // Ocultar submenús de pestañas al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".tab-item-container")) {
      hideAllTabSubmenus()
    }
  })
}

// Ocultar todos los submenús de pestañas
function hideAllTabSubmenus() {
  const tabSubmenus = document.querySelectorAll(".tab-submenu")
  tabSubmenus.forEach((submenu) => {
    submenu.classList.remove("show")
  })
}

// Manejar selección de submenú de pestañas
function handleTabSubmenuSelection(contentType) {
  const messages = {
    // Compañía / Ne
    "compania-general": "Mostrando información general de la compañía",
    "compania-entidad": "Navegando a la sección de Entidad",
    "compania-portacion": "Navegando a la sección de Portación",
    "compania-formulario": "Navegando a la sección de Formulario",

    // Cliente / Cuenta
    "cliente-prospecto": "Mostrando información del Prospecto",
    "cliente-cuenta": "Navegando a la sección de Cuenta",
    "cliente-solicitante": "Navegando a la sección de Solicitante Responsable",
    "cliente-usuario": "Navegando a la sección de Usuario",
    "cliente-domicilio": "Navegando a la sección de Domicilio a Facturar",

    // Condiciones
    "condiciones-generales": "Condiciones Generales - En desarrollo",
    "condiciones-especiales": "Condiciones Especiales - En desarrollo",
    "condiciones-promociones": "Promociones - En desarrollo",

    // Tarjetas Prepa
    "tarjetas-datos": "Datos de Tarjeta - En desarrollo",
    "tarjetas-recarga": "Recarga de Tarjeta - En desarrollo",
    "tarjetas-historial": "Historial de Tarjeta - En desarrollo",

    // Forma de Pago
    "pago-metodos": "Métodos de Pago - En desarrollo",
    "pago-facturacion": "Facturación - En desarrollo",
    "pago-descuentos": "Descuentos - En desarrollo",

    // Documentación
    "doc-requerida": "Documentación Requerida - En desarrollo",
    "doc-adjunta": "Documentos Adjuntos - En desarrollo",
    "doc-validacion": "Validación de Documentos - En desarrollo",

    // Pedidos
    "pedidos-nuevo": "Nuevo Pedido - En desarrollo",
    "pedidos-seguimiento": "Seguimiento de Pedidos - En desarrollo",
    "pedidos-historial": "Historial de Pedidos - En desarrollo",

    // Datos Tarjeta
    "tarjeta-info": "Información de Tarjeta - En desarrollo",
    "tarjeta-config": "Configuración de Tarjeta - En desarrollo",
    "tarjeta-seguridad": "Seguridad de Tarjeta - En desarrollo",
  }

  const message = messages[contentType] || `Sección seleccionada: ${contentType}`

  // Mostrar mensaje o realizar acción específica
  if (contentType.startsWith("compania-") || contentType.startsWith("cliente-")) {
    // Para las pestañas activas, mostrar mensaje sin alert
    console.log(message)

    // Aquí puedes agregar lógica para navegar a secciones específicas
    // Por ejemplo, hacer scroll a una sección específica del formulario
    scrollToSection(contentType)
  } else {
    // Para pestañas en desarrollo, mostrar alert
    alert(message)
  }
}

// Función para hacer scroll a secciones específicas
function scrollToSection(contentType) {
  const sectionMap = {
    "compania-general": ".form-row:first-child",
    "compania-entidad": ".section-box:has(.section-label:contains('Entidad'))",
    "compania-portacion": ".section-box:has(.section-label:contains('Portación'))",
    "compania-formulario": ".section-box:has(.section-label:contains('Formulario'))",
    "cliente-prospecto": ".section-box:has(.section-label:contains('Prospecto'))",
    "cliente-solicitante": ".section-box:has(.section-label:contains('Solicitante'))",
    "cliente-usuario": ".section-box:has(.section-label:contains('Usuario'))",
    "cliente-domicilio": ".section-box:has(.section-label:contains('Domicilio'))",
  }

  const selector = sectionMap[contentType]
  if (selector) {
    // Buscar por texto del label ya que CSS :contains no funciona en todos los navegadores
    const sections = document.querySelectorAll(".section-box")
    sections.forEach((section) => {
      const label = section.querySelector(".section-label")
      if (label) {
        const labelText = label.textContent.toLowerCase()
        if (
          (contentType === "compania-entidad" && labelText.includes("entidad")) ||
          (contentType === "compania-portacion" && labelText.includes("portación")) ||
          (contentType === "compania-formulario" && labelText.includes("formulario")) ||
          (contentType === "cliente-prospecto" && labelText.includes("prospecto")) ||
          (contentType === "cliente-solicitante" && labelText.includes("solicitante")) ||
          (contentType === "cliente-usuario" && labelText.includes("usuario")) ||
          (contentType === "cliente-domicilio" && labelText.includes("domicilio"))
        ) {
          section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    })
  } else if (contentType === "compania-general" || contentType === "cliente-prospecto") {
    // Scroll al inicio de la pestaña activa
    const activeContent = document.querySelector(".tab-content.active")
    if (activeContent) {
      activeContent.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
}

// Ocultar todos los submenús
function hideAllSubmenus() {
  const submenus = document.querySelectorAll(".submenu")
  const menuItems = document.querySelectorAll(".menu-item")

  submenus.forEach((submenu) => {
    submenu.classList.remove("show")
  })

  menuItems.forEach((menuItem) => {
    menuItem.classList.remove("active")
  })
}

// Manejar selección de menú
function handleMenuSelection(menuText) {
  switch (menuText) {
    // Menú Principal
    case "Seguridad de Datos":
      alert("Módulo de Seguridad de Datos - En desarrollo")
      break
    case "Detección de Fraude":
      alert("Módulo de Detección de Fraude - En desarrollo")
      break
    case "Marketing":
      alert("Módulo de Marketing - En desarrollo")
      break
    case "Comisión":
      alert("Módulo de Comisión - En desarrollo")
      break
    case "Comercial":
      alert("Módulo Comercial - En desarrollo")
      break
    case "Documentación":
      alert("Módulo de Documentación - En desarrollo")
      break
    case "Recaudación":
      alert("Módulo de Recaudación - En desarrollo")
      break
    case "Atención al Cliente":
      alert("Módulo de Atención al Cliente - En desarrollo")
      break
    case "Facturación Eventual":
      alert("Módulo de Facturación Eventual - En desarrollo")
      break
    case "Producto":
      alert("Módulo de Producto - En desarrollo")
      break
    case "Reportes":
      alert("Módulo de Reportes - En desarrollo")
      break
    case "Gestión CPP":
      alert("Módulo de Gestión CPP - En desarrollo")
      break
    case "Utilidades":
      alert("Módulo de Utilidades - En desarrollo")
      break
    // Procesos
    case "Pedidos":
      alert("Proceso de Pedidos - En desarrollo")
      break
    case "Carga de solicitud de TV":
      alert("Proceso de Carga de solicitud de TV - En desarrollo")
      break
    // Consultas (mantener como estaba)
    case "Consulta General":
      alert("Consulta General - En desarrollo")
      break
    case "Búsqueda Avanzada":
      alert("Búsqueda Avanzada - En desarrollo")
      break
    case "Historial":
      alert("Historial - En desarrollo")
      break
    // Window (mantener como estaba)
    case "Cascada":
      alert("Organizar ventanas en cascada")
      break
    case "Mosaico Horizontal":
      alert("Organizar ventanas en mosaico horizontal")
      break
    case "Mosaico Vertical":
      alert("Organizar ventanas en mosaico vertical")
      break
    case "Organizar Iconos":
      alert("Organizar iconos del escritorio")
      break
    default:
      alert(`Opción seleccionada: ${menuText}`)
  }
}

// Exponer funciones globalmente
window.simuladorPortabilidad = {
  exportFormData,
  importFormData,
  saveForm,
  validateRequiredFields,
  switchTab,
  formData,
}
