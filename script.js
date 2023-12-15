document.addEventListener('DOMContentLoaded', function () {

   
    var submitBtns = document.querySelectorAll('.submitBtn');
    var closeBtn = document.getElementById('closeBtn');
    var modal = document.getElementById('myModal');

   
    submitBtns.forEach(function (submitBtn) {
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });

  
    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'none';
    });
});