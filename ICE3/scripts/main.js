(function () {

    function DisplayButton() {
        let randomButton = document.getElementById("randomButton")
        randomButton.addEventListener("click", function() {
            Location.href = '/In-Class Exercises/web6201-in-class-demo/projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        documentBody = document.body

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let firstString = "This is a "
        let secondString = `${ firstString } main paragraph that we added through javascript`
        mainParagraph.textContent = secondString

        mainContent.append(mainParagraph)

        // documentBody.innerHTML = `
        // <div class ="container">
        //      <h1 class="display-1">Hello WEBD6201</h1>
        //      <p class="mt-5 lead">and... what do you think of this method?</p>
        //      </div>`
    }

    function Start() {
        console.log("App Started!")  

        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayButton()
                break
            case "Projects - WEBD6201 Demo":
                DisplayButton()
                break
        }
    }

    window.addEventListener("load", Start)
})()