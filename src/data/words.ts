export interface Word {
  word: string;
  partOfSpeech?: string;
  definition: string;
}

export const words: Word[] = [
  {
    word: 'tacit knowledge',
    partOfSpeech: 'phrase',
    definition:
      'the kind of understanding that is difficult to articulate, codify, or transfer through written documentation.',
  },
  {
    word: 'confabulation',
    partOfSpeech: 'noun',
    definition:
      'the production of fabricated, distorted, or misinterpreted memories or statements without conscious intent to deceive.',
  },
  {
    word: 'verisimilitude',
    partOfSpeech: 'noun',
    definition: 'the appearance of being true or real.',
  },
  {
    word: 'simulacrum',
    partOfSpeech: 'noun',
    definition:
      'an image or representation; especially, a likeness that has come to stand in for something that no longer has an original.',
  },
  {
    word: 'sophistry',
    partOfSpeech: 'noun',
    definition: 'the use of clever but fallacious or superficially plausible reasoning.',
  },
  {
    word: 'apophenia',
    partOfSpeech: 'noun',
    definition:
      'the tendency to perceive meaningful connections or patterns in unrelated or random information.',
  },
  {
    word: 'phronesis',
    partOfSpeech: 'noun',
    definition:
      'practical wisdom; the ability to discern the right course of action in a particular situation, as distinct from theoretical knowledge.',
  },
  {
    word: 'perspicacity',
    partOfSpeech: 'noun',
    definition: 'the quality of having a ready insight into things; penetrating discernment.',
  },
];
