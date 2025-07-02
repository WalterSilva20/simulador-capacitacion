"use client"

import type React from "react"
import { useState } from "react"

export default function CargaSolicitudesPage() {
  const [activeTab, setActiveTab] = useState("compania")
  const [formData, setFormData] = useState({
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
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleKeyDown = (e: React.KeyboardEvent, field: string) => {
    if (e.key === "Tab") {
      setTimeout(() => {
        const autoFillData: { [key: string]: string } = {
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

        if (autoFillData[field]) {
          setFormData((prev) => ({ ...prev, [field]: autoFillData[field] }))
        }
      }, 50)
    }
  }

  return (
    <div className="min-h-screen bg-[#c0c0c0] font-sans text-xs">
      {/* Barra de menú superior */}
      <div className="bg-[#c0c0c0] border-b border-[#808080] shadow-sm">
        <div className="flex items-center text-xs">
          <span className="px-3 py-1 hover:bg-[#0078d4] hover:text-white cursor-pointer border-r border-[#808080]">
            Menú Principal
          </span>
          <span className="px-3 py-1 hover:bg-[#0078d4] hover:text-white cursor-pointer border-r border-[#808080]">
            Consultas
          </span>
          <span className="px-3 py-1 hover:bg-[#0078d4] hover:text-white cursor-pointer border-r border-[#808080]">
            Procesos
          </span>
          <span className="px-3 py-1 hover:bg-[#0078d4] hover:text-white cursor-pointer">Window</span>
        </div>
      </div>

      {/* Título de la ventana */}
      <div className="bg-[#0078d4] text-white px-2 py-1 text-center font-bold text-sm border-b border-[#004578]">
        Carga de Solicitudes de Servicio para Celular
      </div>

      {/* Información del módulo */}
      <div className="bg-[#f0f0f0] border-b border-[#808080] px-2 py-1 text-xs flex justify-between">
        <span>Módulo: Capacitación</span>
        <span>Usuario: Nuevo</span>
        <span>Versión: local</span>
      </div>

      {/* Barra de herramientas */}
      <div className="bg-[#f0f0f0] border-b border-[#808080] p-1 flex gap-1">
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          📁
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          💾
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          ✂️
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          📋
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          ↩️
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          ↪️
        </div>
        <div className="w-6 h-6 bg-[#90ee90] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#80dd80]">
          ➕
        </div>
        <div className="w-6 h-6 bg-[#ffb6c1] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#ffa6b1]">
          ❌
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          ⬆️
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          ⬇️
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          ⬇️
        </div>
        <div className="w-6 h-6 bg-[#e0e0e0] border border-[#808080] flex items-center justify-center text-xs cursor-pointer hover:bg-[#d0d0d0]">
          ❓
        </div>
      </div>

      {/* Título de la sección */}
      <div className="bg-[#004080] text-white px-2 py-1 text-xs font-bold">
        CA2100 - Carga de Solicitudes de Servicio para Celular - Telemarketing
      </div>

      {/* Pestañas */}
      <div className="bg-[#c0c0c0] border-b border-[#808080]">
        <div className="flex">
          <div
            className={`${
              activeTab === "compania"
                ? "bg-white border-t-2 border-l-2 border-r"
                : "bg-[#c0c0c0] border-t border-l border-r hover:bg-[#d0d0d0] cursor-pointer"
            } border-[#808080] px-3 py-1 text-xs font-bold`}
            onClick={() => setActiveTab("compania")}
          >
            Compañía / Ne
          </div>
          <div
            className={`${
              activeTab === "cliente"
                ? "bg-white border-t-2 border-l-2 border-r"
                : "bg-[#c0c0c0] border-t border-l border-r hover:bg-[#d0d0d0] cursor-pointer"
            } border-[#808080] px-3 py-1 text-xs`}
            onClick={() => setActiveTab("cliente")}
          >
            Cliente / Cuenta
          </div>
          <div className="bg-[#c0c0c0] border-t border-l border-r border-[#808080] px-3 py-1 text-xs cursor-pointer hover:bg-[#d0d0d0]">
            Condiciones
          </div>
          <div className="bg-[#c0c0c0] border-t border-l border-r border-[#808080] px-3 py-1 text-xs cursor-pointer hover:bg-[#d0d0d0]">
            Tarjetas Prepa
          </div>
          <div className="bg-[#c0c0c0] border-t border-l border-r border-[#808080] px-3 py-1 text-xs cursor-pointer hover:bg-[#d0d0d0]">
            Forma de Pago
          </div>
          <div className="bg-[#c0c0c0] border-t border-l border-r border-[#808080] px-3 py-1 text-xs cursor-pointer hover:bg-[#d0d0d0]">
            Documentación
          </div>
          <div className="bg-[#c0c0c0] border-t border-l border-r border-[#808080] px-3 py-1 text-xs cursor-pointer hover:bg-[#d0d0d0]">
            Pedidos
          </div>
          <div className="bg-[#c0c0c0] border-t border-l border-r border-[#808080] px-3 py-1 text-xs cursor-pointer hover:bg-[#d0d0d0]">
            Datos Tarjeta
          </div>
        </div>
      </div>

      {/* Contenido del formulario */}
      <div className="bg-[#c0c0c0] p-2">
        {activeTab === "compania" && (
          <>
            {/* Checkboxes superiores derecha */}
            <div className="flex justify-end mb-2">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    id="excepcion"
                    checked={formData.excepcion}
                    onChange={(e) => handleInputChange("excepcion", e.target.checked)}
                    className="w-3 h-3"
                  />
                  <label htmlFor="excepcion" className="text-xs">
                    Excepción ?
                  </label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    id="portacion"
                    checked={formData.portacion}
                    onChange={(e) => handleInputChange("portacion", e.target.checked)}
                    className="w-3 h-3"
                  />
                  <label htmlFor="portacion" className="text-xs">
                    Portación ?
                  </label>
                </div>
              </div>
            </div>

            {/* Primera fila */}
            <div className="flex gap-1 mb-1 items-end">
              <div className="flex flex-col">
                <label className="text-red-600 font-bold text-xs mb-1">Campaña</label>
                <input
                  type="text"
                  value={formData.campana}
                  onChange={(e) => handleInputChange("campana", e.target.value)}
                  className="w-8 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
              <input
                type="text"
                value={formData.nombreEmpresa}
                onChange={(e) => handleInputChange("nombreEmpresa", e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, "nombreEmpresa")}
                className="w-48 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                placeholder="NOMBRE DE LA EMPRESA"
              />
              <div className="flex flex-col">
                <label className="text-red-600 font-bold text-xs mb-1">Megaregión</label>
                <input
                  type="text"
                  value={formData.megaregion}
                  onChange={(e) => handleInputChange("megaregion", e.target.value)}
                  className="w-24 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-red-600 font-bold text-xs mb-1">Negocio</label>
                <input
                  type="text"
                  value={formData.negocio}
                  onChange={(e) => handleInputChange("negocio", e.target.value)}
                  className="w-8 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-red-600 font-bold text-xs mb-1">Regular / P A</label>
                <input
                  type="text"
                  value={formData.regularPA}
                  onChange={(e) => handleInputChange("regularPA", e.target.value)}
                  className="w-20 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
            </div>

            {/* Segunda fila */}
            <div className="flex gap-2 mb-2 items-center">
              <div className="flex flex-col">
                <label className="text-xs mb-1">Nro. Pedido</label>
                <input
                  type="text"
                  value={formData.nroPedido}
                  onChange={(e) => handleInputChange("nroPedido", e.target.value)}
                  className="w-16 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="preactivacion"
                  checked={formData.preactivacion}
                  onChange={(e) => handleInputChange("preactivacion", e.target.checked)}
                  className="w-3 h-3"
                />
                <label htmlFor="preactivacion" className="text-xs">
                  Preactivación ?
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="cambioTitularidad"
                  checked={formData.cambioTitularidad}
                  onChange={(e) => handleInputChange("cambioTitularidad", e.target.checked)}
                  className="w-3 h-3"
                />
                <label htmlFor="cambioTitularidad" className="text-xs">
                  Cambio Titularidad ?
                </label>
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-1">NIM anterior</label>
                <input
                  type="text"
                  value={formData.nimAnterior}
                  onChange={(e) => handleInputChange("nimAnterior", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "nimAnterior")}
                  className="w-20 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-1">Nro. Serie</label>
                <input
                  type="text"
                  value={formData.nroSerie}
                  onChange={(e) => handleInputChange("nroSerie", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "nroSerie")}
                  className="w-20 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
            </div>

            {/* Sección Entidad */}
            <div className="border border-[#808080] bg-[#c0c0c0] p-2 mb-2">
              <label className="font-bold text-xs block mb-2">Entidad</label>
              <div className="flex gap-1 mb-1 items-end">
                <div className="flex flex-col">
                  <label className="text-red-600 font-bold text-xs mb-1">Entidad</label>
                  <input
                    type="text"
                    value={formData.entidad}
                    onChange={(e) => handleInputChange("entidad", e.target.value)}
                    className="w-16 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <input
                  type="text"
                  value={formData.nombreEntidad}
                  onChange={(e) => handleInputChange("nombreEntidad", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "nombreEntidad")}
                  className="w-48 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  placeholder="NOMBRE DE LA ENTIDAD"
                />
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Vendedor</label>
                  <input
                    type="text"
                    value={formData.vendedor}
                    onChange={(e) => handleInputChange("vendedor", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "vendedor")}
                    className="w-12 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <input
                  type="text"
                  value={formData.capacitacion}
                  onChange={(e) => handleInputChange("capacitacion", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "capacitacion")}
                  className="w-32 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  placeholder="CAPACITACION"
                />
              </div>
              <div className="flex gap-1">
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Pos</label>
                  <input
                    type="text"
                    value={formData.pos}
                    onChange={(e) => handleInputChange("pos", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "pos")}
                    className="w-16 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Fila de checkboxes */}
            <div className="flex gap-4 mb-2 items-center">
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="equipoPropio"
                  checked={formData.equipoPropio}
                  onChange={(e) => handleInputChange("equipoPropio", e.target.checked)}
                  className="w-3 h-3"
                />
                <label htmlFor="equipoPropio" className="text-xs">
                  Equipo Propio ?
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="porPDA"
                  checked={formData.porPDA}
                  onChange={(e) => handleInputChange("porPDA", e.target.checked)}
                  className="w-3 h-3"
                />
                <label htmlFor="porPDA" className="text-xs">
                  Por PDA ?
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="migracionPPaReg"
                  checked={formData.migracionPPaReg}
                  onChange={(e) => handleInputChange("migracionPPaReg", e.target.checked)}
                  className="w-3 h-3"
                />
                <label htmlFor="migracionPPaReg" className="text-xs">
                  Migración PP a Reg ?
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="fwa"
                  checked={formData.fwa}
                  onChange={(e) => handleInputChange("fwa", e.target.checked)}
                  className="w-3 h-3"
                />
                <label htmlFor="fwa" className="text-xs">
                  FWA
                </label>
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-1">NIM anterior</label>
                <input
                  type="text"
                  value={formData.nimAnterior}
                  className="w-20 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-1">Nro. Serie</label>
                <input
                  type="text"
                  value={formData.nroSerie}
                  className="w-20 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  readOnly
                />
              </div>
            </div>

            {/* Sección Portación */}
            <div className="border border-[#808080] bg-[#c0c0c0] p-2 mb-2">
              <label className="font-bold text-xs block mb-2">Portación</label>
              <div className="flex gap-1 mb-1 items-end">
                <div className="flex flex-col">
                  <label className="text-red-600 font-bold text-xs mb-1">Tipo de Portación</label>
                  <input
                    type="text"
                    value={formData.tipoPortacion}
                    onChange={(e) => handleInputChange("tipoPortacion", e.target.value)}
                    className="w-8 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-red-600 font-bold text-xs mb-1">Negocio Actual</label>
                  <input
                    type="text"
                    value={formData.negocioActual}
                    onChange={(e) => handleInputChange("negocioActual", e.target.value)}
                    className="w-20 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Formulario</label>
                  <input
                    type="text"
                    value={formData.formulario}
                    onChange={(e) => handleInputChange("formulario", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "formulario")}
                    className="w-32 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Nro. SPN</label>
                  <input
                    type="text"
                    value={formData.nroSPN}
                    onChange={(e) => handleInputChange("nroSPN", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "nroSPN")}
                    className="w-20 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="spnManual"
                  checked={formData.spnManual}
                  onChange={(e) => handleInputChange("spnManual", e.target.checked)}
                  className="w-3 h-3"
                />
                <label htmlFor="spnManual" className="text-xs">
                  SPN Manual ?
                </label>
              </div>
            </div>

            {/* Sección Formulario */}
            <div className="border border-[#808080] bg-[#c0c0c0] p-2">
              <label className="font-bold text-xs block mb-2">Formulario</label>
              <div className="flex gap-2 items-center">
                <div className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    id="sdsManual"
                    checked={formData.sdsManual}
                    onChange={(e) => handleInputChange("sdsManual", e.target.checked)}
                    className="w-3 h-3"
                  />
                  <label htmlFor="sdsManual" className="text-xs">
                    SDS Manual ?
                  </label>
                </div>
                <input
                  type="text"
                  value={formData.formularioSDS}
                  onChange={(e) => handleInputChange("formularioSDS", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "formularioSDS")}
                  className="w-32 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                />
                <label className="text-xs">Nro. SDS</label>
                <input
                  type="text"
                  value={formData.nroSDS}
                  onChange={(e) => handleInputChange("nroSDS", e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      e.preventDefault()
                      setActiveTab("cliente")
                    }
                    handleKeyDown(e, "nroSDS")
                  }}
                  className="w-20 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "cliente" && (
          <>
            {/* Contenido de Cliente / Cuenta */}
            <div className="space-y-2">
              {/* Primera fila - Datos personales */}
              <div className="flex gap-2 items-end">
                <div className="flex flex-col">
                  <label className="text-red-600 font-bold text-xs mb-1">DNI</label>
                  <input
                    type="text"
                    value={formData.dni}
                    onChange={(e) => handleInputChange("dni", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "dni")}
                    className="w-24 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-red-600 font-bold text-xs mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    value={formData.nombreCompleto}
                    onChange={(e) => handleInputChange("nombreCompleto", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "nombreCompleto")}
                    className="w-64 h-5 bg-white border border-[#808080] text-xs px-1 font-mono"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Teléfono</label>
                  <input
                    type="text"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "telefono")}
                    className="w-32 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
              </div>

              {/* Segunda fila - Contacto */}
              <div className="flex gap-2 items-end">
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "email")}
                    className="w-48 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Dirección</label>
                  <input
                    type="text"
                    value={formData.direccion}
                    onChange={(e) => handleInputChange("direccion", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "direccion")}
                    className="w-64 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
              </div>

              {/* Tercera fila - Ubicación */}
              <div className="flex gap-2 items-end">
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Localidad</label>
                  <input
                    type="text"
                    value={formData.localidad}
                    onChange={(e) => handleInputChange("localidad", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "localidad")}
                    className="w-32 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Código Postal</label>
                  <input
                    type="text"
                    value={formData.codigoPostal}
                    onChange={(e) => handleInputChange("codigoPostal", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "codigoPostal")}
                    className="w-20 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-1">Provincia</label>
                  <input
                    type="text"
                    value={formData.provincia}
                    onChange={(e) => handleInputChange("provincia", e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "provincia")}
                    className="w-32 h-5 bg-[#e0e0e0] border border-[#808080] text-xs px-1 font-mono"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
