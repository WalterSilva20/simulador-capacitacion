"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Settings, Zap, CheckCircle } from "lucide-react"

export default function SimuladorPortabilidad() {
  const [activeTab, setActiveTab] = useState("gestor")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center tracking-wide">
            BIENVENIDO AL SIMULADOR DE PORTABILIDAD
          </h1>
          <p className="text-red-100 text-center mt-2 text-sm md:text-base">
            Simula y gestiona procesos de portabilidad de manera eficiente
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-800 shadow-md">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-transparent h-auto p-0">
              <TabsTrigger
                value="gestor"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-300 hover:text-white hover:bg-slate-700/50 py-4 px-8 text-lg font-semibold transition-all duration-200"
              >
                <Settings className="w-5 h-5 mr-2" />
                GESTOR
              </TabsTrigger>
              <TabsTrigger
                value="stealth"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-300 hover:text-white hover:bg-slate-700/50 py-4 px-8 text-lg font-semibold transition-all duration-200"
              >
                <Shield className="w-5 h-5 mr-2" />
                STEALTH
              </TabsTrigger>
            </TabsList>

            {/* Content Areas */}
            <div className="py-8">
              <TabsContent value="gestor" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Main Action Card */}
                  <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50 border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl text-slate-800 flex items-center">
                            <Settings className="w-6 h-6 mr-2 text-red-600" />
                            Modo Gestor
                          </CardTitle>
                          <CardDescription className="text-slate-600 mt-2">
                            Administra y configura procesos de portabilidad con herramientas avanzadas
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200">
                          Activo
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Iniciar Nueva Simulación
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Features Card */}
                  <Card className="bg-white border-slate-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-800">Características</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-600">Gestión completa</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-600">Reportes detallados</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-600">Configuración avanzada</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-600">Monitoreo en tiempo real</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="stealth" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Stealth Mode Card */}
                  <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl flex items-center">
                            <Shield className="w-6 h-6 mr-2 text-green-400" />
                            Modo Stealth
                          </CardTitle>
                          <CardDescription className="text-slate-300 mt-2">
                            Operaciones discretas y seguras con máxima privacidad
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-green-400 text-green-400">
                          Seguro
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          Activar Modo Stealth
                          <Zap className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Security Features */}
                  <Card className="bg-slate-800 border-slate-700 shadow-lg text-white">
                    <CardHeader>
                      <CardTitle className="text-lg">Seguridad</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-slate-300">Encriptación end-to-end</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-slate-300">Anonimización de datos</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-slate-300">Logs seguros</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-slate-300">Acceso restringido</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Simulador de Portabilidad. Todos los derechos reservados.</p>
          <p className="text-xs mt-2 text-slate-400">Sistema seguro y confiable para gestión de portabilidad</p>
        </div>
      </footer>
    </div>
  )
}
