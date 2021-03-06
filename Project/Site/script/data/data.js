// Get data
let data = {
    type_1: {
        count_task: 0,
        choose_type: false
    },
    type_2: {
        count_task: 0,
        choose_type: false
    },
    type_3: {
        count_task: 0,
        choose_type: false
    },
    choose_generation_answer: false
}

function get_data() {
    data.type_1.count_task = Number.parseInt(document.getElementById('type_1__count_task').value)
    data.type_2.count_task = Number.parseInt(document.getElementById('type_2__count_task').value)
    data.type_3.count_task = Number.parseInt(document.getElementById('type_3__count_task').value)
    data.choose_generation_answer = document.getElementById('choose_generate_answer').checked

    if (Number.isNaN(data.type_1.count_task) || data.type_1.count_task === 0) {
        data.type_1.count_task = 0
        data.type_1.choose_type = false
    } else {
        data.type_1.choose_type = true
    }

    if (Number.isNaN(data.type_2.count_task) || data.type_2.count_task === 0) {
        data.type_2.count_task = 0
        data.type_2.choose_type = false
    } else {
        data.type_2.choose_type = true
    }

    if (Number.isNaN(data.type_3.count_task) || data.type_3.count_task === 0) {
        data.type_3.count_task = 0
        data.type_3.choose_type = false
    } else {
        data.type_3.choose_type = true
    }
}

// Processing inputs
function clear_input() {
    console.log('clear')
    document.getElementById('type_1__count_task').value = ""
    document.getElementById('type_2__count_task').value = ""
    document.getElementById('type_3__count_task').value = ""
}

// Processing data
function check_data() {
    if (data.type_1.choose_type || data.type_2.choose_type || data.type_3.choose_type) {
        return true
    }
}