// Utilidades sin acceso a archivos: se pueden usar también en el navegador.
const fmt = new Intl.DateTimeFormat('es-UY', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d?: string) => (d ? fmt.format(new Date(d + 'T00:00:00Z')) : 'Borrador');

export const toneClass = (t: string) => ({ ok: 'b-ok', prod: 'b-prod', soon: 'b-soon' } as Record<string, string>)[t] ?? 'b-prod';
