let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});

const content = document.querySelector("#content")
  const getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}


    getRes('user.json')
        .then(data => {
            console.log(data);
            for(let key in data) {
                const block = document.createElement("div")
                const title = data[key].title
                const description = data[key].description


                block.innerHTML = 
                    `<div class="block">
                    <h2>${title}</h2>
                    <p> ${description}</p>
                    </div>`

                
             content.append(block)   
            }
        })