export interface TextSanitizeOptions {
  noSpaceAllow?: boolean;
  noSpecialCharacterAllow?: boolean;
  consecutiveSpaceNotAllow?: boolean;
  preventNewline?: boolean;
}

export function sanitizeText(value: string, options: TextSanitizeOptions = {}) {
  let sanitizedValue = value || '';

  sanitizedValue = sanitizedValue.replace(/\p{Extended_Pictographic}(\u200D\p{Extended_Pictographic})*/gu, '');

  if (options.noSpecialCharacterAllow) {
    sanitizedValue = sanitizedValue.replace(/[^\p{L}\p{N}\s]/gu, '');
  }

  if (!options.noSpaceAllow) {
    sanitizedValue = sanitizedValue.replace(/^\s+/g, '');
    if (options.consecutiveSpaceNotAllow !== false) {
      sanitizedValue = sanitizedValue.replace(/\s{2,}/g, ' ');
    }
  } else {
    sanitizedValue = sanitizedValue.replace(/\s/g, '');
  }

  if (options.preventNewline !== false) {
    sanitizedValue = sanitizedValue.replace(/[\r\n]+/g, '');
  }

  return sanitizedValue;
}
