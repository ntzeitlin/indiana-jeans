// component function

import { setOwnsBlueJeans } from "./TransientState.js"

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}

export const OwnsJeansChoices = () => {
    document.addEventListener("change", handleOwnershipChange)

    let choicesHTML = "<h2>Do you own a pair of jeans?</h2>"
    choicesHTML += "<input type='radio' name='ownsJeans' value='true' /> Yes"
    choicesHTML += "<input type='radio' name='ownsJeans' value='false' /> No"
    return choicesHTML
}