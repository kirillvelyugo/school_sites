let combinations = []
function combinate(s, n, letters) {
    if (s.length === n) {
        combinations.push(s)
    } else {
        for (let x of letters) {
            combinate(s + x, n, letters)
        }
    }
}

function random_sort(m) {
    m.sort(() => Math.random() - 0.5);
}

// Generation data for 1 type
function type_1_get_data(index) {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

    let length = Math.floor(Math.random() * (6 - 3 + 1)) + 3

    let count_letters = Math.floor(Math.random() * (6 - 3 + 1)) + 3

    let selected_letters = []
    for (let i = 1; i <= count_letters; i++) {
        let x = Math.floor(Math.random() * letters.length)
        selected_letters.push(letters[x])
        letters.splice(x, 1)
    }
    let text = selected_letters.slice()
    random_sort(selected_letters)

    combinations = []
    combinate('', length, selected_letters)

    let examples = type_1_get_text_examples(combinations)

    let placeWord = Math.floor(Math.random() * (Math.pow(count_letters, length) - 5 + 1)) + 5

    let answer = -1
    if (data.choose_generation_answer) {
        answer = type_1_get_answer(combinations, placeWord)
    }

    return {
        index: index,
        length: length,
        text: text,
        examples: examples,
        placeWord: placeWord,
        answer: answer
    }
}

// Generation data for 2 type
function type_2_get_data(index) {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

    let length = Math.floor(Math.random() * (6 - 3 + 1)) + 3

    let count_letters = Math.floor(Math.random() * (6 - 3 + 1)) + 3

    let selected_letters = []
    for (let i = 1; i <= count_letters; i++) {
        let x = Math.floor(Math.random() * letters.length)
        selected_letters.push(letters[x])
        letters.splice(x, 1)
    }
    let text = selected_letters.slice()
    random_sort(selected_letters)

    combinations = []
    combinate('', length, selected_letters)

    let examples = type_2_get_text_examples(combinations)

    let position = Math.floor(Math.random() * combinations.length)
    let word = combinations[position]

    let answer = -1
    if (data.choose_generation_answer) {
        answer = position + 1
    }

    return {
        index: index,
        length: length,
        count: count_letters,
        text: text,
        examples: examples,
        word: word,
        answer: answer
    }
}

// Generation data for 3 type
function type_3_get_data(index) {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

    let players = ['Ваня', 'Петя', 'Маша', 'Гоша', 'Максим', 'Сеня']
    let player = players[Math.floor(Math.random() * players.length)]

    let length = Math.floor(Math.random() * (6 - 3 + 1)) + 3

    let text = []
    for (let i = 0; i < length; i++) {
        let choose_letter = Math.floor(Math.random() * letters.length)
        text.push(letters[choose_letter])
        letters.splice(choose_letter, 1)
    }

    let p = Math.floor(Math.random() * text.length)
    let letter = text[p]

    let answer = -1
    if (data.choose_generation_answer) {
        answer = type_3_get_answer(length, text, letter)
    }

    return {
        index: index,
        player: player,
        length: length,
        text: text,
        letter: letter,
        answer: answer
    }
}
