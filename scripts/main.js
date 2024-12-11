import { PageFooter } from "./Footer.js"
import { OwnsJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")
const footer = document.querySelector("#footer")

const render = async () => {
    const jeansOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = SaveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
    ${jeansOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}
    `

    const footerHTML = PageFooter()
    footer.innerHTML = footerHTML
}

render()