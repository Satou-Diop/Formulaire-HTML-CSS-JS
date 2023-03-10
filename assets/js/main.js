const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const password = document.querySelector('#password');
const passwordconfirm = document.querySelector('#passwordconfirm');
const nom = document.querySelector('#nom');
var verification = false;

// Fonction pour afficher le mot de passe en clair
togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';     
  password.setAttribute('type', type);
  togglePassword.classList.toggle('bi-eye');

});

// Fonction pour afficher le mot de passe en clair (partie confirmation)
togglePassword2.addEventListener('click', () => {
  const type = passwordconfirm.getAttribute('type') === 'password' ? 'text' : 'password';     
  passwordconfirm.setAttribute('type', type);
  togglePassword2.classList.toggle('bi-eye');
  
  });

// Verifcation des champs lors de la saisie
document.getElementById("nom").addEventListener("change", Verifier_nom);
document.getElementById("password").addEventListener("change", Verifier_mdp);
document.getElementById("passwordconfirm").addEventListener("change", Confirm_mdp);

function Verifier_nom() {
  // if(nom.value.lenght < 2){
  //   nom.classList.add('is-invalid')
  // }

  //REGEX pour verifier si le nom ne contient que des caracteres alphabetiques
  // Et le nom doit avoir minimum 2 caracteres 
  var regex_nom=  /([A-z]{2,}){1,}$/
   if(nom.value.match(regex_nom))
  { 
    nom.classList.remove('is-invalid');
    verification = true;}
   else
  { nom.classList.add('is-invalid');
    verification = false;}
       
}

function Verifier_mdp()
{ 
//Lors de la premiere saise, on supprime le texte help
document.querySelector('#passwordHelpInline').classList.add('passHelp');
var count_nbre=  /^.{10,60}$/;
if(!password.value.match(count_nbre)){
  document.getElementById("passCheck").style.display = 'block';
  verification = false;
}
else{document.getElementById("passCheck").style.display = 'none';
verification = true;}

//REGEX pour verifier si le mdp contient minimum 10 caracteres et 1 caractere special
var regex_password=  /^(?=.*[!@#\$%\^&\*_]).{10,60}$/;

if(password.value.match(regex_password)) 
{ 
  password.classList.remove('is-invalid');
  document.getElementById("charCheck").style.display = 'none';
  verification = true;
}
else
{ 
  password.classList.add('is-invalid');
  document.getElementById("charCheck").style.display = 'flex';
  verification = false;
}
} 

function Confirm_mdp() 
{ 

if(password.value == passwordconfirm.value) 
{ 
  passwordconfirm.classList.remove('is-invalid')
  verification = true;
}
else
{ 
  passwordconfirm.classList.add('is-invalid');
  verification = false;
}
} 

// Example starter JavaScript for disabling form submissions if there are invalid fields
function validateForm() {
  if(verification)
  { return true }
  else return false
}