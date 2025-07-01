"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Menu, Calendar, Phone, TrendingUp, Plus } from "lucide-react"

interface FormData {
  apellido: string
  nombre: string
  tipoDocumento: string
  numeroDocumento: string
  fechaNacimiento: string
  sexo: string
  prefijoTelefono: string
  numeroTelefono: string
  prefijoAdicional: string
  numeroAdicional: string
  email: string
  empresaOrigen: string
  cuentaAfiliar: string
  mercadoOrigen: string
}

export default function Component() {
  const [currentDateTime, setCurrentDateTime] = useState("")
  const [formData, setFormData] = useState<FormData>({
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
  })

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const day = String(now.getDate()).padStart(2, "0")
      const month = String(now.getMonth() + 1).padStart(2, "0")
      const year = now.getFullYear()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      const seconds = String(now.getSeconds()).padStart(2, "0")

      setCurrentDateTime(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    const requiredFields: (keyof FormData)[] = [
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
    return requiredFields.every((field) => formData[field].trim() !== "")
  }

  const getFieldError = (field: keyof FormData) => {
    if (formData[field].trim() === "") {
      switch (field) {
        case "apellido":
          return "El apellido del contacto es requerido"
        case "nombre":
          return "El nombre del contacto es requerido"
        case "numeroDocumento":
          return "El número de documento es requerido"
        case "fechaNacimiento":
          return "La fecha de nacimiento no es correcta"
        case "prefijoTelefono":
          return "El código de área del Nom a portar es requerido"
        case "numeroTelefono":
          return "El número del Nom a portar es requerido"
        case "email":
          return "El email es requerido"
        case "cuentaAfiliar":
          return "La cuenta a afiliar es requerida"
        default:
          return ""
      }
    }
    return ""
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-300 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-3">
            <Menu className="w-5 h-5 text-gray-700" />
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">Claro</span>
              </div>
              <span className="text-base font-normal text-gray-900">Simulador de Gestor</span>
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
        <div className="w-60 bg-gray-600 min-h-screen">
          <div className="p-2">
            <div className="space-y-1">
              <div className="text-white text-xs font-medium mb-2 flex items-center px-2 py-1">
                <Phone className="w-3 h-3 mr-2" />
                Trámites Portabilidad
              </div>
              <div className="space-y-0.5">
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  Llamado Porta In
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  Llamado Porta Lead
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  Trámite Referido Out
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  Agenda Personal
                </div>
                <div className="text-white text-xs font-medium mt-3 mb-2 flex items-center px-2 py-1">
                  <TrendingUp className="w-3 h-3 mr-2" />
                  Trámites Voz
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  Llamado Voz In
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  Llamado Voz Out
                </div>
                <div className="text-white text-xs font-medium mt-3 mb-2 px-2 py-1">Trámites BAF</div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  BAF In
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  BAF Out
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  BAF Lead
                </div>
                <div className="text-gray-300 text-xs py-1.5 px-3 rounded hover:bg-gray-500 cursor-pointer flex items-center">
                  <div className="w-3 h-3 mr-2 bg-gray-400 rounded-sm"></div>
                  Referidos
                </div>
              </div>
            </div>
          </div>
          {/* Plus button at bottom */}
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
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-gray-700">Datos del trámite</span>
              </div>
            </div>

            <div className="flex">
              {/* Left empty area */}
              <div className="flex-1 pr-4">
                <div className="bg-white rounded border border-gray-300 p-3 mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Inicio</span>
                    <span className="font-medium">{currentDateTime}</span>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>Nuevo Usuario</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Area */}
              <div className="w-80">
                <div className="bg-white rounded border border-gray-300">
                  <div className="border-b border-gray-300 px-3 py-2 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-900">Información general</h3>
                  </div>
                  <div className="p-3 space-y-3">
                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Apellido *</Label>
                      <Input
                        className="h-7 text-xs border-gray-300"
                        value={formData.apellido}
                        onChange={(e) => updateFormData("apellido", e.target.value)}
                        placeholder="Apellido del contacto"
                      />
                      {getFieldError("apellido") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("apellido")}</span>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Nombre *</Label>
                      <Input
                        className="h-7 text-xs border-gray-300"
                        value={formData.nombre}
                        onChange={(e) => updateFormData("nombre", e.target.value)}
                        placeholder="Nombre del contacto"
                      />
                      {getFieldError("nombre") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("nombre")}</span>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Tipo de Documento *</Label>
                      <Select
                        value={formData.tipoDocumento}
                        onValueChange={(value) => updateFormData("tipoDocumento", value)}
                      >
                        <SelectTrigger className="h-7 text-xs border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DNI">DNI</SelectItem>
                          <SelectItem value="CUIL">CUIL</SelectItem>
                          <SelectItem value="CUIT">CUIT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Nro. Documento *</Label>
                      <Input
                        className="h-7 text-xs border-gray-300"
                        value={formData.numeroDocumento}
                        onChange={(e) => updateFormData("numeroDocumento", e.target.value)}
                        placeholder="Nro. documento"
                      />
                      {getFieldError("numeroDocumento") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("numeroDocumento")}</span>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Fecha de nac. *</Label>
                      <div className="relative">
                        <Input
                          type="date"
                          className="h-7 text-xs border-gray-300"
                          value={formData.fechaNacimiento}
                          onChange={(e) => updateFormData("fechaNacimiento", e.target.value)}
                          placeholder="Fecha de nac. (dd/mm/yyyy)"
                        />
                        <Calendar className="absolute right-2 top-1.5 w-3 h-3 text-gray-400" />
                      </div>
                      {getFieldError("fechaNacimiento") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("fechaNacimiento")}</span>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Sexo *</Label>
                      <Select value={formData.sexo} onValueChange={(value) => updateFormData("sexo", value)}>
                        <SelectTrigger className="h-7 text-xs border-gray-300">
                          <SelectValue placeholder="Seleccione el sexo del contacto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="M">Masculino</SelectItem>
                          <SelectItem value="F">Femenino</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Num a portar *</Label>
                      <div className="flex space-x-1">
                        <Input
                          className="h-7 text-xs border-gray-300 w-20"
                          value={formData.prefijoTelefono}
                          onChange={(e) => updateFormData("prefijoTelefono", e.target.value)}
                          placeholder="Prefijo (sin 0)"
                        />
                        <Input
                          className="h-7 text-xs border-gray-300 flex-1"
                          value={formData.numeroTelefono}
                          onChange={(e) => updateFormData("numeroTelefono", e.target.value)}
                          placeholder="Número (sin 15)"
                        />
                        <div className="w-4 h-4 bg-red-600 rounded-sm mt-1.5"></div>
                      </div>
                      {getFieldError("prefijoTelefono") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("prefijoTelefono")}</span>
                      )}
                      {getFieldError("numeroTelefono") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("numeroTelefono")}</span>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Teléfono adic. *</Label>
                      <div className="flex space-x-1">
                        <Input
                          className="h-7 text-xs border-gray-300 w-20"
                          value={formData.prefijoAdicional}
                          onChange={(e) => updateFormData("prefijoAdicional", e.target.value)}
                          placeholder="Prefijo (sin 0)"
                        />
                        <Input
                          className="h-7 text-xs border-gray-300 flex-1"
                          value={formData.numeroAdicional}
                          onChange={(e) => updateFormData("numeroAdicional", e.target.value)}
                          placeholder="Número (sin 15)"
                        />
                        <div className="w-4 h-4 bg-red-600 rounded-sm mt-1.5"></div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Email *</Label>
                      <Input
                        type="email"
                        className="h-7 text-xs border-gray-300"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placehold="digital@claro.com"
                      />
                      {getFieldError("email") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("email")}</span>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Empresa orig. *</Label>
                      <Select
                        value={formData.empresaOrigen}
                        onValueChange={(value) => updateFormData("empresaOrigen", value)}
                      >
                        <SelectTrigger className="h-7 text-xs border-gray-300">
                          <SelectValue placeholder="Seleccione la empresa de origen" />
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
                      <Label className="text-xs text-gray-700 block mb-1">Cuenta a afiliar *</Label>
                      <Input
                        className="h-7 text-xs border-gray-300"
                        value={formData.cuentaAfiliar}
                        onChange={(e) => updateFormData("cuentaAfiliar", e.target.value)}
                        placeholder="Cuenta a afiliar"
                      />
                      {getFieldError("cuentaAfiliar") && (
                        <span className="text-xs text-red-600 block mt-0.5">{getFieldError("cuentaAfiliar")}</span>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs text-gray-700 block mb-1">Mercado orig. *</Label>
                      <Select
                        value={formData.mercadoOrigen}
                        onValueChange={(value) => updateFormData("mercadoOrigen", value)}
                      >
                        <SelectTrigger className="h-7 text-xs border-gray-300">
                          <SelectValue placeholder="Seleccione el mercado de origen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Postpago">Postpago</SelectItem>
                          <SelectItem value="Prepago">Prepago</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Bottom Button */}
                    <div className="pt-2 space-y-2">
                      <Button
                        className={`w-full h-7 text-xs border-gray-300 ${
                          isFormValid()
                            ? "bg-red-600 hover:bg-red-700 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!isFormValid()}
                      >
                        Continuar
                      </Button>
                      <Button className="w-full h-7 bg-red-600 hover:bg-red-700 text-white text-xs border-gray-300">
                        Desestimar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
