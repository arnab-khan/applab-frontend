export function getInitials(name: string): string {
  if (!name) return '';

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  return (words[0][0] + words[1][0]).toUpperCase();
}

export function getAvatarColor(text: string): string {
  const value = (text || '').toUpperCase().replace(/[^A-Z]/g, '');

  const first = value.charCodeAt(0) || 65; // A fallback
  const second = value.charCodeAt(1) || first;

  const firstIndex = Math.max(0, Math.min(25, first - 65));
  const secondIndex = Math.max(0, Math.min(25, second - 65));

  // 26 clearly separated base hues
  const baseHue = Math.round((360 / 26) * firstIndex);

  // slight hue shift from 2nd letter: -6 to +6
  const hueShift = Math.round(((secondIndex / 25) * 12) - 6);

  // small sat/light variation from 2nd letter
  const saturation = 62 + (secondIndex % 5) * 3; // 62..74
  const lightness = 48 + (secondIndex % 4) * 4;  // 48..60

  return `hsl(${baseHue + hueShift}, ${saturation}%, ${lightness}%)`;
}
