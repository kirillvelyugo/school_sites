// Generation text for 1 type
function type_1_get_text(type_1_data) {
	return `
    <div class="col s12 m12 l12 xl12">
		<div class="print-block__text">
			${type_1_data.index}) Все ${type_1_data.length}-буквенные слова, составленные из букв ${type_1_data.text} записаны в алфавитном порядке и пронумерованы. Вот начало списка:<br>
			${type_1_data.examples}
			……<br>
			Запишите слово, которое стоит на ${type_1_data.placeWord}-м месте от начала списка.
		</div>
	</div>
	`
}
function type_1_get_text_examples(combinations) {
	str = ""
	for (let i = 1; i <= 5; i++) {
		str += `${i}` + `. ` + combinations[i - 1] + `<br>`
	}

	return str
}

function type_1_get_text_answer(str) {
	return `
	<div class="col s12 m12 l12 xl12">
		<span class="print-block__subtitle">Ответы:</span>
		<div class="print-block__answer">
			${str}
		</div>
	</div>
 `
}

function type_1_get_text_answer_str(type_1_data) {
	let s = ""
	return `
		${type_1_data.index})${type_1_data.answer} 
	`
}

// Generation text for 2 type
function type_2_get_text(type_2_data) {
	return `
    <div class="col s12 m12 l12 xl12">
		<div class="print-block__text">
			${type_2_data.index}) Все ${type_2_data.length}-буквенные слова, составленные из ${type_2_data.count} букв ${type_2_data.text} записаны в алфавитном порядке.
			Вот начало списка:<br>
			${type_2_data.examples}
			……<br>
			На каком месте от начала списка стоит слово ${type_2_data.word}? 
		</div>
	</div>
	`
}

function type_2_get_text_examples(combinations) {
	str = ""
	for (let i = 1; i <= 5; i++) {
		str += `${i}` + `. ` + combinations[i - 1] + `<br>`
	}

	return str
}

function type_2_get_text_answer(str) {
	return `
	<div class="col s12 m12 l12 xl12">
		<span class="print-block__subtitle">Ответы:</span>
		<div class="print-block__answer">
			${str}
		</div>
	</div>
 `
}

function type_2_get_text_answer_str(type_2_data) {
	let s = ""
	return `
		${type_2_data.index})${type_2_data.answer} 
	`
}


// Generation text for 3 type
function type_3_get_text(type_3_data) {
	return `
    <div class="col s12 m12 l12 xl12">
		<div class="print-block__text">
        	${type_3_data.index}) ${type_3_data.player} составляет ${type_3_data.length}-буквенные коды из букв ${type_3_data.text}. Каждую букву нужно
        	использовать ровно 1 раз, при этом буква ${type_3_data.letter} не может стоять на первом месте и перед
        	гласной. Сколько различных кодов может составить ${type_3_data.player}?    
		</div>
	</div>
	`
}

function type_3_get_text_answer(str) {
	return `
	<div class="col s12 m12 l12 xl12">
		<span class="print-block__subtitle">Ответы:</span>
		<div class="print-block__answer">
			${str}
		</div>
	</div>
 `
}

function type_3_get_text_answer_str(type_3_data) {
	let s = ""
	return `
		${type_3_data.index})${type_3_data.answer} 
	`
}
