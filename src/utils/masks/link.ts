export const simpleUrl = (title: string) => {
  const url = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9_]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();

  return url;
};
