export const JOIN_CODE_LENGTH = 6;

/**
 * Characters that are easy to confuse are intentionally excluded:
 * I, L, O, 0, and 1.
 */
export const JOIN_CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

function getRandomIndex(max: number) {
  if (max <= 0) {
    throw new Error('Join code alphabet must contain at least one character.');
  }

  const browserCrypto = globalThis.crypto;

  if (browserCrypto && 'getRandomValues' in browserCrypto) {
    const value = new Uint32Array(1);
    browserCrypto.getRandomValues(value);
    return value[0] % max;
  }

  return Math.floor(Math.random() * max);
}

/**
 * Generates a six-character join code using uppercase letters and numbers.
 */
export function generateJoinCode() {
  return Array.from({ length: JOIN_CODE_LENGTH }, () => {
    return JOIN_CODE_ALPHABET[getRandomIndex(JOIN_CODE_ALPHABET.length)];
  }).join('');
}
