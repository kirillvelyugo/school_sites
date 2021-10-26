function generate() {
    // Generation 1 type
    if (data.type_1.choose_type) {
        document.getElementById('type_1_print-block').classList.remove('_hide')

        let task_block = '', answer_str = ''
        for (let c = 1; c <= data.type_1.count_task; c++) {
            let type_1_data = type_1_get_data(c)
            task_block += type_1_get_text(type_1_data)

            if (data.choose_generation_answer) {
                answer_str += type_1_get_text_answer_str(type_1_data)
            }
        }
        document.getElementById('type_1_insert').innerHTML += task_block

        if (data.choose_generation_answer) {
            document.getElementById('type_1_insert').innerHTML += type_1_get_text_answer(answer_str)
        }
    }

    // Generation 2 type
    if (data.type_2.choose_type) {
        document.getElementById('type_2_print-block').classList.remove('_hide')

        let task_block = '', answer_str = ''
        for (let c = 1; c <= data.type_2.count_task; c++) {
            let type_2_data = type_2_get_data(c)
            task_block += type_2_get_text(type_2_data)

            if (data.choose_generation_answer) {
                answer_str += type_2_get_text_answer_str(type_2_data)
            }
        }

        document.getElementById('type_2_insert').innerHTML += task_block

        if (data.choose_generation_answer) {
            document.getElementById('type_2_insert').innerHTML += type_2_get_text_answer(answer_str)
        }
    }

    // Generation 3 type
    if (data.type_3.choose_type) {
        document.getElementById('type_3_print-block').classList.remove('_hide')

        let task_block = '', answer_str = ''
        for (let c = 1; c <= data.type_3.count_task; c++) {
            let type_3_data = type_3_get_data(c)
            task_block += type_3_get_text(type_3_data)

            if (data.choose_generation_answer) {
                answer_str += type_3_get_text_answer_str(type_3_data)
            }
        }
        document.getElementById('type_3_insert').innerHTML += task_block

        if (data.choose_generation_answer) {
            document.getElementById('type_3_insert').innerHTML += type_3_get_text_answer(answer_str)
        }
    }
}