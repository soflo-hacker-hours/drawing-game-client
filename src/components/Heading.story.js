import React from 'react'
import Heading from './Heading'

export default { title: 'Reusable/Heading' }

export const H1 = () => <Heading level={1}>This is an h1 heading</Heading>

export const H2 = () => <Heading level={2}>This is an h2 heading</Heading>

export const H3 = () => <Heading level={3}>This is an h3 heading</Heading>
