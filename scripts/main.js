import { PageFooter } from "./Footer.js"
import { OwnsJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { saveSurveySubmission } from "./TransientState.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")
const footer = document.querySelector("#footer")

const render = async () => {
    const jeansOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = SaveSubmission()

    container.innerHTML = `
    ${jeansOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    `

    const footerHTML = PageFooter()
    footer.innerHTML = footerHTML
}

render()