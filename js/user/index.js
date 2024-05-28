

function rolarParaSobreMim() {
    var sobreMim = document.getElementById('sobre_mim');
    sobreMim.scrollIntoView({ behavior: 'smooth' });
}

function rolarParaSkills() {
    var skills = document.getElementById('carosuel');
    skills.scrollIntoView({ behavior: 'smooth' });
}

function rolarParaProjetos() {
    var projetos = document.getElementById('prj');
    projetos.scrollIntoView({ behavior: 'smooth' });
}

function rolarParaContato() {
    var contato = document.getElementById('ctt');
    contato.scrollIntoView({ behavior: 'smooth' });
}




function showText(element) { //efeito aparecer text
    var hiddenText = element.querySelector('.txt_icon');
    hiddenText.style.display = 'flex';
    hiddenText.classList.add('show'); // Adiciona a classe 'show' para fazer o texto aparecer suavemente
}
function hideText(element) {
    var hiddenText = element.querySelector('.txt_icon');
    hiddenText.style.display = 'none';
    hiddenText.classList.remove('show'); // Remove a classe 'show' para fazer o texto desaparecer suavemente
}



function verificarDados(){ // Verificador de email
    var email = document.getElementById('Email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        window.alert("Email válido.");
    } else {
        window.alert("Email inválido.");
    }
}



function abrirModal(){//função abrir modal projetos
    let modal = document.getElementById('modal_content')
    modal.style.display = 'flex'

    document.getElementsByClassName('close')[0].addEventListener('click', function(){//fechar modal
        document.getElementById('modal_content').style.display = "none"
    })

    window.addEventListener('click', function(event) {//fechar modal ao clicar fora dele
        var modal = document.getElementById('modal_content');
        if (event.target == modal) {
          modal.style.display = 'none';
        }
    });


}


// carousel projetos //
document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.card_prj').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.card_prj').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}


// modal localização //
function verLocation(){
    let modal = document.getElementById('modal_location')
    modal.style.display = 'flex'
}
// animation localização //
function verLocation() {
    let modal = document.getElementById('modal_location');
    modal.classList.add('fadeIn');
    modal.style.display = 'flex';
}
// fechar modal //
function fecharModalLocation() {
    let modal = document.getElementById('modal_location');
    modal.classList.add('fadeOut');
    setTimeout(function() {
        modal.style.display = "none";
        modal.classList.remove('fadeOut');
    }, 500);
}
