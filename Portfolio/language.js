const RoButton = document.querySelector(".button-ro");
const EnButton = document.querySelector(".button-en");
const FrButton = document.querySelector(".button-fr");
let RoSelect = false;
let EnSelect = true;
let FrSelect = false;

RoButton.addEventListener('click', () => {
    RoButton.classList.add('selected');
    if (EnSelect == true)
    {
        EnButton.classList.remove('selected');
        EnSelect = false;
    }
    if (FrSelect == true)
    {    
        FrButton.classList.remove('selected');
        FrSelect = false;
    }
    RoSelect = true;
});
EnButton.addEventListener('click', () => {
    if (RoSelect == true)
    {
        RoButton.classList.remove('selected');
        RoSelect = false;
    }
    EnButton.classList.add('selected');
    if (FrSelect == true)
    {
        FrButton.classList.remove('selected');
        FrSelect = false;
    }
    EnSelect = true;
});
FrButton.addEventListener('click', () => {
    if (RoSelect == true)
    {
        RoButton.classList.remove('selected');
        RoSelect = false;
    }
    if (EnSelect == true)
    {
        EnButton.classList.remove('selected');
        EnSelect = false;
    }
    FrButton.classList.add('selected');
    FrSelect = true;
});
$('[lang]').hide(); 
        $('[lang="en"]').show(); 
        $('#lang-switch').change(function () { 
            var lang = $(this).val(); 
            switch (lang) {
                case 'fr':
                    $('[lang]').hide();
                    $('[lang="fr"]').show();
                break;
                case 'ro':
                    $('[lang]').hide();
                    $('[lang="ro"]').show();
                break;
                case 'en':
                    $('[lang]').hide();
                    $('[lang="en"]').show();
                break;
                default:
                    $('[lang]').hide();
                    $('[lang="en"]').show();
                }
});