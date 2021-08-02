import thingFields from './fields';

export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    thingFields.title,
    thingFields.description,
    {
      name: 'hero',
      to: [{ type: 'hero' }],
      type: 'reference',
      title: 'Homepage hero',
    },
    {
      name: 'services',
      of: [
        {
          title: 'Services',
          to: [{ type: 'service' }],
          type: 'reference',
        },
      ],
      type: 'array',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
