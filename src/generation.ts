const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// double consonants
const start = ['ch', 'sh', 'th', 'gh'];
const middle = ['mm', 'tt', 'bb', 'll', 'gg', 'ss'];
const end = ['ng', 'th'];

const pickRandom = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const randomBoolean = (chance: number): boolean => {
  return Boolean(Math.floor(Math.random() * (1 / (1 - chance))));
};

export const generateUsername = (): string => {
  const minLength = Math.floor(Math.random() * 2 + 6);
  let name = '';
  let lastWasVowel = randomBoolean(2/3);

  while (name.length < minLength) {
    if (lastWasVowel) {
      const double = randomBoolean(1/5);
      if (double) {
        if (name === '') {
          name += pickRandom(start);
        } else if (name.length + 2 >= minLength) {
          name += pickRandom(end);
        } else {
          name += pickRandom(pickRandom([start, middle, end]));
        }
      } else {
        name += pickRandom(consonants);
      }
    } else {
      name += pickRandom(vowels);
    }

    lastWasVowel = !lastWasVowel;
  }

  return name;
};
