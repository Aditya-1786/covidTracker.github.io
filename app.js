const form = document.querySelector("form");
const mainli = document.querySelector(".main");
form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    let search = form.elements.covid.value;
    const api = await axios.get('https://api.covid19india.org/v4/min/data.min.json');
    const state = api.data[search].total;
    const ul = document.createElement('ul');
    const h2 = document.createElement('h2');
    h2.innerText = search;
    ul.append(h2);
    for(let val in state){
        const li = document.createElement('li');
        const bt  = document.createElement('b');
        bt.append(val);
        li.append(bt,`:${state[val]}`);
        ul.append(li);
    }
    mainli.append(ul);
    form.elements.covid.value = "";
})