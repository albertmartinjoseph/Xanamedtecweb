'use client';

import React from 'react';
import Image from 'next/image';

interface FlowingHexBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable rounded concentric hexagon contour matching the user's reference graphic.
 * Renders 3 concentric organic rounded polygon rings with smooth bezier curves.
 */
const ConcentricHexContour: React.FC<{
  className?: string;
  idPrefix: string;
  accentColor?: string;
  secondaryColor?: string;
}> = ({
  className = '',
  idPrefix,
  accentColor = '#20B2AA',
  secondaryColor = '#3B82F6',
}) => {
  const gradId = `hex-grad-${idPrefix}`;

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_0_25px_rgba(32,178,170,0.18)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.45" />
            <stop offset="50%" stopColor={secondaryColor} stopOpacity="0.30" />
            <stop offset="100%" stopColor="#002D62" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Outer Organic Hexagon Contour */}
        <path
          d="M 200,32
             C 255,32 328,84 354,124
             C 374,158 374,242 354,276
             C 328,316 255,368 200,368
             C 145,368 72,316 46,276
             C 26,242 26,158 46,124
             C 72,84 145,32 200,32 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={`url(#${gradId})`}
          fillOpacity="0.04"
        />

        {/* Middle Organic Hexagon Contour */}
        <path
          d="M 200,76
             C 240,76 294,116 314,146
             C 328,172 328,228 314,254
             C 294,284 240,324 200,324
             C 160,324 106,284 86,254
             C 72,228 72,172 86,146
             C 106,116 160,76 200,76 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={`url(#${gradId})`}
          fillOpacity="0.06"
        />

        {/* Inner Organic Hexagon Core */}
        <path
          d="M 200,122
             C 224,122 258,146 270,166
             C 282,183 282,217 270,234
             C 258,254 224,278 200,278
             C 176,278 142,254 130,234
             C 118,217 118,183 130,166
             C 142,146 176,122 200,122 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={`url(#${gradId})`}
          fillOpacity="0.10"
        />
      </svg>
    </div>
  );
};

export const FlowingHexBackground: React.FC<FlowingHexBackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden bg-[#051428] text-white ${className}`}>
      {/* 1. Base Layer: The user's uploaded flowing contour graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen">
        <Image
          src="/images/flowing-hex-bg.png"
          alt="Flowing Hexagonal Contours"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 2. Brand Navy & Royal Blue Ambient Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002D62]/90 via-[#051428]/85 to-[#002678]/92 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#20B2AA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -left-40 w-96 h-96 bg-[#002678]/40 rounded-full blur-3xl pointer-events-none" />

      {/* 3. Floating Concentric Hexagon Shapes across the tall timeline section */}
      {/* Cluster 1: Top-Right (matching user reference, floating gently) */}
      <ConcentricHexContour
        idPrefix="top-right"
        className="absolute -top-10 right-2 md:right-12 w-80 sm:w-96 md:w-[420px] h-80 sm:h-96 md:h-[420px] rotate-[26deg] animate-float-slow opacity-25"
        accentColor="#20B2AA"
        secondaryColor="#3B82F6"
      />

      {/* Cluster 2: Upper-Left (matching large tilted contour in user reference) */}
      <ConcentricHexContour
        idPrefix="mid-left"
        className="absolute top-72 -left-20 md:-left-10 w-96 sm:w-[460px] md:w-[520px] h-96 sm:h-[460px] md:h-[520px] -rotate-[34deg] animate-float-reverse opacity-25"
        accentColor="#23CCAD"
        secondaryColor="#20B2AA"
      />

      {/* Cluster 3: Lower-Right (keeping flowing rhythm active along steps 05-07) */}
      <ConcentricHexContour
        idPrefix="mid-right"
        className="absolute top-[820px] -right-24 md:-right-8 w-80 sm:w-96 md:w-[440px] h-80 sm:h-96 md:h-[440px] rotate-[18deg] animate-float-drift opacity-25"
        accentColor="#20B2AA"
        secondaryColor="#002D62"
      />

      {/* Cluster 4: Bottom-Left (grounding the section near step 08) */}
      <ConcentricHexContour
        idPrefix="bot-left"
        className="absolute -bottom-16 -left-16 md:left-4 w-96 sm:w-[440px] md:w-[480px] h-96 sm:h-[440px] md:h-[480px] -rotate-[22deg] animate-float-slow opacity-25"
        accentColor="#23CCAD"
        secondaryColor="#38BDF8"
      />

      {/* 4. Foreground Content slot */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
