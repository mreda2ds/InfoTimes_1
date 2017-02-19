$( document ).ready(function() {
  console.log( "ready!" );
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: false,
    spaceBetween: 0,
    allowSwipeToPrev: false,
    allowSwipeToNext: false
  });
  /*var providers=[{
    'name':'',
    'Commercializing Innovation':'',
    'Market Intelligence':'',
    'Working Space':'',
    'Market Access/ Linkages':'',
    'Supply/ Value Chain Linkages':'',
    'Capacity Building & Training':'',
    'Consulting, Coaching, and Mentoring':'',
    'Legal Support':''
  }]
  var cities = [{
    'name':'Cairo',
    'Lat':30.01 ,
    'Long':31.14,
  },
  {
    'name':'Asyut',
    'Lat':27.11 ,
    'Long':31.04,
  },
  {
    'name':'Suez',
    'Lat':29.58,
    'Long':32.31,
  },
  {
    'name':'Aswan',
    'Lat':24.04  ,
    'Long':32.57,
  },
  {
    'name':'Red Sea',
    'Lat':27.15 ,
    'Long':33.50,
  }]

  /*current_Q = 0;
  Questions = [
  {
  'Q': "What is the current stage of your startup?",
  'a1':'Not Started',
  'a2': 'Started',
  'a3': 'Strated from While'
},
{
'Q': "What is the sector of your startup?",
'a1': "IT",
'a2': "Marketing",
'a3': "Health"
},
{'Q': "What is the nedded provider?"},
{
'Q': "Was the tool useful for you?",
'a1': "Yes",
'a2': "No"
}
]

load_Q();
console.log(Questions.length)
function empty_Q(){

}
function load_Q(){
$('#exampleSelect1').empty()
$('#Q_txt').html(Questions[current_Q].Q);
$('#exampleSelect1').append('<option>'+Questions[current_Q].a1+'</option>');
$('#exampleSelect1').append('<option>'+Questions[current_Q].a2+'</option>');
$('#exampleSelect1').append('<option>'+Questions[current_Q].a3+'</option>');
}
$('#mybtn').on('click', function(event) {
event.preventDefault(); // To prevent following the link (optional)
if(current_Q<Questions.length){
current_Q++;
load_Q();
}

});*/
$('#mybtn').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  console.log("hi");
  gonxt();
});
$('.chkbx').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  console.log("hixxx");
  gonxt();
});
$('#exampleSelect1').on('change', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  console.log("hiss");
  gonxt();
});
function gonxt(){
  swiper.params.allowSwipeToNext = true;
  swiper.slideNext(false);
  swiper.params.allowSwipeToNext = false;
}


//AIzaSyCuShUHmwkn4szM05wJE7Ry1ASMDzUoxJc
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  for(var i=0;i<cities.length;i++){
    var uluru1 = '{lat:'+ cities[i].lat +', lng:'+ cities[i].Long +'}';
    var marker = new google.maps.Marker({
      position: uluru1,
      label: cities[i].name,
      map: map
    });
    console.log(cities[i].name);
  }
}
});
