import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react'; 
// Importa tus componentes UI de Shadcn/ui
// Asegúrate de que estos imports existan en tu proyecto:
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// 1. Define las claves (usa process.env para producción)
const SERVICE_ID = 'service_rrlygea';
const TEMPLATE_ID = 'template_uoh3gry'; 
const PUBLIC_KEY = 'P4KsT80QTUBvJ0_xO'; 

// 2. Interfaz con el campo 'subject' añadido
interface FormData {
  user_name: string;
  user_email: string;
  subject: string; // AGREGADO: Campo que estaba en el JSX de page.tsx
  message: string;
}

// 3. CLAVE: Define la interfaz de PROPS (si no recibe props, usa simplemente React.FC<{}> o React.FC)
// Ya que este formulario es auto-contenido (usa EmailJS), no necesita recibir props.
// Mantenemos la definición simple:
// interface ContactFormProps {} // No es necesaria si no recibe nada.

const ContactForm: React.FC = () => { // DEJA SOLO React.FC si no recibe props
  const form = useRef<HTMLFormElement>(null); 
  
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    subject: '', // Inicializar el nuevo campo
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatusMessage(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 3. Validación de todos los campos
    if (!form.current || !formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
        setStatusMessage('Error: Por favor, complete todos los campos.');
        return;
    }
    
    setIsSubmitting(true);
    setStatusMessage(null);

    // 4. Llamada a emailjs.sendForm
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (response) => {
          console.log('Correo enviado con éxito!', response.status, response.text);
          setStatusMessage('¡Tu mensaje ha sido enviado!');
          // Limpia el formulario
          setFormData({ user_name: '', user_email: '', subject: '', message: '' }); 
        },
        (error) => {
          console.error('Fallo el envío del correo:', error);
          setStatusMessage('❌ Error al enviar el mensaje. Inténtalo de nuevo.');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    // Usamos los componentes de Shadcn/ui que estaban en tu page.tsx
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      
      {/* Input de Nombre */}
      <Input
        type="text"
        name="user_name"
        placeholder="Tu nombre"
        value={formData.user_name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
      />

      {/* Input de Email */}
      <Input
        type="email"
        name="user_email"
        placeholder="Tu email"
        value={formData.user_email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
      />
      
      {/* Input de Asunto AGREGADO */}
      <Input
        type="text"
        name="subject"
        placeholder="Asunto"
        value={formData.subject}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
      />

      {/* Textarea de Mensaje */}
      <Textarea
        name="message"
        rows={4}
        placeholder="Tu mensaje"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
      ></Textarea>

      {/* Mensaje de estado */}
      {statusMessage && (
        <p className={`text-sm font-bold ${statusMessage.startsWith('✅') ? 'text-green-500' : 'text-red-500'}`}>
            {statusMessage}
        </p>
      )}
      
      {/* Botón de Envío */}
      <Button variant="outline" type="submit" size="lg" disabled={isSubmitting} className="bg-primary">
        <Mail className="mr-2 h-4 w-4" />
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </form>
  );
};

export default ContactForm;