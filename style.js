let passwordLength = 16
const passwordLengthEl = document.getElementById('password-length')
const inputElemento = document.getElementById('password')


function geradorDeSenha () {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789?!@&*()[]"
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

        inputElemento.value = password
        
    }
}


function copy () {
    navigator.clipboard.writeText(inputElemento.value)

    const mensagem = document.createElement('span')
    mensagem.innerHTML='Sua senha foi copiada. Agora você pode colar no input de senha.'
    document.body.append(mensagem)

}


passwordLengthEl.addEventListener('input', function () {
    passwordLength = passwordLengthEl.value
    geradorDeSenha()
})

const botaoCopiar = document.querySelector('.botao')
botaoCopiar.addEventListener('click', copy)



const cor = document.querySelector('.color')
let corAtual = 'white';
cor.addEventListener('click', ()=>{
    if (corAtual==='white'){
        document.body.style.background='gray';
        corAtual='gray'
    }else {
        document.body.style.background='white';
        corAtual='white'
    }
})


geradorDeSenha()