import { type SchemaTypeDefinition } from 'sanity'
import { petType } from './schema/pets'
import { blogType } from './schema/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [petType, blogType],
}
