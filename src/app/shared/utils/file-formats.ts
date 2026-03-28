export type FileCategory = 'image' | 'video' | 'audio' | 'application' | 'all';

function getExtensionFromName(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1 || lastDotIndex === filename.length - 1) return '';
  const ext = filename.slice(lastDotIndex + 1).toLowerCase();
  return `.${ext}`;
}

export function getFileExtension(file: File): string {
  return getExtensionFromName(file.name);
}

export function isExtensionAllowed(extension: string, allowedFormats: readonly string[]): boolean {
  const normalized = extension.startsWith('.') ? extension.toLowerCase() : `.${extension.toLowerCase()}`;
  return allowedFormats.includes(normalized);
}

export function isFileFormatAllowed(file: File, allowedFormats: string[]): boolean {
  const extension = getFileExtension(file);
  return isExtensionAllowed(extension, allowedFormats);
}

export const FILE_TYPE_CHECKERS: Record<Exclude<FileCategory, 'all'>, (file: File) => boolean> = {
  image: (file) => file.type.startsWith('image/'),
  video: (file) => file.type.startsWith('video/'),
  audio: (file) => file.type.startsWith('audio/'),
  application: (file) => file.type.startsWith('application/'),
};

export function isAllowedFileCategory(
  file: File,
  category: Exclude<FileCategory, 'all'> | 'all',
): boolean {
  if (category === 'all') return true;
  return FILE_TYPE_CHECKERS[category](file);
}
