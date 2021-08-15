import thingFields from './fields';

const slide = {
  fields: [thingFields.title, thingFields.subTitle, thingFields.imageObject],
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
