
import Home from "../src/app/page";
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

test('Should test the <Home /> component', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: 'Grama ERP' })).toBeDefined()
})