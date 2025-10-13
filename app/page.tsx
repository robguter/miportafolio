'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { bebas } from "@/components/ui/fonts";
import React from 'react';
import ContactForm from '@/components/ui/ContactForm';
import Link from "next/link";
import "@/public/styles/estilo.css"

var sMiFoto = 'images/211216.jpg'
var imdevs = 'images/devs.png'
var imphpy = 'images/phpy.png'
var imjscr = 'images/jscr.png'
var imkoan = 'images/koan.png'
var immypo = 'images/mypo.png'
var imscpy = 'images/scpy.png'
var imfxja = 'images/fxja.jpg'
var imjaan = 'images/jaan.jpg'

var imphp = 'images/php.png'
var imjav = 'images/javafx.png'
var imand = 'images/android.png'
var imkot = 'images/kotlin.png'
var imcsh = 'images/cshard.png'
var impyt = 'images/python.png'
var immys = 'images/mysql.png'

var lkmimail = "mailto:robguter114@gmail.com, robgutgom@hotmail.com";
var lkmigith = "https://github.com/robguter";
const annoCur = new Date().getFullYear();

interface FormData {
  user_name: string; // Nombre
  user_email: string; // Email
  subject: string; // Asunto
  message: string; // Mensaje
}
// Coloca esta función ANTES del "export default function Home() {"

