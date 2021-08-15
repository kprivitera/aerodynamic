import { keyBy } from 'lodash/fp';

const fields = [
  { name: 'title', type: 'string' },
  { name: 'subTitle', type: 'string' },
  { name: 'description', of: [{ type: 'block' }], type: 'array' },
  { name: 'imageObject', type: 'imageObject' },
];

export default keyBy('name', fields);
