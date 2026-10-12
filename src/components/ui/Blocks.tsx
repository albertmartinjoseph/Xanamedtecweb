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

export const PageHero: React.FC<PageHeroProps> = ({ title, lead, image, crumbs = [], children }) => {
  const text = (
    <>
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

      <h1 className="h-xl mt-6 max-w-4xl">
        <Words>{title}</Words>
      </h1>
      {lead && <p className="lead mt-5 max-w-xl fade-in">{lead}</p>}
      {children && (
        <div className="mt-7 w-full flex flex-wrap items-center justify-center gap-3 fade-in">{children}</div>
      )}
    </>
  );

  // No photograph: the words sit straight on the page wash
  if (!image) {
    return (
      <section>
        <div className="shell pt-28 lg:pt-32 pb-10 lg:pb-12 flex flex-col items-center text-center">{text}</div>
      </section>
    );
  }

  // With one: the words are set on it, under a veil of white so ink type reads
  return (
    <section className="shell-wide pt-3">
      <div className="frame !rounded-[2.5rem] min-h-[34rem] lg:min-h-[40rem] flex">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" className="hero-img object-cover object-[50%_28%]" preload />
        <div className="absolute inset-0 bg-white/60" />
        <div className="shell relative m-auto pt-28 pb-14 flex flex-col items-center text-center [&_.meta]:text-fg/70">
          {text}
        </div>
      </div>
    </section>
  );
};

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
        <div className="mb-8 lg:mb-11 flex flex-col items-center text-center">
          {eyebrow && <div className="eyebrow reveal mb-4">{eyebrow}</div>}
          {title && <h2 className="h-xl max-w-3xl">{title}</h2>}
          {intro && <div className="lead reveal mt-4 max-w-xl">{intro}</div>}
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
    <div className="shell-narrow text-center flex flex-col items-center gap-5 [&>p]:text-soft">
      <h2 className="h-xl">{title}</h2>
      {children}
    </div>
  </section>
);
