export const useDialog = () => {
  return useState<boolean>("dialog", () => false);
};
