document.body.innerHTML=`
<section>
<div class="title">
<h1 class="edit">BREAKING BAD CREW</h1>
</div>
<div class="row">
</div>
</section>`
async function breakingbad(){
    const data=await fetch("https://www.breakingbadapi.com/api/characters",{metod:"GET"});
    const users=await data.json();
    const container=document.querySelector(".row");
    users.forEach((user)=>{
        container.innerHTML+=`
    <div class="col-xs-12 col-sm-6 col-lg-4 col-xlg-3">
    <div class="details">
  <h4>Name: ${user.name}</h4>
  <p><b>Nice Name:</b> ${user.nickname}</p>
  <p><b>Birthday:</b> ${user.birthday}</p>
  <p><b>Occupation:</b> ${user.occupation}</p>
  <p><b>Status:</b> ${user.status}</p>
  <p><b>Portrayed:</b> ${user.portrayed}</p>
  <p><b>category:</b> ${user.category}</p>
 </div>
 </div>       
        `;
})
console.log(users);
}
breakingbad();