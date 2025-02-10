addEventListener("DOMContentLoaded", async function() {
    const response = await this.fetch("https://yellow-frosted-blouse.glitch.me/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs)
        html+=`<li> ${song.title} - ${song.artist}</li>`

    document.querySelector("#addedsong").innerHTML = html
})
