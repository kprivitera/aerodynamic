// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import page from './page';
import service from './service';
import siteConfig from './site-config';
import imageObject from './image-object';
import slide from './slide';
import hero from './hero';
import home from './home';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // The following are document types which will appear in the studio.
    siteConfig,
    page,
    service,
    hero,
    home,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    imageObject,
    slide,
  ]),
});
