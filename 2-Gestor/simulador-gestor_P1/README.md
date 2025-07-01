# Simulador de Gestor - Claro

Un simulador web exacto de la interfaz de gestión de Claro, desarrollado con HTML5, CSS3 y JavaScript vanilla.

## Características

- ✅ Interfaz idéntica al sistema original
- ✅ Validación en tiempo real de formularios
- ✅ Fecha y hora actualizadas automáticamente
- ✅ Botón "Continuar" habilitado solo cuando todos los campos están completos
- ✅ Mensajes de error específicos para cada campo
- ✅ Diseño responsive
- ✅ Sin dependencias externas

## Estructura del Proyecto

\`\`\`
simulador-gestor/
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
- **Campos requeridos**: Apellido, Nombre, Nro. Documento, Fecha de nacimiento, Sexo, Teléfono a portar, Email, Empresa origen, Cuenta a afiliar, Mercado origen
- **Validación en tiempo real**: Los errores se muestran/ocultan mientras el usuario escribe
- **Botón inteligente**: "Continuar" se habilita solo cuando todos los campos están completos

### Características Técnicas
- **Fecha/Hora en vivo**: Se actualiza cada segundo
- **Diseño pixel-perfect**: Replica exactamente la interfaz original
- **Código limpio**: Separación clara entre HTML, CSS y JavaScript
- **Sin frameworks**: Código vanilla para máxima compatibilidad

## Personalización

### Modificar colores
Edita las variables CSS en `styles.css`:
\`\`\`css
:root {
  --primary-red: #dc2626;
  --sidebar-gray: #4b5563;
  --text-gray: #374151;
}
\`\`\`

### Agregar nuevos campos
1. Añade el HTML en `index.html`
2. Agrega los estilos en `styles.css`
3. Incluye la lógica en `script.js`

### Cambiar validaciones
Modifica el array `requiredFields` y el objeto `errorMessages` en `script.js`

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles

## Licencia

MIT License - Libre para uso personal y comercial.
