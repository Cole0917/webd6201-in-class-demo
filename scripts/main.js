(function () {

    function DisplayButton() {
        let randomButton = document.getElementById("randomButton")
        randomButton.addEventListener("click", function() {
            Location.href = '/In-Class Exercises/web6201-in-class-demo/projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3")

        let firstString = "This is a main paragraph that we added through javascript"

        mainParagraph.textContent = firstString

        mainContent.appendChild(mainParagraph)
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