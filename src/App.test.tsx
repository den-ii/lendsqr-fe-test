import App from './App'
import {render, screen} from '@testing-library/react'
import { assert, describe, expect, it, } from 'vitest'

describe('app testing', () => {
    it('testing app', () => {
        render(<App/>)
        const element = screen.getByText(/hello/i)
        expect(element).toBeInTheDocument();
    })
    it('testing 2app', () => {
        render(<App/>)
        const element = screen.getByText(/hello/i)
        expect(element).toBeInTheDocument();
    })
})
