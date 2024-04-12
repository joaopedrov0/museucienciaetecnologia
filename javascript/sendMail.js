(() =>{
    emailjs.init({
        publicKey: 'ZAhMu52GGDzIpqvZ6'
    })
})()

function sendForm(event){
    console.log(event)
    event.preventDefault();
    emailjs.sendForm('service_1ysc3jm', 'template_yq9lz13', '#scheduling').then(
    (response) => {
        alert("Agendamento enviado com sucesso!")
        console.log("Agendamento enviado com sucesso!")
        console.log(response)
        window.location.reload()
    }, 
    (err) => {
        alert("Ops, algo deu errado na hora de enviar seu formulário")
        console.log("Ops, algo deu errado na hora de enviar seu formulário");
        console.log(err)
    })
}