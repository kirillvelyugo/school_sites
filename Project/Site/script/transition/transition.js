function transition__intro_main() {
    document.querySelector('.intro').classList.add('intro_hide')
    document.querySelector('.main').classList.add('main_show')
    setTimeout(() => {
        let el = document.querySelector(".tabs")
        let instance = M.Tabs.init(el)
    }, 100)
}
function transition__main_print_block() {
    document.querySelector('.main').classList.remove('main_show')
    document.querySelector('.print-block').classList.add('print-block_show')
}
function transition__to_intro() {
    document.querySelector('.intro').classList.remove('intro_hide')
    document.querySelector('.main').classList.remove('main_show')
    document.querySelector('.print-block').classList.remove('print-block_show')

    document.getElementById('type_1_insert').innerHTML = ""
    document.getElementById('type_2_insert').innerHTML = ""
    document.getElementById('type_3_insert').innerHTML = ""

    document.getElementById('type_1_print-block').classList.add('_hide');
    document.getElementById('type_2_print-block').classList.add('_hide');
    document.getElementById('type_3_print-block').classList.add('_hide');
}
