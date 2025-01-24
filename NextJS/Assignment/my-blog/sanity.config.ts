'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Volks Blog',

  basePath: '/studio',
  projectId: 'nj8tbh7j',
  dataset: 'production',
  apiVersion: '2024-01-24',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [    
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  cors: {
    origin: [
      'http://localhost:3000',
      'https://volks-blog.vercel.app',
      'https://*.vercel.app',
      'https://volks-blog-*.vercel.app'
    ],
    credentials: true
  }
  
})
