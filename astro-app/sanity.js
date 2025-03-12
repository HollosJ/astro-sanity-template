import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '<project-id>',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-01-01',
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export { client, urlFor };
