function major()
{
  var year = document.getElementById('age').value;

  if(isNaN(year)== false)
    {
      if(year>=18)
      {
        alert('Vous êtes majeur !')
      }
      else
      {
        alert('Vous êtes mineur !')
      }
    }
    else{
      alert('Entrez un nombre !');
    }
}
