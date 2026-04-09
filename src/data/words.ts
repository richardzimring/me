export interface Word {
  word: string;
  partOfSpeech?: string;
  definition: string;
}

export const words: Word[] = [
  {
    word: 'scrupulous',
    partOfSpeech: 'adjective',
    definition: '(of a person or process) diligent, thorough, and extremely attentive to details.',
  },
  {
    word: 'mawkishness',
    partOfSpeech: 'noun',
    definition: 'the quality of showing emotion or love in an awkward or silly way.',
  },
  {
    word: 'civil inattention',
    partOfSpeech: 'phrase',
    definition:
      'the respectful recognition of a stranger in an urban public space without treating them as an object of curiosity or intent.',
  },
  {
    word: 'panoply',
    partOfSpeech: 'noun',
    definition:
      'a complete or impressive array, often used to describe a full suit of armor or a wide range of diverse elements.',
  },
  {
    word: 'ignominy',
    partOfSpeech: 'noun',
    definition: 'public shame or disgrace.',
  },
  {
    word: 'inauspicious',
    partOfSpeech: 'adjective',
    definition: 'not conducive to success; unpromising.',
  },
  {
    word: 'edification',
    partOfSpeech: 'noun',
    definition: 'the instruction or improvement of a person morally or intellectually.',
  },
  {
    word: 'tacit knowledge',
    partOfSpeech: 'phrase',
    definition:
      'the kind of understanding that is difficult to articulate, codify, or transfer through written documentation.',
  },
];
