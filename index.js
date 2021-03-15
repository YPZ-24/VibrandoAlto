const phrases = [
                    'No soy antipatica, tengo amabilidad selectiva', 
                    'Voy a hacer origami con tu papel de victima', 
                    'Desde el primer momento en que te vi, supe que quería pasar el resto de mi vida evitandote...',
                    'Antes valias la pena, ahora la das',
                    'Te voy a ignorar tanto que dudarás de tu existencia',
                    'Es dificil recordar algo que no me importa',
                    'Las personas no suelen cambiar, se portan bien cuando quieren conseguir algo',
                    'El concepto que usted tiene sobre mi no va a cambiar por quien soy, pero si puede cambiar mi concepto sobre usted',
                    'Aprendiste a criticarme, por que fue más facil que aprender a superarme',
                    'Si nadie te detesta, algo estas haciendo mal',
                    'Yo vivo en mi mundo por que el de los otros no me gusta',
                    'La sinceridad duele a aquellas personas que viven en un mundo de mentiras',
                ]
const fonts = [
    'Bebas Neue',
    'Carrois Gothic SC',
    'Julius Sans One',
    'Noto Serif TC',
    'Roboto Condensed',
]

const pPhrase = document.getElementById('phrase')
const body = document.querySelector('body');
let index = Math.floor((Math.random() * (phrases.length-1)));

body.addEventListener('keydown', (e)=>{
    if(e.key === "Enter"){
        //Text
        index = ( index === (phrases.length - 1) ) ? 0 : index + 1
        pPhrase.textContent = phrases[index];
        //Fonts
        indexFont = Math.floor((Math.random() * (fonts.length-1)));
        pPhrase.style = `font-family: ${fonts[indexFont]}`
        //Background
        colorH1 = Math.floor((Math.random() * 360));
        colorH2 = colorH1 + 40;
        if(colorH2>=360) colorH2 = colorH2 - 360;
        body.style = `background: linear-gradient(40deg, hsl(${colorH1}, 50%, 60%) 0%, hsl(${colorH2}, 50%, 60%) 100%)`

    }
})