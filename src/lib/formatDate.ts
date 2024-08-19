import type { DateField } from "@prismicio/client";


export function formatDate(dateStr: DateField): string {
  if (!dateStr) return '';
    const date = new Date(dateStr); 

    //Options for formatting
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('us-EN', options).format(date);
}