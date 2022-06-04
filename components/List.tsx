import React from "react"

export const myPortableTextComponents = {
    block: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
      number: ({children}) => <ol className="mt-lg">{children}</ol>,
  
      // Ex. 2: rendering custom lists
      checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    }