$(document).ready(function() {
    $('#btn-adicionar-tarefa').click(function() {
        $('.tarefas').slideDown()
    })

    $('#btn-ocultar-tarefa').click(function() {
        $('.tarefas').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const tarefa = $('#nome-tarefa').val()
        const corpoLista = $(`<li>${tarefa}</li>`)

        $(corpoLista.appendTo('ul'))

        $('li').click( function() {
            $(this).toggleClass('line-through')
        })
    })
})