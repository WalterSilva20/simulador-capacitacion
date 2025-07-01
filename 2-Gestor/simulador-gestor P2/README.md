# Simulador de Gestor - Claro (Paso 1)

Un simulador web exacto del primer paso de la interfaz de gestión de Claro, desarrollado con HTML5, CSS3 y JavaScript vanilla.

## Características

- ✅ Interfaz idéntica al sistema original (Paso 1)
- ✅ Validación específica de campos requeridos
- ✅ Fecha y hora actualizadas automáticamente
- ✅ Botón "Guardar" habilitado solo cuando campos específicos están completos
- ✅ Modal para gestión múltiple de líneas
- ✅ Opciones específicas para Promoción (3055, 4001) y Abono elegido (A061C-A066C)
- ✅ Franja horaria con opciones específicas (9-15hs, 15-18hs)
- ✅ Diseño responsive
- ✅ Sin dependencias externas

## Campos Requeridos para Habilitar "Guardar"

- Mercado dest.
- Campaña
- Promoción
- Abono elegido
- Calle
- Nro.
- País
- Provincia
- Localidad
- CP
- Observaciones para el cartero
- Franja horaria

## Estructura del Proyecto

\`\`\`
simulador-gestor-step1/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS3 personalizados
├── script.js           # Lógica JavaScript
├── package.json        # Configuración del proyecto
└── README.md          # Documentación
\`\`\`

## Instalación y Uso

### Opción 1: Abrir directamente
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador web

### Opción 2: Servidor local con Python
\`\`\`bash
python -m http.server 8000
\`\`\`
Luego visita: http://localhost:8000

### Opción 3: Servidor local con Node.js
\`\`\`bash
npm install
npm run serve
\`\`\`

## Funcionalidades

### Validación de Formulario
- **Campos requeridos específicos**: Solo los campos de gestión de plan y domicilio
- **Validación en tiempo real**: El botón se habilita/deshabilita automáticamente
- **Botón inteligente**: "Guardar" cambia de gris a rojo cuando está habilitado

### Gestión Múltiple
- **Toggle "Múltiple"**: Abre modal para agregar líneas adicionales
- **Campos por línea**: Núm a portar, Compañía Actual, Mercados, Campaña, Promoción, Abono
- **Agregar/Eliminar**: Gestión dinámica de múltiples líneas
- **Persistencia**: Los datos se mantienen al cerrar/abrir el modal

### Opciones Específicas
- **Promoción**: 3055, 4001
- **Abono elegido**: A061C, A062C, A063C, A064C, A065C, A066C
- **Franja horaria**: 9-15hs, 15-18hs

### Características Técnicas
- **Fecha/Hora en vivo**: Se actualiza cada minuto
- **Diseño pixel-perfect**: Replica exactamente la interfaz original
- **Código limpio**: Separación clara entre HTML, CSS y JavaScript
- **Sin frameworks**: Código vanilla para máxima compatibilidad

## API JavaScript

El simulador expone una API global para interactuar programáticamente:

\`\`\`javascript
// Obtener todos los datos del formulario
const datos = window.SimuladorGestor.getFormData()

// Validar formulario manualmente
window.SimuladorGestor.validateForm()

// Reiniciar formulario
window.SimuladorGestor.resetForm()

// Obtener líneas múltiples
const lineas = window.SimuladorGestor.getLineasMultiples()
\`\`\`

## Personalización

### Modificar campos requeridos
Edita el array `requiredFields` en `script.js`:
\`\`\`javascript
const requiredFields = [
  "mercadoDestino",
  "campana", 
  "promocion",
  // ... agregar o quitar campos
]
\`\`\`

### Agregar nuevas opciones
Modifica los elementos `<select>` en `index.html` y actualiza las opciones correspondientes.

### Cambiar colores
Edita las variables CSS en `styles.css`:
\`\`\`css
:root {
  --primary-red: #dc2626;
  --sidebar-gray: #4b5563;
  --text-gray: #374151;
}
\`\`\`

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles

## Próximos Pasos

Este es el Paso 1 del simulador. Para completar el flujo:
1. Crear Paso 2 (formulario de información del contacto)
2. Implementar navegación entre pasos
3. Integrar con backend para persistencia de datos

## Licencia

MIT License - Libre para uso personal y comercial.
