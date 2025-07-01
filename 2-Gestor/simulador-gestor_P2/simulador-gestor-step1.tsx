"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { User, Menu, Edit, Calendar, Phone, TrendingUp, Mic, Plus, X } from "lucide-react"

interface FormData {
  // Información general
  tipoDocumento: string
  numeroDocumento: string
  fechaNacimiento: string
  sexo: string
  nombrePortar: string
  telefonoAdicional: string
  email: string
  empresaOrigen: string
  cuentaAfiliar: string
  mercadoOrigen: string
  numeroPIN: string
  fechaExpiracionPIN: string

  // Gestión de plan
  mercadoDestino: string
  campana: string
  promocion: string
  abonoElegido: string
  tipoGestionMultiple: boolean

  // Domicilio
  calle: string
  numero: string
  piso: string
  depto: string
  pais: string
  provincia: string
  localidad: string
  codigoPostal: string
  observaciones: string
  franjaHoraria: string
  observacionesGenerales: string
  origen: string

  // Envío de mensaje
  prefijoMensaje: string
  numeroMensaje: string
}

interface LineaMultiple {
  id: string
  prefijoTelefono: string
  numeroTelefono: string
  companiaActual: string
  mercadoActual: string
  mercadoDestino: string
  campana: string
  promocion: string
  abonoElegido: string
}

