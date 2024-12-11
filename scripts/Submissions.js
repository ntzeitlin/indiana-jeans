export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    // Iterate the submissions and create some <section> representations
    let submissionHTML = '<section id="submissionlist">'

    for (const submission of submissions) {
        submissionHTML += `<article class="submissionlist">
        <div>Submission ID: ${submission.id}</div>
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div> 
        <div>Area type foreign key? ${submission.socioLocationId}</div>
        </article>`
    }

    submissionHTML += "</section>"
    // Return the HTML string
    return submissionHTML
}   