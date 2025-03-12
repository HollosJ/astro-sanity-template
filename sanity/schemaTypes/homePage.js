import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero settings
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero Section',
      description: 'This is the section that appears at the top of the homepage.',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'coverImage',
          type: 'image',
          title: 'Cover Image',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  options: {
    singleton: true,
  },
})
