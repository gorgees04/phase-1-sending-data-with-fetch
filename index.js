function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    }
    const ft = fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(object => appendData(object))
        .catch(error => errorMsg(error.message))

    return ft
}




const appendData = (data) => {
    const div = document.querySelector(".account")
    const content = `<h3>ID: ${data.id}</h3>`
    div.insertAdjacentHTML("beforeend", content)
    console.log(data)
    
}

const errorMsg = (msg) => {
    const div = document.querySelector(".account")
    div.insertAdjacentHTML("beforeend", msg)
}

submitData( "Steve", "steve@steve.com")
