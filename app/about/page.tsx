import type { Metadata } from 'next';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import JsonLd from '@/components/JsonLd';
import { pageMeta, personJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta('/about/', { title: 'Sobre mí', type: 'profile', description: 'Gustavo Rodríguez, desarrollador de software en Uruguay con más de 17 años construyendo productos. Socio en Solcre, Dendra y Bloque. Charlas de Angular.' });

export default function SobreMi() {
  return <><JsonLd data={personJsonLd()} /><About page /><Experience /><Certifications variant="band" /></>;
}
