import { setSocioLocationId } from "./TransientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === 'location') {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInt)
    }
}


export const LocationTypeChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    // for (const location of locations) {
    //     choicesHTML += `<input type='radio' name='location' value="${location.id}"/> ${location.label}`
    // }
    choicesHTML += locations.map(location => `<input type='radio' name='location' value="${location.id}"/> ${location.label}`).join("")
    return choicesHTML
}