interface MailtoOptions {
  to?: string;
  subject?: string;
  body?: string;
}

export function generateMailtoLink(options: MailtoOptions): string {
  const { to, subject, body } = options;

  let params = [];
  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }

  const queryString = params.length > 0 ? `?${params.join('&')}` : '';
  const recipient = to ? to : '';

  return `mailto:${recipient}${queryString}`;
}

// Ejemplo de uso:
/* const myMailtoLink = generateMailtoLink({
  to: 'soporte@ejemplo.com',
  subject: 'Consulta sobre mi cuenta',
  body: 'Hola,\nNecesito ayuda con el siguiente problema:\n\n[Describe tu problema aquí]'
});

console.log(myMailtoLink); */