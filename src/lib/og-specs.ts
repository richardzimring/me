import type { OgSpec } from './og-image';

/** Shared copy for light + dark OG endpoints. */
export const ogHome = {
  title: 'Richard Zimring',
} satisfies OgSpec;

export const ogWriting = {
  title: 'Writing',
  description: 'Richard Zimring',
} satisfies OgSpec;

export const ogProjects = {
  title: 'Projects',
  description: 'Richard Zimring',
} satisfies OgSpec;

export const ogResume = {
  label: 'Resume',
  title: 'Richard Zimring',
  description: 'Senior software engineer · Minneapolis, MN',
} satisfies OgSpec;
