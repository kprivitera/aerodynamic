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
  // icon: MdImage,
  name: 'imageObject',
  type: 'document',
};

export default imageObject;
