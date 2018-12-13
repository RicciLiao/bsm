function init() {

    commonFunc.loadModule($('.main-header'), '../html/main/mainHeader.html', null);
    commonFunc.loadModule($('.main-content'), '../html/signModule/signContainer.html', null);
    commonFunc.loadModule($('.main-footer'), '../html/main/mainFooter.html', null);

    $('#modalWindow').on({
        'hidden.bs.modal': function () {
            $('#modalWindow .modal-dialog').attr('class', 'modal-dialog modal-dialog-centered');
            $('#modalWindow .modal-body').empty();
            $('#modalWindow .modal-title').empty();
            $('#modalWindow .btn-primary').empty();
            $('#modalWindow .btn-secondary').empty();

        }
    })
}



