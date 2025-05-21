function Cadastro(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    var validEmail = "brunasilvalopes629@gmail.com"; 
    var validUsuario = "usuario123"; 
    var validSenha = "senha123"; 
    
    if (email == validEmail && usuario == validUsuario && senha == validSenha) {
        Swal.fire({
            title: 'Cadastro realizado!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "/html/home.html"; 
            }, 100);
        });
    } else {
        Swal.fire({
          title: 'Erro!',
          text: 'Usuário ou senha incorretos.',
          icon: 'error',
          confirmButtonText: 'Tentar novamente',
        });
    }
}