import { PageFooter } from "./Footer.js"
import { OwnsJeansChoices } from "./OwnsJeans.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")
const footer = document.querySelector("#footer")

const render = async () => {
    const jeansOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()

    container.innerHTML = `
    ${jeansOwnershipHTML}
    ${locationsHTML}
    `

    const footerHTML = PageFooter()
    footer.innerHTML = footerHTML
}

render()