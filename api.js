async function usersGit() {
    const user = await fetch('https://api.github.com/users/romassoares')
    const result = await user.json()
    const img = document.querySelector('#divImg')
    if (img) {
        const h = document.querySelector("#txtNav")
        h.innerText = result.name
        const t = document.querySelector("#fun")
        t.innerText = result.bio
        img.setAttribute('src', result.avatar_url)
    }
}