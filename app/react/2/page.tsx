'use client'
// useEffect vs useLayout

import { useState, useEffect, useLayoutEffect } from "react"

export default function EffectLayout(): JSX.Element {
    const [dummy, setDummy] = useState(false)
    const [dummy2, setDummy2] = useState(false)
    useEffect(() => {
        // fetching api...
        console.log("----useEffect")
        return
    },[])

    useLayoutEffect(() => {
        console.log('--useLayoutEffect')
    },[])

    console.log("pass")

    return (
        <div className = "">
            <header className = "flex justify-center pt-10 pb-5 font-bold text-2xl bg-slate-50"> 
                useEffect vs. useLayoutEffect
            </header>
            <section className = "grid grid-cols-2">
                <div className = "border-r-2 border-black p-4">
                    <header className = "text-center text-lg font-semibold">
                    useEffect
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                            useEffect and useLayoutEffect are almost identical. They allow us to perform side effects 
                            in function components, suited for tasks such as handling/fetching APIs. They follow the similar structure 
                            where its ...effect(effect, deps) where effect is a function that is to run imperative. And the dependencies 
                            are variables that when changed, trigger the effect to run. 
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => setDummy(!dummy)}>
                            Button
                          </button>
                          
                    </div>
                </div>
                
                <div className = "p-4">
                    <header className = "text-center text-lg font-semibold">
                    useLayoutEffect 
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                        <strong>There are a few key aspects that we must keep in mind: </strong>
                        <br />
                        For instance, we must keep in mind the dangers of Effect, and how they may cause unneccessary re-renders. 
                        If we update a state, it causes a re-render and commits to the DOM. If the useEffect also updates the state, this
                        restarts the process from scratch. useEffect is after the DOM has been updated
                        The key difference is that useEffect is exected asynchronously after the component has rendered. useLayoutEffect 
                        will fire synchronously after all DOM mutations but before the browser has painted the changes. 
                        One other situation you might want to use useLayoutEffect instead of useEffect is if you're updating a value
                         (like a ref) and you want to make sure it's up-to-date before any other code runs
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => setDummy(!dummy)}>
                            Button
                          </button>

                          
                    </div>
                </div>
            </section>
        </div>
    )
}

