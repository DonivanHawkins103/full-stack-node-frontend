addEventListener("DOMContentLoaded", async function() {
    const response = await this.fetch("https://glitch.com/edit/#!/yellow-frosted-blouse")
    const songs = await response.json()

    let html = ""
    for (let song of songs)
        html+=`<li> ${song.title} - ${song.artist}</li>`

    document.querySelector("#addedsong").innerHTML = html
})
