import React from 'react'
import CanvasTool from './CanvasTool'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default { title: 'Components/CanvasTool' }

export const Active = () => <CanvasTool size="2x" isActive icon={faCaretRight} onClick={() => {}} />

export const Inactive = () => <CanvasTool size="1x" icon={faCaretLeft} onClick={() => {}} />
