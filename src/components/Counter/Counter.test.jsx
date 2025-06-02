import React from "react";
import {render,screen} from "@testing-library/react"
import {describe,it,expect} from "vitest"
import Counter from "./Counter"
import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event";


describe("Counter component",()=>{
    it("Renders counter component",async()=>{
        render(<Counter/>)
        const button = screen.getByRole("button",{name:/increment/i})
        const counterText = screen.getByTestId("counter-value")

        expect(counterText.textContent).toEqual("0")

        await userEvent.click(button);
        expect(counterText.textContent).toEqual("1") 
    })
})