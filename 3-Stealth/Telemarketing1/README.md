# Simulador de Portabilidad

Aplicación web para la carga de solicitudes de servicio para celular con funcionalidad de telemarketing.

## Características

- ✅ Interfaz estilo Windows clásico
- ✅ Formulario con pestañas navegables
- ✅ Auto-completado de campos al presionar Tab
- ✅ Validación de campos obligatorios
- ✅ Navegación automática entre pestañas
- ✅ Campos de solo lectura sincronizados
- ✅ Checkboxes funcionales

## Estructura de Archivos

\`\`\`
simulador-portabilidad/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS (estilo Windows)
├── script.js           # Lógica JavaScript
├── package.json        # Configuración del proyecto
└── README.md          # Documentación
\`\`\`

## Instalación y Uso

### Opción 1: Servidor Local Simple
\`\`\`bash
# Navegar al directorio del proyecto
cd simulador-portabilidad

# Iniciar servidor Python (si tienes Python instalado)
python -m http.server 8000

# O usar Node.js http-server
npx http-server .
\`\`\`

### Opción 2: Abrir Directamente
Simplemente abre el archivo `index.html` en tu navegador web.

## Funcionalidades

### Campos Obligatorios (Fondo Blanco)
- Campaña: 2
- Megaregión: ARGENTINA  
- Negocio: CO
- Entidad: 000000
- Tipo de Portación: S
- Negocio Actual: POSPAGO
- DNI (en pestaña Cliente)
- Nombre Completo (en pestaña Cliente)

### Auto-completado (Campos Grises)
Al presionar Tab en los campos grises, se llenan automáticamente con datos de ejemplo.

### Navegación
- Al presionar Tab en "Nro. SDS", cambia automáticamente a la pestaña "Cliente/Cuenta"
- Las pestañas son clickeables para navegación manual

## API JavaScript

El objeto global `window.simuladorPortabilidad` expone las siguientes funciones:

\`\`\`javascript
// Exportar datos del formulario
const data = window.simuladorPortabilidad.exportFormData();

// Importar datos al formulario
window.simuladorPortabilidad.importFormData(jsonString);

// Guardar formulario (con validación)
window.simuladorPortabilidad.saveForm();

// Validar campos obligatorios
const validation = window.simuladorPortabilidad.validateRequiredFields();

// Cambiar pestaña programáticamente
window.simuladorPortabilidad.switchTab('cliente');

// Acceder a los datos del formulario
console.log(window.simuladorPortabilidad.formData);
\`\`\`

## Personalización

### Modificar Datos de Auto-completado
Edita el objeto `autoFillData` en `script.js`:

\`\`\`javascript
const autoFillData = {
    nombreEmpresa: "TU EMPRESA",
    nombreCompleto: "NOMBRE PERSONALIZADO",
    // ... más campos
};
\`\`\`

### Agregar Nuevos Campos
1. Añade el campo en `index.html`
2. Agrega el estilo correspondiente en `styles.css`
3. Incluye el campo en `formData` y configura los event listeners en `script.js`

## Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Internet Explorer 11+

## Licencia

MIT License - Libre para uso personal y comercial.
