"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Menu, Phone, Mail, Home, Building, Calendar, User, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [expandedSections, setExpandedSections] = useState({
    ordenTrabajo: true,
    informacionPersonal: true,
    gestionPlan: false,
    domicilio: true,
    observaciones: false,
  })

  const [observaciones, setObservaciones] = useState("")

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleObservacionesChange = (value: string) => {
    if (value.length <= 30) {
      setObservaciones(value)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Unified Header - spans full width */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          {/* Menu Icon */}
          <Menu className="w-4 h-4 text-gray-600" />

          {/* Simulador de Gestor */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
              P
            </div>
            <span className="text-sm font-medium text-gray-900">Simulador de Gestor</span>
          </div>

          {/* Datos del trámite */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
              <User className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Datos del trámite</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">NU</span>
          <span className="text-sm text-gray-500">Nuevo Usuario</span>
          <Button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1 h-8">Salir</Button>
        </div>
      </div>

      {/* Main content with sidebar and form */}
      <div className="flex">
        {/* Sidebar - remove the old header section */}
        <div className="w-56 bg-slate-600 text-white min-h-screen flex flex-col">
          <nav className="p-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                <Phone className="w-3 h-3" />
                <span>Trámites Portabilidad</span>
              </div>
              <div className="ml-5 space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>Llamado Porta In</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>Llamado Porta Lead</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>Trámite Referido Out</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>Agenda Personal</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-300 py-1 mt-3">
                <Phone className="w-3 h-3" />
                <span>Trámites Voz</span>
              </div>
              <div className="ml-5 space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>Llamado Voz In</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>Llamado Voz Out</span>
                </div>
              </div>

              <div className="text-xs text-white py-1 mt-3 font-medium">Trámites BAF</div>
              <div className="ml-5 space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>BAF In</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>BAF Out</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>BAF Lead</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 py-1">
                  <Phone className="w-3 h-3" />
                  <span>Referidos</span>
                </div>
              </div>
            </div>
          </nav>

          {/* Pink circle at bottom */}
          <div className="mt-auto p-4">
            <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">+</span>
            </div>
          </div>
        </div>

        {/* Main Content - remove the old header */}
        <div className="flex-1 bg-gray-100">
          {/* Form Content - keep existing form content */}
          <div className="p-6">
            <div className="max-w-4xl space-y-4">
              {/* Orden de Trabajo */}
              <div className="bg-white rounded border border-gray-200 shadow-sm">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection("ordenTrabajo")}
                >
                  <h2 className="text-sm font-medium text-gray-700">Orden de Trabajo</h2>
                  {expandedSections.ordenTrabajo ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                {expandedSections.ordenTrabajo && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <div className="mt-4 max-w-xs">
                      <Label htmlFor="numeroOrden" className="text-xs text-gray-600">
                        Número de orden (OT) *
                      </Label>
                      <Input
                        id="numeroOrden"
                        className="mt-1 h-8 text-sm border-red-300 focus:border-red-500 focus:ring-red-500"
                        placeholder=""
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Información Personal */}
              <div className="bg-white rounded border border-gray-200 shadow-sm">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection("informacionPersonal")}
                >
                  <h2 className="text-sm font-medium text-gray-700">Información Personal</h2>
                  {expandedSections.informacionPersonal ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                {expandedSections.informacionPersonal && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="apellido" className="text-xs text-gray-600">
                          Apellido
                        </Label>
                        <Input id="apellido" className="mt-1 h-8 text-sm" />
                      </div>
                      <div>
                        <Label htmlFor="nombre" className="text-xs text-gray-600">
                          Nombre
                        </Label>
                        <Input id="nombre" className="mt-1 h-8 text-sm" />
                      </div>
                      <div>
                        <Label htmlFor="fechaNacimiento" className="text-xs text-gray-600">
                          Fecha Nacimiento
                        </Label>
                        <div className="relative">
                          <Input id="fechaNacimiento" type="date" className="mt-1 h-8 text-sm" />
                          <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="tipoDocumento" className="text-xs text-gray-600">
                          Tipo de Documento
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 h-8 text-sm">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dni">DNI</SelectItem>
                            <SelectItem value="pasaporte">Pasaporte</SelectItem>
                            <SelectItem value="cedula">Cédula</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="nroDocumento" className="text-xs text-gray-600">
                          Nro. Documento
                        </Label>
                        <div className="relative">
                          <Input id="nroDocumento" className="mt-1 h-8 text-sm" />
                          <User className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs text-gray-600">
                          Email
                        </Label>
                        <div className="relative">
                          <Input id="email" type="email" className="mt-1 h-8 text-sm" />
                          <Mail className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="prefijo1" className="text-xs text-gray-600">
                          Prefijo
                        </Label>
                        <Input id="prefijo1" className="mt-1 h-8 text-sm" />
                      </div>
                      <div>
                        <Label htmlFor="telefono1" className="text-xs text-gray-600">
                          Teléfono
                        </Label>
                        <div className="relative">
                          <Input id="telefono1" className="mt-1 h-8 text-sm" />
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-600 rounded flex items-center justify-center">
                            <Phone className="w-2 h-2 text-white" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="prefijo2" className="text-xs text-gray-600">
                          Prefijo adicional
                        </Label>
                        <Input id="prefijo2" className="mt-1 h-8 text-sm" />
                      </div>
                      <div>
                        <Label htmlFor="telefono2" className="text-xs text-gray-600">
                          Teléfono adicional
                        </Label>
                        <div className="relative">
                          <Input id="telefono2" className="mt-1 h-8 text-sm" />
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-600 rounded flex items-center justify-center">
                            <Phone className="w-2 h-2 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Gestión del Plan */}
              <div className="bg-white rounded border border-gray-200 shadow-sm">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection("gestionPlan")}
                >
                  <h2 className="text-sm font-medium text-gray-700">Gestión del plan</h2>
                  {expandedSections.gestionPlan ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                {expandedSections.gestionPlan && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <div className="mt-4">
                      <Label htmlFor="planSeleccion" className="text-xs text-gray-600">
                        Seleccionar Plan
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-1 h-8 text-sm">
                          <SelectValue placeholder="Seleccionar plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2play-100mb">2 PLAY - 100MB</SelectItem>
                          <SelectItem value="2play-300mb">2 PLAY - 300MB</SelectItem>
                          <SelectItem value="2play-600mb">2 PLAY - 600MB</SelectItem>
                          <SelectItem value="3play-100mb">3 PLAY - 100MB</SelectItem>
                          <SelectItem value="3play-300mb">3 PLAY - 300MB</SelectItem>
                          <SelectItem value="3play-600mb">3 PLAY - 600MB</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>

              {/* Domicilio */}
              <div className="bg-white rounded border border-gray-200 shadow-sm">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection("domicilio")}
                >
                  <h2 className="text-sm font-medium text-gray-700">Domicilio</h2>
                  {expandedSections.domicilio ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                {expandedSections.domicilio && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="calle" className="text-xs text-gray-600">
                          Calle
                        </Label>
                        <div className="relative">
                          <Input id="calle" className="mt-1 h-8 text-sm" />
                          <Home className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="nro" className="text-xs text-gray-600">
                          Nro
                        </Label>
                        <div className="relative">
                          <Input id="nro" className="mt-1 h-8 text-sm" />
                          <Building className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="piso" className="text-xs text-gray-600">
                          Piso
                        </Label>
                        <div className="relative">
                          <Input id="piso" className="mt-1 h-8 text-sm" />
                          <MoreHorizontal className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="departamento" className="text-xs text-gray-600">
                          Departamento
                        </Label>
                        <div className="relative">
                          <Input id="departamento" className="mt-1 h-8 text-sm" />
                          <Building className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="pais" className="text-xs text-gray-600">
                          País
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 h-8 text-sm">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="argentina">Argentina</SelectItem>
                            <SelectItem value="chile">Chile</SelectItem>
                            <SelectItem value="uruguay">Uruguay</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="provincia" className="text-xs text-gray-600">
                          Provincia
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 h-8 text-sm">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buenosaires">Buenos Aires</SelectItem>
                            <SelectItem value="cordoba">Córdoba</SelectItem>
                            <SelectItem value="santafe">Santa Fe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="localidad" className="text-xs text-gray-600">
                          Localidad
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 h-8 text-sm">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="caba">CABA</SelectItem>
                            <SelectItem value="laplata">La Plata</SelectItem>
                            <SelectItem value="rosario">Rosario</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="codigoPostal" className="text-xs text-gray-600">
                          Código Postal
                        </Label>
                        <Input id="codigoPostal" className="mt-1 h-8 text-sm" />
                      </div>
                      <div>
                        <Label htmlFor="franjaHoraria" className="text-xs text-gray-600">
                          Franja Horaria
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-1 h-8 text-sm">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc-3">UTC-3</SelectItem>
                            <SelectItem value="utc-4">UTC-4</SelectItem>
                            <SelectItem value="utc-5">UTC-5</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Observaciones */}
              <div className="bg-white rounded border border-gray-200 shadow-sm">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection("observaciones")}
                >
                  <h2 className="text-sm font-medium text-gray-700">Observaciones</h2>
                  {expandedSections.observaciones ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                {expandedSections.observaciones && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <div className="mt-4">
                      <Label htmlFor="observaciones" className="text-xs text-gray-600">
                        Observaciones ({observaciones.length}/30)
                      </Label>
                      <Textarea
                        id="observaciones"
                        className="mt-1 text-sm resize-none"
                        rows={3}
                        value={observaciones}
                        onChange={(e) => handleObservacionesChange(e.target.value)}
                        placeholder="Escriba sus observaciones aquí..."
                        maxLength={30}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom right button */}
            <div className="fixed bottom-6 right-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">Salir</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
