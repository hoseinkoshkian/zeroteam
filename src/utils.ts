/**
 * returns persian splitted (array form) breadcrumb
 * @param splitted - splitted paths in english
 * @returns splitted (array form => ["خانه" , "درباره ما"]) persian breadcrumb
 */
function persianBreadcrumb(splitted: string[]): string[] {
  let persianBreadcrumb: string[] = [];
  const sad = splitted.forEach((piece) => {
    switch (piece) {
      case "درباره ما":
        break;
      case "درباره ما":
        break;
      default:
        break;
    }
  });
  return [];
}

export { persianBreadcrumb };
