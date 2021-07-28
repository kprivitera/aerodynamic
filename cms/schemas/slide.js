import thingFields from './fields';

const slide = {
  fields: [thingFields.title, thingFields.description, thingFields.imageObject],
  name: 'slide',
  preview: {
    select: {
      media: 'imageObject.image',
      title: 'name',
    },
  },
  title: 'Slide',
  type: 'object',
};
export default slide;
