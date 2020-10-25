import React from 'react'
import '@testing-library/jest-dom'

import { MainHeader } from '../../src/components/headers'
import { render } from '@testing-library/react'

describe('Header', () => {
    let expectedProps

    beforeEach(() => {
        expectedProps = {}
    })

    test('should render title', () => {
        const { getByText } = render(<MainHeader {...expectedProps} />)
        const title = getByText('Searcher!!')
        expect(title).toBeVisible()
    })
})
