import StructureBuilder, {
  document,
} from '@sanity/desk-tool/structure-builder';
import S from '@sanity/desk-tool/structure-builder';

//  StructureBuilder.list()
//    - creates a new list, if no parent is the root one
// items()
//    - sets the items for the list
// S.documentTypeListItems()
//    - document items
// S.documentTypeListItems()[0].getId - gives the name of the list item

// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  !['imageObject', 'siteConfig', 'page', 'home'].includes(listItem.getId());

const createHardcodedMenuItem = ({ title, subTitle, schemaType }) =>
  S.listItem()
    .title(title)
    .child(
      S.list()
        .title(title)
        .items([
          S.listItem()
            .title(subTitle)
            .child(
              S.document()
                .title(subTitle)
                .schemaType(schemaType)
                .documentId(schemaType),
            ),
        ]),
    );

export default () =>
  StructureBuilder.list()
    .title('Content')
    .items([
      createHardcodedMenuItem({
        title: 'Website',
        subTitle: 'Site configuration',
        schemaType: 'siteConfig',
      }),
      createHardcodedMenuItem({
        title: 'Home',
        subTitle: 'Home configuration',
        schemaType: 'home',
      }),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
