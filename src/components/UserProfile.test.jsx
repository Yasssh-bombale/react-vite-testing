import React from "react";
import {expect,it,describe,vi, beforeEach, afterEach} from "vitest"
import {screen,render, waitFor} from "@testing-library/react"
import UserProfile from "./UserProfile";
import "@testing-library/jest-dom/vitest"

describe('UserProfile', () => { 
    beforeEach(()=>{
        global.fetch=vi.fn()
    })

    afterEach(()=>{
        vi.resetAllMocks()
    })

    it("Fetches and displays the userData",async()=>{
        global.fetch.mockResolvedValueOnce({
            json:async()=>({id:4,name:"john",email:"john@gmail.com"})
        })

        render(<UserProfile userId={4}/>)

        expect(screen.getByText(/loading/i)).toBeInTheDocument()

        await waitFor(()=>{
            expect(screen.getByRole("heading",{name:/john/i})).toBeInTheDocument()
            expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument()
        })
    })
 })
