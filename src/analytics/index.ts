export const countParagraphs = (text: string): number => {
  const paragraphsCount = text
    .split(/\n\s*/)
    .filter((paragraph) => paragraph.trim().length > 0).length;

  return paragraphsCount;
};
