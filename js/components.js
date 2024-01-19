
export const createUser = (username, name, phone, email, city, street, zipcode, container) => {
    const card = document.createElement("div")
    card.classList.add("card", "col-4", "p-0", "text-bg-dark", "border-secondary")

    const cardHeader = document.createElement("div")
    cardHeader.classList.add("card-header", "w-100", "border-secondary")
    cardHeader.textContent = username
    card.appendChild(cardHeader)

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    const userName = document.createElement("p")
    userName.classList.add("m-0")
    userName.textContent = name
    cardBody.appendChild(userName)

    const userPhone = document.createElement("p")
    userPhone.classList.add("m-0")
    userPhone.textContent = phone
    cardBody.appendChild(userPhone)

    const userEmail = document.createElement("p")
    userEmail.classList.add("m-0")
    userEmail.textContent = email
    cardBody.appendChild(userEmail)

    const userAddress = document.createElement("p")
    userAddress.classList.add("m-0")
    userAddress.textContent = `${city}, ${street}, ${zipcode}`
    cardBody.appendChild(userAddress)

    container.appendChild(card)
}

export const spinner = (container) => {
    const spinnerContainer = document.createElement("div")
    spinnerContainer.classList.add("spinner")

    const spinnerGif = document.createElement("img")
    spinnerGif.setAttribute("src", "./assets/spinner.gif")
    spinnerGif.classList.add("spinner_gif")
    spinnerContainer.appendChild(spinnerGif)

    container.appendChild(spinnerContainer)
}