import { Author } from '../interfaces/author';

export function getAuthorDisplayName(author: Author) {
  return author.type === 'GUEST' ? `Guest #${author.id}` : author.name;
}
