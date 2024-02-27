const word = document.querySelector('.word')
const writer = document.querySelector('.writer')
const button = document.querySelector('button')
button.addEventListener('click', async (e)=>{
    const apikey = '75482a25ff482407c171d49cf3ee'
    const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=${apikey}`
    const response = await fetch(url);
    const data = await response.json();
    word.innerText = data.jokeContent
    writer.innerText = data.created_by

})
