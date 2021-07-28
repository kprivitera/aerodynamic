import thingFields from './fields';

export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [thingFields.title, thingFields.description, thingFields.imageObject],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
