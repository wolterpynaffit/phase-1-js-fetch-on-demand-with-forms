const init = () => {
    const inputForm = document.querySelector("form")
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const input = document.querySelector("input#searchByID");
        console.log(input.value)


        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.title)
            console.log(data.summary)

            const title = document.querySelector('h4')
            const summary = document.querySelector('p')

            title.textContent = data.title
            summary.textContent = data.summary

        })

    })
  
}

document.addEventListener('DOMContentLoaded', init);