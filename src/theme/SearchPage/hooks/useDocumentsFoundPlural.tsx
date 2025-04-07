import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";

export const useDocumentsFoundPlural = () => {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: "theme.SearchPage.documentsFound.plurals",
          description:
            'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One document found|{count} documents found",
        },
        { count },
      ),
    );
};
