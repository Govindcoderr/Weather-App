let valuesearch = document.getElementById('valuesearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('description');
let clouds = document.getElementById('clouds');
let humidity =document.getElementById('humidity');
let pressure =document.getElementById('pressure');
let form =document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    if(valuesearch.value != ''){
        searchWeather();
    }
})

let id = '86aee97777ddd65cd6ecb920e3efd398'
let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () =>{
    fetch(url +'&q=' + valuesearch.value)
    .then(responsive => responsive.json())
    .then(data =>{
        console.log(data);
        if(data.cod ==200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src= 'http://flagsapi.com/'+data.sys.country+'/shiny/32.png';

            temperature.querySelector('img').src ='http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temperature.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText =data.clouds.all;
            humidity.innerText = data.main.humidity.all;
            pressure.innerText = data.main.pressure;

        }else{
            //false
            main.classList.add('error');
            setTimeout( ()=>{
                    main.classList.remove('error');
            }, 1000);

        }
        valuesearch.value = '';

    })

}
