import thingFields from './fields';

const hero = {
  fields: [
    thingFields.title,
    {
      name: 'slides',
      of: [{ type: 'slide' }],
      type: 'array',
    },
  ],
  name: 'hero',
  type: 'document',
};
export default hero;