const handleFormSubmit = async (data: FormData): Promise<void> => {
  console.log("Datos recibidos para el envío:", data);

  try {
    // ----------------------------------------------------
    // LÓGICA DE ENVÍO REAL (Ejemplo: Fetch a una API Route / Next.js)
    // ----------------------------------------------------
    // Asegúrate de que esta URL coincida con tu endpoint de servidor
    const response = await fetch('/api/send-email', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        // Lanza un error para que ContactForm.tsx lo capture
        const errorData = await response.json();
        throw new Error(errorData.message || `Fallo en el envío: ${response.status}`);
    }

    console.log("Envío de email exitoso!");

  } catch (error) {
    // Re-lanza el error para que ContactForm.tsx muestre el mensaje de error
    console.error("Error al procesar el envío:", error);
    throw error;
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-dark/50 backdrop-blur-sm border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`${bebas.className} "font-bold text-xl text-foreground"`}>Analista Programador</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white-50 hover:text-foreground">
                  Acerca de
              </a>
              <a href="#skills" className="text-white-50 hover:text-foreground">
                  Habilidades
              </a>
              <a href="#projects" className="text-white-50 hover:text-foreground">
                  Proyectos
              </a>
              <a href="#contact" className="text-white-50 hover:text-foreground">
                  Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 mb-5">
        <div className="max-w-6xl mx-auto text-center">

          <div className="grid md:grid-cols-2 gap-8 mt-0">
            <div className="mr-0">
              <div className="w-35 h-35 mx-auto mb-7 mt-0 bg-primary-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <img src={sMiFoto} className={`${"oimgp"} "w-28 h-32 mt-0 rounded-full hover:rounded-lg"`} />
              </div>
              <h1 className={`${bebas.className} "text-3xl md:text-5xl font-bold text-foreground mb-2 text-balance"`}>Robert Gutiérrez</h1>

              <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
                Especialista en desarrollo backend, frontend y móvil con experiencia en múltiples tecnologías y bases de datos.
                Experto en PHP, MySql, PostgreSQL, JavaScript, JQuery, CSS, conocimientos avanzados en Android Studio, Kotlin,
                Java, JavaFx, C#, Visial Basic, con conocimientos suficientes en Python y MEAN (Mongo, Express, Angular
                y Node) y conocimientos básicos en Next, React.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-0 ml-25 mb-0">
              <div className="flex flex-wrap md:grid-cols-3 justify-center gap-8 mt-0 mb-0">
                <div className="h-50">
                  <img className={`${"oimg"}`} src={imphp} alt="PHP" title="PHP" />
                  <img className={`${"oimgb"}`} src={imkot} alt="Kotlin" title="Kotlin" />
                </div>
                <div className="h-50">
                  <img className={`${"oimg"}`} src={imjav} alt="JavaFX" title="JavaFX" />
                  <img className={`${"oimgb"}`} src={imcsh} alt="CShard" title="CShard" />
                </div>
                <div className="h-50">
                  <img className={`${"oimg"}`} src={imand} alt="Android" title="Android" />
                  <img className={`${"oimgb"}`} src={impyt} alt="Pyton" title="Pyton" />
                </div>
                <div className="h-40 mt-0">
                  <img className={`${"oimgb"}`} src={immys} alt="MySql" title="MySql" />
                </div>
              </div>
              <div className="px-4 sm:px-6 lg:px-8 gap-8">
                <Link href={lkmimail} target="Otro">
                  <Button variant="outline" size="lg" className="ml-12 mr-9 bg-primary">
                    <Mail className="mr-2 h-4 w-4 mb-0 pb-0" />
                    Contactar
                  </Button>
                </Link>
                <Link href={lkmigith} target="Otro">
                  <Button variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent">
                    <Github className="mr-2 h-4 w-4 mb-0 pb-0" />
                    Ver GitHub
                  </Button>
                </Link>
              </div>
              <label id="about"></label>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-0 mb-5 px-4 sm:px-6 lg:px-8 bg-card/50">
      <section className="anima1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Acerca de Mí</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-primary/20"`}>
              <CardHeader>
                <CardTitle className="text-foreground">Experiencia Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Con sólida experiencia en desarrollo de aplicaciones backend y móviles.
                  Especializado en crear soluciones robustas y escalables utilizando tecnologías modernas.
                </p>
              </CardContent>
            </Card>
            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-primary/20"`}>
              <CardHeader>
                <CardTitle className="text-foreground">Enfoque Técnico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Me enfoco en escribir código limpio, mantenible y eficiente. Experiencia en arquitecturas MVC,
                  desarrollo de APIs REST y gestión de bases de datos relacionales.
                </p>
              </CardContent>
            </Card>
            <label id="skills"></label>
          </div>
        </div>
      </section>
      </section>

      {/* Skills Section */}
      <section className="py-20 mb-5 px-4 sm:px-6 lg:px-8 bg-card/50">
      <section className="anima1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-primary/20"`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PHP</span>
                  </div>
                  Desarrollo Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 space-x-1">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    PHP
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Python
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Desarrollo de aplicaciones web robustas y APIs RESTful
                </p>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-accent/20"`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">UI</span>
                  </div>
                  Desarrollo de Interfaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 space-x-1">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    JavaFX
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Android Studio
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Creación de interfaces de usuario intuitivas y responsivas
                </p>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-chart-1/20"`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-8 h-8 bg-chart-1 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DB</span>
                  </div>
                  Bases de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 space-x-1">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    PostgreSQL
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Diseño y optimización de bases de datos relacionales
                </p>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-chart-2/20"`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-8 h-8 bg-chart-2 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">KT</span>
                  </div>
                  Desarrollo Móvil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 space-x-1">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Kotlin
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Android Studio
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Aplicaciones móviles nativas para Android</p>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-chart-4/20"`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-8 h-8 bg-chart-4 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PY</span>
                  </div>
                  Automatización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 space-x-1">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Scripts
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Automatización de procesos y análisis de datos</p>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "hover:shadow-lg border-border hover:border-chart-5/20"`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-8 h-8 bg-chart-5 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FX</span>
                  </div>
                  Aplicaciones Desktop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 space-x-1">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    JavaFX
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Java
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Aplicaciones de escritorio multiplataforma</p>
              </CardContent>
            </Card>
            <label id="projects"></label>
          </div>
        </div>
      </section>
      </section>

      {/* Projects Section */}
      <section className="py-0 mb-5 px-4 sm:px-6 lg:px-8 bg-card/50">
      <section className="anima1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className={`${"ocard"} "group hover:shadow-xl border-border hover:border-primary/30"`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Sistema de Gestión
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Aplicación web desarrollada en PHP con MySQL
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Sistema completo de gestión empresarial con módulos de inventario, facturación y reportes avanzados.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-foreground">
                    PHP
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    Bootstrap
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "group hover:shadow-xl border-border hover:border-accent/30"`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  App Móvil Android
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Aplicación nativa desarrollada en Kotlin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Aplicación móvil para gestión de tareas con sincronización en tiempo real y notificaciones push.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-foreground">
                    Kotlin
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    Android Studio
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    SQLite
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "group hover:shadow-xl border-border hover:border-chart-1/30"`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Dashboard Analytics
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">Aplicación desktop con JavaFX</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Dashboard interactivo para análisis de datos con gráficos dinámicos y exportación de reportes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-foreground">
                    JavaFX
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    Charts
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "group hover:shadow-xl border-border hover:border-chart-2/30"`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  API REST
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Microservicio desarrollado en Python
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  API RESTful para integración de sistemas con autenticación JWT y documentación automática.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-foreground">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    FastAPI
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    PostgreSQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "group hover:shadow-xl border-border hover:border-chart-4/30"`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Sistema ERP
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">Solución empresarial completa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Sistema ERP modular con gestión de recursos humanos, contabilidad y control de inventarios.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-foreground">
                    PHP
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className={`${"ocard"} "group hover:shadow-xl border-border hover:border-chart-5/30"`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Herramientas DevOps
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">Scripts de automatización</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Conjunto de scripts para automatización de despliegues, backups y monitoreo de sistemas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-foreground">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    Bash
                  </Badge>
                  <Badge variant="outline" className="border-border text-foreground">
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-15 mb-33 px-4 sm:px-6 lg:px-8">
      <section className="anima1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${"ocard"} "border-border group hover:shadow-xl"`}>
              <h3 className="text-xl font-semibold pl-5 mb-6 text-foreground">Información de Contacto</h3>
              <div className="space-y-4 gap-8 pl-5">
                <Link href={lkmimail} target="Otro">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary gap-3" />
                    <span className="text-muted-foreground">Correos</span>
                  </div>
                </Link><br/>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+58 424 299 7367</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Caracas, Venezuela</span>
                </div>
                <Link href={"https://www.linkedin.com/in/robert-gutierrez-06295946/"} target="Otro">
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Linkedin</span>
                  </div>
                </Link><br/>
                <Link href={lkmigith} target="Otro">
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Github</span>
                  </div>
                </Link><br/>
              </div>
            </Card>
            <Card className={`${"ocard"} "border-border group hover:shadow-xl"`}>
              <CardHeader>
                <CardTitle className="text-foreground">Enviar Mensaje</CardTitle>
                <CardDescription className="text-muted-foreground">
                  ¿Tienes un proyecto en mente? ¡Hablemos!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Contacto</h2>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </section>

      {/* Footer */}
      <footer className="py-3 px-4 sm:px-6 lg:px-3 bg-card/50 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">©{annoCur} Ingeniero en Sistemas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
