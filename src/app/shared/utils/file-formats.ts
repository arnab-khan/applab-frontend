export type FileCategory = 'image' | 'video' | 'audio' | 'pdf' | 'doc' | 'archive' | 'all';

export const ALLOWED_EXTENSIONS: Record<Exclude<FileCategory, 'all'>, string[]> = {
  image: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif', '.bmp'],
  video: ['.mp4', '.webm', '.ogg', '.mov', '.mkv'],
  audio: ['.mp3', '.wav', '.ogg', '.aac', '.flac'],
  pdf: ['.pdf'],
  doc: ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.csv'],
  archive: ['.zip', '.rar', '.7z', '.tar', '.gz'],
};

export function getFileExtension(file: File): string {
  const filename = file.name;
  const extension = filename.split('.').pop();
  if (extension) {
    return `.${extension.toLowerCase()}`;
  } else {
    return '';
  }
}

export function isFileFormatAllowed(file: File, allowedFormats: string[]): boolean {
  const extension = getFileExtension(file);
  return allowedFormats.includes(extension);
}
