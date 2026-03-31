
function getthetext(){
    const text = document.querySelector("h1");
    const onlytext = text.textContent;
    
    const splittext = onlytext.split("");
    const halftext = splittext.length / 2;
    
    let addtext = ""
    
    
    splittext.forEach((letter, index) => {
        if (index < halftext) {
            addtext  += `<span class="a">${letter}</span>`;
        }
        else{
            addtext  += `<span class="b">${letter}</span>`;
        }
    });
    
    text.innerHTML = addtext;
}

getthetext();


gsap.from(".a", {
    y:50,
    opacity:0,
    stagger:0.2,
})

gsap.from(".b", {
    y:50,
    opacity:0,
    stagger:-0.2,
})