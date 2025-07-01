"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, HelpCircle } from "lucide-react"

export default function StealthInterface() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
    setActiveSubmenu(null)
  }

  const handleSubmenuClick = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Menu Bar */}
      <div className="bg-gray-500 text-white text-sm border-b border-gray-600">
        <div className="flex">
          {/* Menu Principal */}
          <div className="relative">
            <button
              className="px-3 py-1 hover:bg-gray-600 flex items-center gap-1"
              onClick={() => handleMenuClick("principal")}
            >
              Menú Principal
              <ChevronDown className="w-3 h-3" />
            </button>
            {activeMenu === "principal" && (
              <div className="absolute top-full left-0 bg-white text-black border border-gray-300 shadow-lg z-10 min-w-32">
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 1</div>
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 2</div>
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 3</div>
              </div>
            )}
          </div>

          {/* Consultas */}
          <div className="relative">
            <button
              className="px-3 py-1 hover:bg-gray-600 flex items-center gap-1"
              onClick={() => handleMenuClick("consultas")}
            >
              Consultas
              <ChevronDown className="w-3 h-3" />
            </button>
            {activeMenu === "consultas" && (
              <div className="absolute top-full left-0 bg-white text-black border border-gray-300 shadow-lg z-10 min-w-32">
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 1</div>
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 2</div>
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 3</div>
              </div>
            )}
          </div>

          {/* Procesos */}
          <div className="relative">
            <button
              className="px-3 py-1 hover:bg-gray-600 flex items-center gap-1"
              onClick={() => handleMenuClick("procesos")}
            >
              Procesos
              <ChevronDown className="w-3 h-3" />
            </button>
            {activeMenu === "procesos" && (
              <div className="absolute top-full left-0 bg-white text-black border border-gray-300 shadow-lg z-10 min-w-32">
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 1</div>
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 2</div>
                <div
                  className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm flex items-center justify-between relative"
                  onMouseEnter={() => setActiveSubmenu("procesos-sub")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  Opción 3
                  <ChevronRight className="w-3 h-3" />
                  {activeSubmenu === "procesos-sub" && (
                    <div className="absolute top-0 left-full bg-white text-black border border-gray-300 shadow-lg min-w-32">
                      <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 1</div>
                      <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 2</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Window */}
          <div className="relative">
            <button
              className="px-3 py-1 hover:bg-gray-600 flex items-center gap-1"
              onClick={() => handleMenuClick("window")}
            >
              Window
              <ChevronDown className="w-3 h-3" />
            </button>
            {activeMenu === "window" && (
              <div className="absolute top-full left-0 bg-white text-black border border-gray-300 shadow-lg z-10 min-w-32">
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 1</div>
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 2</div>
                <div className="py-1 px-3 hover:bg-blue-100 cursor-pointer text-sm">Opción 3</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Title Bar */}
      <div className="bg-red-600 text-white px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold">Bienvenidos a STEALTH</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">Nuevo Usuario</span>
          <button className="bg-red-700 hover:bg-red-800 px-3 py-1 text-sm rounded">Salir</button>
        </div>
      </div>

      {/* Environment Info Bar */}
      <div className="bg-black text-white px-4 py-1 text-xs flex justify-end">
        <span>Ambiente: PRODUCCION ARGENTINA 🇦🇷</span>
      </div>

      {/* Main Content Area */}
      <div className="p-4 bg-gray-50 min-h-[calc(100vh-120px)]">
        {/* Help Section */}
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-4 h-4 text-red-600" />
          <span className="text-sm text-gray-700">Necesita ayuda?</span>
        </div>

        {/* Main content area - light background matching the original */}
        <div className="bg-white border border-gray-300 rounded p-4 min-h-96">{/* Content goes here */}</div>
      </div>

      {/* Click outside to close menus */}
      {(activeMenu || activeSubmenu) && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            setActiveMenu(null)
            setActiveSubmenu(null)
          }}
        />
      )}
    </div>
  )
}
