// Generation data for 1 type
function type_1_get_data() {

}

// Generation data for 2 type
function type_2_get_data() {

}

// Generation data for 3 type
function type_3_get_data() {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

    // let lenght = Math.floor(3 + (Math.random() * 100) % (6 - 3 + 1))

    let length = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    console.log('length = ', length)
    let r = Math.floor(Math.random() * letters.length);
    console.log(r)
    let letter = letters[r]

    let text = ''
    for (let i = 0; i < length; i++) {
        let choose_letter = Math.floor(0 + (Math.random() * 100) % (letters.length - i - 0 + 1))

        if (i == 0) {
            text += letters[choose_letter]
            letters.splice(choose_letter, 1)
        } else {
            text += ', ' + letters[choose_letter]
            letters.splice(choose_letter, 1)
        }
    }

    return {
        length: length,
        text: text,
        letter: letter
    }
}
