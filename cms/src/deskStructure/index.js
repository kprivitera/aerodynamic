import StructureBuilder from '@sanity/desk-tool/structure-builder';
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
  !['imageObject'].includes(listItem.getId());

console.log('test', S.documentTypeListItems()[0].getId());

export default () =>
  StructureBuilder.list()
    .title('Content')
    .items([...S.documentTypeListItems().filter(hiddenDocTypes)]);