export default function Component() {
  const [currentDateTime, setCurrentDateTime] = useState("")
  const [isMultipleModalOpen, setIsMultipleModalOpen] = useState(false)
  const [lineasMultiples, setLineasMultiples] = useState<LineaMultiple[]>([])
  const [formData, setFormData] = useState<FormData>({
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
    mercadoDestino: "Postpago",
    campana: "TLMPC1",
    promocion: "3535",
    abonoElegido: "A063C",
    tipoGestionMultiple: false,
    calle: "",
    numero: "",
    piso: "",
    depto: "",
    pais: "Argentina",
    provincia: "",
    localidad: "",
    codigoPostal: "",
    observaciones: "",
    franjaHoraria: "",
    observacionesGenerales: "",
    origen: "Porta Out",
    prefijoMensaje: "+54 9",
    numeroMensaje: "",
  })

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const day = String(now.getDate()).padStart(2, "0")
      const month = String(now.getMonth() + 1).padStart(2, "0")
      const year = now.getFullYear()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")

      setCurrentDateTime(`${day}/${month}/${year} ${hours}:${minutes}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    const requiredFields = [
      "numeroDocumento",
      "fechaNacimiento",
      "sexo",
      "nombrePortar",
      "empresaOrigen",
      "cuentaAfiliar",
      "mercadoOrigen",
      "numeroPIN",
      "calle",
      "numero",
      "provincia",
      "localidad",
      "codigoPostal",
    ]
    return requiredFields.every((field) => formData[field as keyof FormData].toString().trim() !== "")
  }

  const handleMultipleToggle = (checked: boolean) => {
    updateFormData("tipoGestionMultiple", checked)
    if (checked) {
      setIsMultipleModalOpen(true)
    }
  }

  const agregarLineaMultiple = () => {
    const nuevaLinea: LineaMultiple = {
      id: Date.now().toString(),
      prefijoTelefono: "",
      numeroTelefono: "",
      companiaActual: "",
      mercadoActual: "",
      mercadoDestino: "",
      campana: "",
      promocion: "",
      abonoElegido: "",
    }
    setLineasMultiples([...lineasMultiples, nuevaLinea])
  }

  const eliminarLineaMultiple = (id: string) => {
    setLineasMultiples(lineasMultiples.filter((linea) => linea.id !== id))
  }

  const actualizarLineaMultiple = (id: string, field: keyof LineaMultiple, value: string) => {
    setLineasMultiples(lineasMultiples.map((linea) => (linea.id === id ? { ...linea, [field]: value } : linea)))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <Menu className="w-5 h-5 text-gray-600" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">Claro</span>
              </div>
              <span className="text-lg font-medium text-gray-800">Simulador de Gestor</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>NU</span>
            <span>Nuevo Usuario</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 bg-gray-700 min-h-screen relative">
          <div className="p-3">
            <div className="space-y-1">
              <div className="text-white text-sm font-medium mb-3 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Trámites Portabilidad
              </div>
              <div className="space-y-0.5">
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  Llamado Porta In
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  Llamado Porta Lead
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  Trámite Referido Out
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  Agenda Personal
                </div>
                <div className="text-white text-sm font-medium mt-4 mb-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trámites Voz
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  Llamado Voz In
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  Llamado Voz Out
                </div>
                <div className="text-white text-sm font-medium mt-4 mb-2">Trámites BAF</div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  BAF In
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  BAF Out
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  BAF Lead
                </div>
                <div className="text-gray-300 text-sm py-2 px-3 rounded hover:bg-gray-600 cursor-pointer flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-500 rounded"></div>
                  Referidos
                </div>
              </div>
            </div>
          </div>

          {/* Plus button */}
          <div className="absolute bottom-4 left-4">
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700">
              <Plus className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          <div className="p-4">
            {/* Header Info */}
            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">{currentDateTime} - Nuevo Usuario</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Edit className="w-4 h-4 text-red-600" />
                    <span className="text-sm">Estado:</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">1</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-2 rounded">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium">ACTIVA</span>
                    <span className="text-xs">{currentDateTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Información General */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="border-b border-gray-200 px-4 py-3">
                  <h3 className="text-base font-medium text-gray-900">Información general</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs text-gray-700">Tipo de Documento</Label>
                      <div className="flex items-center space-x-2">
                        <Select
                          value={formData.tipoDocumento}
                          onValueChange={(value) => updateFormData("tipoDocumento", value)}
                        >
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="DNI">DNI</SelectItem>
                            <SelectItem value="CUIL">CUIL</SelectItem>
                            <SelectItem value="CUIT">CUIT</SelectItem>
                          </SelectContent>
                        </Select>
                        <Edit className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-gray-700">Nro. Documento</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          className="h-8 text-sm"
                          value={formData.numeroDocumento}
                          onChange={(e) => updateFormData("numeroDocumento", e.target.value)}
                        />
                        <Edit className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs text-gray-700">Fecha de nac.</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="date"
                          className="h-8 text-sm"
                          value={formData.fechaNacimiento}
                          onChange={(e) => updateFormData("fechaNacimiento", e.target.value)}
                        />
                        <Edit className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-gray-700">Sexo</Label>
                      <div className="flex items-center space-x-2">
                        <Select value={formData.sexo} onValueChange={(value) => updateFormData("sexo", value)}>
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="M">Masculino</SelectItem>
                            <SelectItem value="F">Femenino</SelectItem>
                          </SelectContent>
                        </Select>
                        <Edit className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Nom a Portar</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        className="h-8 text-sm"
                        value={formData.nombrePortar}
                        onChange={(e) => updateFormData("nombrePortar", e.target.value)}
                      />
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                        <Edit className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Teléf. adic.</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        className="h-8 text-sm"
                        value={formData.telefonoAdicional}
                        onChange={(e) => updateFormData("telefonoAdicional", e.target.value)}
                      />
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                        <Edit className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Email</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        className="h-8 text-sm"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                      />
                      <Edit className="w-4 h-4 text-red-600" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Empresa Orig.</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        className="h-8 text-sm"
                        value={formData.empresaOrigen}
                        onChange={(e) => updateFormData("empresaOrigen", e.target.value)}
                      />
                      <Edit className="w-4 h-4 text-red-600" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Cuenta a afiliar</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        className="h-8 text-sm"
                        value={formData.cuentaAfiliar}
                        onChange={(e) => updateFormData("cuentaAfiliar", e.target.value)}
                      />
                      <Edit className="w-4 h-4 text-red-600" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Mercado orig.</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        className="h-8 text-sm"
                        value={formData.mercadoOrigen}
                        onChange={(e) => updateFormData("mercadoOrigen", e.target.value)}
                      />
                      <Edit className="w-4 h-4 text-red-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs text-gray-700">Nro. PIN</Label>
                      <Input
                        className="h-8 text-sm"
                        value={formData.numeroPIN}
                        onChange={(e) => updateFormData("numeroPIN", e.target.value)}
                        placeholder="Nro. PIN"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-gray-700">Fecha expiración PIN</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="date"
                          className="h-8 text-sm"
                          value={formData.fechaExpiracionPIN}
                          onChange={(e) => updateFormData("fechaExpiracionPIN", e.target.value)}
                        />
                        <Calendar className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gestión de Plan */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="border-b border-gray-200 px-4 py-3">
                  <h3 className="text-base font-medium text-gray-900">Gestión de plan</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <Label className="text-xs text-gray-700">Mercado dest.</Label>
                    <Select
                      value={formData.mercadoDestino}
                      onValueChange={(value) => updateFormData("mercadoDestino", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Postpago">Postpago</SelectItem>
                        <SelectItem value="Prepago">Prepago</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Campaña</Label>
                    <Select value={formData.campana} onValueChange={(value) => updateFormData("campana", value)}>
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TLMPC1">TLMPC1</SelectItem>
                        <SelectItem value="TLMPC2">TLMPC2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Promoción</Label>
                    <Select value={formData.promocion} onValueChange={(value) => updateFormData("promocion", value)}>
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3055">3055</SelectItem>
                        <SelectItem value="4001">4001</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Abono elegido</Label>
                    <Select
                      value={formData.abonoElegido}
                      onValueChange={(value) => updateFormData("abonoElegido", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A061C">A061C</SelectItem>
                        <SelectItem value="A062C">A062C</SelectItem>
                        <SelectItem value="A063C">A063C</SelectItem>
                        <SelectItem value="A064C">A064C</SelectItem>
                        <SelectItem value="A065C">A065C</SelectItem>
                        <SelectItem value="A066C">A066C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700 mb-2 block">Tipo de gestión</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Múltiple</span>
                      <Switch checked={formData.tipoGestionMultiple} onCheckedChange={handleMultipleToggle} />
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Domicilio de envío</h4>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs text-gray-700">Calle</Label>
                        <Input
                          className="h-8 text-sm"
                          value={formData.calle}
                          onChange={(e) => updateFormData("calle", e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <Label className="text-xs text-gray-700">Nro.</Label>
                          <Input
                            className="h-8 text-sm"
                            value={formData.numero}
                            onChange={(e) => updateFormData("numero", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-gray-700">Piso</Label>
                          <Input
                            className="h-8 text-sm"
                            value={formData.piso}
                            onChange={(e) => updateFormData("piso", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-gray-700">Depto</Label>
                          <Input
                            className="h-8 text-sm"
                            value={formData.depto}
                            onChange={(e) => updateFormData("depto", e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-gray-700">País</Label>
                        <Select value={formData.pais} onValueChange={(value) => updateFormData("pais", value)}>
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Argentina">Argentina</SelectItem>
                            <SelectItem value="Chile">Chile</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-xs text-gray-700">Provincia</Label>
                        <Select
                          value={formData.provincia}
                          onValueChange={(value) => updateFormData("provincia", value)}
                        >
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Buenos Aires">Buenos Aires</SelectItem>
                            <SelectItem value="CABA">CABA</SelectItem>
                            <SelectItem value="Córdoba">Córdoba</SelectItem>
                            <SelectItem value="Santa Fe">Santa Fe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-xs text-gray-700">Localidad</Label>
                        <Select
                          value={formData.localidad}
                          onValueChange={(value) => updateFormData("localidad", value)}
                        >
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CABA">CABA</SelectItem>
                            <SelectItem value="La Plata">La Plata</SelectItem>
                            <SelectItem value="Córdoba Capital">Córdoba Capital</SelectItem>
                            <SelectItem value="Rosario">Rosario</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-xs text-gray-700">CP</Label>
                        <Input
                          className="h-8 text-sm"
                          value={formData.codigoPostal}
                          onChange={(e) => updateFormData("codigoPostal", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <div>
                      <Label className="text-xs text-gray-700">Observaciones para el cartero</Label>
                      <Textarea
                        className="text-sm resize-none mt-1"
                        rows={2}
                        value={formData.observaciones}
                        onChange={(e) => updateFormData("observaciones", e.target.value)}
                        placeholder="Observaciones para el cartero"
                      />
                      <div className="text-xs text-gray-500 mt-1">0 / 50</div>
                    </div>

                    <div className="flex items-center justify-center my-3">
                      <div className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Ver frecuenciador</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700">Franja horaria</Label>
                      <Select
                        value={formData.franjaHoraria}
                        onValueChange={(value) => updateFormData("franjaHoraria", value)}
                      >
                        <SelectTrigger className="h-8 text-sm">
                          <SelectValue placeholder="Seleccione la franja horaria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mañana">Mañana</SelectItem>
                          <SelectItem value="Tarde">Tarde</SelectItem>
                          <SelectItem value="Noche">Noche</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mt-3">
                      <Label className="text-xs text-gray-700">Observaciones</Label>
                      <Textarea
                        className="text-sm resize-none mt-1"
                        rows={2}
                        value={formData.observacionesGenerales}
                        onChange={(e) => updateFormData("observacionesGenerales", e.target.value)}
                        placeholder="Observaciones generales"
                      />
                    </div>

                    <div className="mt-3">
                      <div className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium text-center">
                        Ver historial de observaciones
                      </div>
                    </div>

                    <div className="mt-3">
                      <Label className="text-xs text-gray-700">Origen</Label>
                      <Input
                        className="h-8 text-sm mt-1"
                        value={formData.origen}
                        onChange={(e) => updateFormData("origen", e.target.value)}
                      />
                    </div>

                    <div className="mt-3">
                      <Label className="text-xs text-gray-700">Verificación</Label>
                      <div className="flex items-center justify-center mt-2">
                        <Mic className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Envío de mensaje */}
            <div className="bg-white rounded-lg shadow-sm mt-4">
              <div className="border-b border-gray-200 px-4 py-3">
                <h3 className="text-base font-medium text-gray-900">Envío de mensaje para carga de Documentación</h3>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-600 mb-3">
                  Indique el número de teléfono a donde desea enviar el mensaje
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <Input
                    className="h-8 text-sm"
                    value={formData.prefijoMensaje}
                    onChange={(e) => updateFormData("prefijoMensaje", e.target.value)}
                    placeholder="+54 9"
                  />
                  <Input className="h-8 text-sm" placeholder="Prefijo (sin 0)" />
                  <Input
                    className="h-8 text-sm"
                    value={formData.numeroMensaje}
                    onChange={(e) => updateFormData("numeroMensaje", e.target.value)}
                    placeholder="Número (sin 15)"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    Cancelar
                  </Button>
                  <Button
                    disabled={!isFormValid()}
                    className={`flex-1 ${
                      isFormValid() ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    Guardar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Múltiples Líneas */}
      <Dialog open={isMultipleModalOpen} onOpenChange={setIsMultipleModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Gestión Múltiple - Líneas y Planes</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">Líneas adicionales</h4>
              <Button onClick={agregarLineaMultiple} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Agregar Línea
              </Button>
            </div>

            {lineasMultiples.map((linea, index) => (
              <div key={linea.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-medium">Línea {index + 1}</h5>
                  <Button variant="outline" size="sm" onClick={() => eliminarLineaMultiple(linea.id)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-gray-700">Núm a portar</Label>
                    <div className="flex space-x-2">
                      <Input
                        className="h-8 text-sm w-24"
                        placeholder="Prefijo"
                        value={linea.prefijoTelefono}
                        onChange={(e) => actualizarLineaMultiple(linea.id, "prefijoTelefono", e.target.value)}
                      />
                      <Input
                        className="h-8 text-sm flex-1"
                        placeholder="Número"
                        value={linea.numeroTelefono}
                        onChange={(e) => actualizarLineaMultiple(linea.id, "numeroTelefono", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Compañía Actual</Label>
                    <Select
                      value={linea.companiaActual}
                      onValueChange={(value) => actualizarLineaMultiple(linea.id, "companiaActual", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Claro">Claro</SelectItem>
                        <SelectItem value="Movistar">Movistar</SelectItem>
                        <SelectItem value="Personal">Personal</SelectItem>
                        <SelectItem value="Tuenti">Tuenti</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Mercado Actual</Label>
                    <Select
                      value={linea.mercadoActual}
                      onValueChange={(value) => actualizarLineaMultiple(linea.id, "mercadoActual", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Postpago">Postpago</SelectItem>
                        <SelectItem value="Prepago">Prepago</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Mercado Destino</Label>
                    <Select
                      value={linea.mercadoDestino}
                      onValueChange={(value) => actualizarLineaMultiple(linea.id, "mercadoDestino", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Postpago">Postpago</SelectItem>
                        <SelectItem value="Prepago">Prepago</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Campaña</Label>
                    <Select
                      value={linea.campana}
                      onValueChange={(value) => actualizarLineaMultiple(linea.id, "campana", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TLMPC1">TLMPC1</SelectItem>
                        <SelectItem value="TLMPC2">TLMPC2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Promoción</Label>
                    <Select
                      value={linea.promocion}
                      onValueChange={(value) => actualizarLineaMultiple(linea.id, "promocion", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3055">3055</SelectItem>
                        <SelectItem value="4001">4001</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-700">Abono Elegido</Label>
                    <Select
                      value={linea.abonoElegido}
                      onValueChange={(value) => actualizarLineaMultiple(linea.id, "abonoElegido", value)}
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A061C">A061C</SelectItem>
                        <SelectItem value="A062C">A062C</SelectItem>
                        <SelectItem value="A063C">A063C</SelectItem>
                        <SelectItem value="A064C">A064C</SelectItem>
                        <SelectItem value="A065C">A065C</SelectItem>
                        <SelectItem value="A066C">A066C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsMultipleModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setIsMultipleModalOpen(false)}>Guardar Líneas</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
