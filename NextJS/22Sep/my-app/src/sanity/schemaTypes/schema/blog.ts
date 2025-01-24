import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'Description',
        type: 'string',
      }),
      defineField({
        name: 'Image',
        type: 'image',
      }),
  ],
})