import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * The structural blocks every page is built from:
 * PageHero (where am I, what is this page), Section (heading, then content)
 * and CtaBand (the closing call to action).
 */

/** A headline whose words rise into place one after another. */
export const Words: React.FC<{ children: string }> = ({ children }) => (
  <span className="words" aria-label={children}>
    {children.split(' ').map((word, i) => (
      <React.Fragment key={i}>
        <span aria-hidden="true">
          <span style={{ '--i': i } as React.CSSProperties}>{word}</span>
        </span>{' '}
      </React.Fragment>
    ))}
  </span>
);

interface PageHeroProps {
  title: string;
  lead?: React.ReactNode;
  image?: { src: string; alt: string };
  /** Parent pages, shown as a breadcrumb after "Home" */
  crumbs?: { name: string; href: string }[];
  /** Actions under the lead */
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, lead, image, crumbs = [], children }) => (
  <section className="aura">
    <div className="shell pt-32 lg:pt-40 pb-14 lg:pb-20 flex flex-col items-center text-center">
      <nav aria-label="Breadcrumb" className="meta flex flex-wrap items-center justify-center gap-1.5">
        {[{ name: 'Home', href: '/' }, ...crumbs].map((crumb) => (
          <React.Fragment key={crumb.href}>
            <Link href={crumb.href} className="hover:text-fg transition-colors">
              {crumb.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
          </React.Fragment>
        ))}
        <span className="text-fg">{title}</span>
      </nav>

      <h1 className="h-xl mt-8 max-w-4xl">
        <Words>{title}</Words>
      </h1>
      {lead && <p className="lead mt-6 max-w-xl fade-in">{lead}</p>}
      {children && (
        <div className="mt-9 w-full flex flex-wrap items-center justify-center gap-3 fade-in">{children}</div>
      )}
    </div>

    {image && (
      <div className="shell-wide">
        <div className="frame fade-in aspect-[4/3] sm:aspect-[16/7] !rounded-[2.5rem]">
          <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" preload />
        </div>
      </div>
    )}
  </section>
);

interface SectionProps {
  /** Spaced capitals above the title */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  /** Sit on the pale colour band instead of white */
  band?: boolean;
  /** Render as an ink inset panel */
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ eyebrow, title, intro, band, dark, className = '', children }) => {
  const body = (
    <div className="shell">
      {(title || intro) && (
        <div className="mb-12 lg:mb-16 flex flex-col items-center text-center">
          {eyebrow && <div className="eyebrow reveal mb-5">{eyebrow}</div>}
          {title && <h2 className="h-xl max-w-3xl">{title}</h2>}
          {intro && <div className="lead reveal mt-6 max-w-xl">{intro}</div>}
        </div>
      )}
      {children}
    </div>
  );

  if (dark) {
    return (
      <section className={`shell-wide ${className}`}>
        <div className="on-ink section rounded-[2.5rem]">{body}</div>
      </section>
    );
  }

  return <section className={`section ${band ? 'band' : ''} ${className}`}>{body}</section>;
};

interface CtaBandProps {
  title: React.ReactNode;
  /** Supporting copy and the action */
  children: React.ReactNode;
}

export const CtaBand: React.FC<CtaBandProps> = ({ title, children }) => (
  <section className="section band">
    <div className="shell-narrow text-center flex flex-col items-center gap-7 [&>p]:text-soft">
      <h2 className="h-xl">{title}</h2>
      {children}
    </div>
  </section>
);
