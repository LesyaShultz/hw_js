 let mainForm = document.getElementById('#main-form')
 const containerGallery = document.querySelector('.containers'); 
let node = document.getElementById('main-form');
let text = document.querySelector('.text')
// let node = document.getElementById('main-form');
const mainContent = document.querySelector('.main_content');
let image = document.querySelector('.image')
let menuList = document.querySelector('.menu_list')


document.getElementById('main-form').addEventListener("submit", checkForm)
//  let sub = document.getElementById('submit');
//  sub.disabled = true;
//  event предаємо подію
 function checkForm (event) {  
     event.preventDefault();// відключення подій по замовчуванню
     let el = document.getElementById('main-form');
    let name = document.getElementById('nameInput').value;
    // let name = el.name.value - то самое, name - это атрибут name
    let pass = el.pass.value;
    let repass = el.repass.value;
    let fail="";
    if (name == "" || pass == "" )
    fail =" Заполните все поля";
    else if (name.length <= 1 || name.length > 50)
    fail =" Введите коректное имя";
    else if (pass != repass)
    fail =" Пароли должны совпадать";

    if (fail !=""){
        document.getElementById("error").innerHTML = fail;
    }else {
        alert("Все даные введены верно")  
        
        // window.location = ''; якщо дані введено вірно, то 
        // в кавички можна записати адресу сайта куди 
        // перенаправить браузер.
        // return true; необхідно буде убрати
    }
 }

//Погода

fetch('http://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=86427ef526790ce623bb53fd7b0cc4e5')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temperature').textContent = Math.round(data.main.temp - 273);
        document.querySelector('.wind').textContent =("Wind"+ " "+":"+ " " + Math.round(data.wind.speed))
    }
    )

    let menuSign = document.querySelector('.menu_Sign')

menuSign.addEventListener('click', addForm);
function addForm(event) {
let node = document.getElementById('main-form');
node.style.display = 'block';
event.preventDefault();
}

    //Дата
let now = new Date().toLocaleDateString(); 
 document.querySelector('.date').textContent = now;

    //localStorage

let but = document.getElementById('submit')
but.addEventListener('click',saveData)

  function saveData() {
    containerGallery.style.visibility = 'hidden';
    let input = document.getElementById("nameInput");
    localStorage.setItem("name", input.value);
    let storedValue = localStorage.getItem("name");
    console.log(storedValue)
    text.append(`Welcome dear ${storedValue}!!!`);
    // const mainContent = document.querySelector('.main_content');
    console.log(mainContent); 
     node.style.display = 'none';  
}

//слайд
const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click',() => {
      clearActiveClasses()  
        
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })  
}

//клик на галерею
 const clickNavGallery = document.querySelector('.menu_Gallery');
clickNavGallery.addEventListener('click', navGallery)

function navGallery(event) {
    event.preventDefault();
    containerGallery.style.display = 'flex';
    node.style.display = 'none';
    text.style.display = 'none';
    image.style.display = "none";
}


 const clickNavSign = document.querySelector('.menu_Sign');
clickNavSign.addEventListener('click',NavSign)

function NavSign(event) {
    event.preventDefault();
    containerGallery.style.display = 'none';
    image.style.display = "none";
}


 const clickNavHome = document.querySelector('.menu_Home');
clickNavHome.addEventListener('click', NavHome)
function NavHome(event) {
    event.preventDefault();
    containerGallery.style.display = 'none';   
    image.style.display = "flex";
    text.style.display = 'none';
     node.style.display = 'none'; 
}


//burger

document.querySelector('.btn-burger').onclick = () => {
 document.querySelector('.btn-burger','.menu_nav').classList.toggle('active');
    document.querySelector('.menu_nav').classList.toggle('active');
    document.querySelector('.card').style.display = "none";
}



