const list = document.querySelector(".list-group")
const button = document.querySelector("button")

const JokeAdd = async () => {
    const JokeText = await FetchDadJokes();
    const Newjoke = document.createElement("LI");
    Newjoke.append(JokeText);
    list.append(Newjoke);
}

const FetchDadJokes = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (error) {
        return "There might be a problem. You can always come back and try again later"
    }
}

button.addEventListener('click', ()=>{
    JokeAdd();
    button.innerText = "Please Wait"
    setTimeout(()=>{
        button.innerText = "Generate Another"
    },1000)
})