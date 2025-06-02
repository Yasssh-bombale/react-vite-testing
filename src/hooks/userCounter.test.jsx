import React from "react";
import {screen,renderHook,act} from "@testing-library/react"
import {expect,it,describe} from "vitest"
import "@testing-library/jest-dom/vitest"
import { useCounter } from "./useCounter";

describe("User Counter Hook",()=>{
    it("initial value is 5",()=>{
        const {result} = renderHook(()=>useCounter(5)) 
        expect(result.current.count).toBe(5)  
    })

    it("increment",()=>{
        const {result} = renderHook(()=>useCounter(0))

        expect(result.current.count).toBe(0)

        act(()=>{
            result.current.increment()
        })

        expect(result.current.count).toBe(1)
        act(()=>{
            result.current.increment()
        })

        expect(result.current.count).toBe(2)
    })
})