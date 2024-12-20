import { saveSurveySubmission } from "./TransientState.js"

const handleSaveSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}

export const SaveSubmission = () => {
    document.addEventListener("click", handleSaveSubmissionClick)
    return "<div><button id='saveSubmission'>Save Submission</button></div>"
}