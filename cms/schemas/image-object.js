import thingFields from './fields';

const imageObject = {
  fields: [
    {
      name: 'image',
      options: { hotspot: true },
      type: 'image',
    },
    {
      name: 'caption',
      type: 'string',
    },
  ],
  name: 'imageObject',
  type: 'document',
};

export default imageObject;
