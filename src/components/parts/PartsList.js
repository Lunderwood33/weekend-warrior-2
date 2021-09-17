import React, { useEffect, useState } from "react"

export const PartsList = () => {
    const [parts, changePart] = useState([])
    const [specialties, setSpecial] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/parts?_expand=vehicle&_expand=user")
                .then(res => res.json())
                .then((data) => {
                    changePart(data)
                })
        },
        []
    )

    

    return (
        <>
            
            {
                parts.map(
                    (part) => {
                        return <p key={`part--${part.id}`}>{`${part.name} for `}</p>
                    }
                )
            }
        </>
    )
}