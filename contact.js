const char_left = document.getElementById('character-left')
const textarea = document.getElementById('message')

textarea.addEventListener('input', (e) => {
    char_left.textContent = textarea.value.length
})
