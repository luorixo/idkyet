import { useState } from "react"

const jsonData = {
    home: {
        titleOverText: "蔡俊尧",
        title: ".eugene.chua.",
        titleSubText: {
            textOne: "Software Engineering Student",
            textTwo: "@ The University of Auckland",
        }
    },
    experience: {
        title: ".my.experience.",
        titleSubText: "From most to least recent",
    },
}

const useData = () => {
    const [data] = useState(jsonData)
    
    return data
}

export default useData