// component function

export const OwnsJeansChoices = () => {
    let choicesHTML = "<h2>Do you own a pair of jeans?</h2>"
    choicesHTML += "<input type='radio' name='ownsJeans' value='true' /> Yes"
    choicesHTML += "<input type='radio' name='ownsJeans' value='false' /> No"
    return choicesHTML
}