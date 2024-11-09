const char_left = document.getElementById('character-left')
const textarea = document.getElementById('message')

const email = document.getElementById('email')
const emailError = document.getElementById('email-error')
const topic = document.getElementById('topic')
const topicError = document.getElementById('topic-error')
const message = document.getElementById('message')
const messageError = document.getElementById('message-error')
const form = document.getElementById('article--form')

textarea.addEventListener('input', (e) => {
    char_left.textContent = textarea.value.length
})

function removeErrorBorder(e) {
    const object = e.target
    if(object.classList.contains('errorBorder')){
        object.classList.remove('errorBorder')
    }
}

email.addEventListener('input', removeErrorBorder)
topic.addEventListener('change', removeErrorBorder)
message.addEventListener('input', removeErrorBorder)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    emailError.textContent = ""
    topicError.textContent = ""
    messageError.textContent = ""

    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Niepoprawny adres e-mail"
        email.classList.add('errorBorder');
    }

    if (topic.value === ""){
        topicError.textContent = "Wybierz temat"
        topic.classList.add('errorBorder')
    }

    if (message.value.trim().length <= 3){
        messageError.textContent = "Wiadomosc musi byc dłuzsza niz 3 znaki"
        message.classList.add('errorBorder')
    }

})