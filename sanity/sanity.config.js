import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['homePage'])

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: '---',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  // https://www.sanity.io/guides/singleton-document
  schema: {
    types: schemaTypes,

    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
