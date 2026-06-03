export type LibraryItemKind = 'book' | 'doc' | 'essay' | 'movie' | 'podcast' | 'video';

export interface LibraryItem {
  title: string;
  kind: LibraryItemKind;
  href?: string;
  by?: string;
}

/**
 * Order in which kinds are rendered on /library/.
 * Items within each kind preserve their declaration order below.
 */
export const kindOrder: LibraryItemKind[] = ['video', 'doc', 'essay', 'book', 'movie', 'podcast'];

/** Plural label used as the section heading per kind. */
export const kindLabel: Record<LibraryItemKind, string> = {
  book: 'books',
  movie: 'movies',
  doc: 'documentaries',
  podcast: 'podcasts',
  essay: 'essays',
  video: 'videos',
};

export const library: LibraryItem[] = [
  {
    title: 'Google DeepMind: The Podcast',
    kind: 'podcast',
    by: 'Hannah Fry',
    href: 'https://deepmind.google/the-podcast/',
  },
  {
    title: 'Final Thoughts on Free Will',
    kind: 'podcast',
    by: 'Sam Harris',
    href: 'https://www.samharris.org/podcasts/making-sense-episodes/241-final-thoughts-on-free-will',
  },
  {
    title: 'Punished by Rewards',
    kind: 'book',
    by: 'Alfie Kohn',
    href: 'https://www.alfiekohn.org/punished-rewards/',
  },
  {
    title: 'Thinking, Fast and Slow',
    kind: 'book',
    by: 'Daniel Kahneman',
    href: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow',
  },
  {
    title: 'Hamburger America',
    kind: 'doc',
    by: 'George Motz',
    href: 'https://youtu.be/Mkpc5Q1Mgdc',
  },
  {
    title: 'Listers: A Glimpse Into Extreme Birdwatching',
    kind: 'doc',
    by: 'Owen & Quentin Reiser',
    href: 'https://www.youtube.com/watch?v=zl-wAqplQAo',
  },
  {
    title: 'Boiling Point',
    kind: 'doc',
    by: 'Gordon Ramsay',
    href: 'https://youtu.be/sX3gYxyIX4g',
  },
  {
    title: 'The Lord of the Rings',
    kind: 'book',
    by: 'J. R. R. Tolkien',
    href: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings',
  },
  {
    title: 'The Big Short',
    kind: 'movie',
    href: 'https://en.wikipedia.org/wiki/The_Big_Short_(film)',
  },
  {
    title: 'Office Space',
    kind: 'movie',
    href: 'https://en.wikipedia.org/wiki/Office_Space',
  },
  {
    title: 'Whiplash',
    kind: 'movie',
    href: 'https://en.wikipedia.org/wiki/Whiplash_(2014_film)',
  },
  {
    title: 'Planet Earth II',
    kind: 'doc',
    by: 'David Attenborough',
    href: 'https://en.wikipedia.org/wiki/Planet_Earth_II',
  },
  {
    title: 'The Intelligence Curse',
    kind: 'essay',
    by: 'Luke Drago & Rudolf Laine',
    href: 'https://intelligence-curse.ai/',
  },
  {
    title: 'Machines of Loving Grace',
    kind: 'essay',
    by: 'Dario Amodei',
    href: 'https://darioamodei.com/essay/machines-of-loving-grace',
  },
  {
    title: 'Situational Awareness',
    kind: 'essay',
    by: 'Leopold Aschenbrenner',
    href: 'https://situational-awareness.ai/',
  },
  {
    title: 'Los Alamos From Below',
    kind: 'video',
    by: 'Richard Feynman',
    href: 'https://www.youtube.com/watch?v=uY-u1qyRM5w',
  },
  {
    title: 'Fun to Imagine',
    kind: 'video',
    by: 'Richard Feynman',
    href: 'https://www.youtube.com/watch?v=P1ww1IXRfTA',
  },
  {
    title: 'Day In The Life of The #1 BBQ In Texas',
    kind: 'doc',
    by: 'Alvin Zhou',
    href: 'https://www.youtube.com/watch?v=1hvPTqswJn4',
  },
  {
    title: 'Facing Eviction',
    kind: 'doc',
    by: 'FRONTLINE',
    href: 'https://www.youtube.com/watch?v=XBVshMTOF08',
  },
  {
    title: 'You Are Two',
    kind: 'video',
    by: 'CGP Grey',
    href: 'https://www.youtube.com/watch?v=wfYbgdo8e-8',
  },
  {
    title: 'Neural Networks',
    kind: 'video',
    by: '3Blue1Brown',
    href: 'https://www.3blue1brown.com/topics/neural-networks',
  },
  {
    title: 'makemore',
    kind: 'video',
    by: 'Andrej Karpathy',
    href: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
  },
  {
    title: 'Free To Choose',
    kind: 'doc',
    by: 'Milton Friedman',
    href: 'https://www.freetochoosenetwork.org/programs/free_to_choose/index_80.php',
  },
  {
    title: 'Free Solo',
    kind: 'doc',
    by: 'Alex Honnold',
    href: 'https://en.wikipedia.org/wiki/Free_Solo',
  },
];
