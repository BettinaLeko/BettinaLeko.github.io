let aranKep = {
    photo: 'aran.jpg',
    title: 'Aranszigetek',
    text: 'Az Aran-szigetek egy három szigetből álló szigetcsoport Írország nyugati partjainál, a Galway-öbölben.A szigeteken számos vaskori erődítmény található, többek között a Dún Aengus',
    thumbnail: 'Aran-szigetek',
};
$('#photo').attr('src', aranKep.photo);
$('#title').text(aranKep.title);
$('#description').text(aranKep.text);

let barcelonaKep = {
    photo: 'Barcelona.jpg',
    title: 'Barcelona',
    text: 'Barcelona város Észak-Spanyolországban, Katalónia fővárosa. A lakosság száma 1 608 746 fő (2016). Barcelona a második legnépesebb spanyolországi város.',
    thumbnail: "Barcelona",
};
$('#photo').attr(barcelonaKep.photo);
$('#title').text(barcelonaKep.title);
$('#description').text(barcelonaKep.text);

let cornwallKep = {
    photo: 'Cornwall.jpg',
    title: 'Cornwall',
    text: 'Cornwall híres vad, mocsarakkal borított területeiről, hosszú és változatos tengerpartjáról és enyhe klímájáról. Az éves középhőmérséklet 9,8–12 °C között.',
    thumbnail: 'Cornwall',
};
$('#photo').attr('src',cornwallKep.photo);
$('#title').text(cornwallKep.title);
$('#description').text(cornwallKep.text);

let tenerifeKep = {
    photo: 'Tenerife.jpg',
    title: 'Tenerife',
    text: 'Tenerife 2 034 km²-es területével a Kanári-szigetek legnagyobbika. A Macizo de Anaga hegylánc a sziget északkeleti részében bioszféra-rezervátum.',
    thumbnail: 'Tenerife'
};
$('#photo').attr('src', tenerifeKep.photo);
$('#title').text(tenerifeKep.title);
$('#description').text(tenerifeKep.text);

let tasmankep = {
    photo: 'Abeltasman.jpg',
    title: "Abel-Tasman",
    text: 'Déli-szigeten található, mintegy 225,30 km². A túraösvény távja összesen 120 kilométer.',
    thumbnail: 'Abel-Tasman'
};
$('#photo').attr('src', tasmankep.photo);
$('#title').text(tasmankep.title);
$('#description').text(tasmankep.text);

let cortonaKep= {
    photo: 'Cortona.jpg',
    title: "Cortona",
    text: 'A település központja egy 600 méter magas dombon alakult ki. A vasútállomás a völgyben fekszik, 3 kilométernyire a központtól.',
    thumbnail: 'Cortona'
};
$('#photo').attr('src', cortonaKep.photo);
$('#title').text(cortonaKep.title);
$('#description').text(cortonaKep.text);

let madeiraKep = {
    photo: 'Madeira.jpg',
    title: 'Madeira',
    text: 'Madeira éghajlata a jelentős magasságkülönbségek és a magasan húzódó vízválasztó miatt fölöttébb változatos: a tengerszint közelében mediterrán, kb. 1200 m fölött már hegyvidéki.',
    thumbnail: 'Madeira'
};
$('#photo').attr('src', madeiraKep.photo);
$('#title').text(madeiraKep.title);
$('#description').text(madeiraKep.text);

let currentPhoto = 0;
let gallery = [aranKep, barcelonaKep, cornwallKep, tenerifeKep, tasmankep, cortonaKep, madeiraKep];

$('#photo').attr('src', gallery[currentPhoto].photo);
$('#title').text(gallery[currentPhoto].title);
$('#description').text(gallery[currentPhoto].text);



let loadPhoto = (currentPhoto) => {
    $('#photo').attr('src', gallery[currentPhoto].photo);
    $('#title').text(gallery[currentPhoto].title);
    $('#description').text(gallery[currentPhoto].text);
    $('.pictures').css('border', 'ridge');
    let picturesBorder =  document.getElementById([currentPhoto]);
    $(picturesBorder).css('border-color', '#808084');
};

loadPhoto(currentPhoto);

$('#right').click(() => {
    if(currentPhoto < 6) {
        currentPhoto++;
        loadPhoto(currentPhoto);
        console.log(currentPhoto);
    };
});

$('#left').click(() =>{
    if(currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
        console.log(currentPhoto);
    };
});
let borderCss = '#808084 ridge';
let borderdefault = 'ridge';


$('#0').click (() => {
    $('#photo').attr('src',gallery[0].photo);
    $('#title').text(gallery[0].title);
    $('#description').text(gallery[0].text);
    currentPhoto = 0;
    $('#0').css('border', borderCss);
    $('#1, #2, #3, #4, #5, #6').css('border', borderdefault);
});
$('#1').click (() => {
    $('#photo').attr('src',gallery[1].photo);
    $('#title').text(gallery[1].title);
    $('#description').text(gallery[1].text);
    currentPhoto = 1;
    $('#1').css('border', borderCss);
    $('#0, #2, #3, #4, #5, #6').css('border', borderdefault);
});
$('#2').click (() => {
    $('#photo').attr('src',gallery[2].photo);
    $('#title').text(gallery[2].title);
    $('#description').text(gallery[2].text);
    currentPhoto = 2;
    $('#2').css('border', borderCss);
    $('#1, #0, #3, #4, #5, #6').css('border', borderdefault);
});
$('#3').click (() => {
    $('#photo').attr('src',gallery[3].photo);
    $('#title').text(gallery[3].title);
    $('#description').text(gallery[3].text);
    currentPhoto = 3;
    $('#3').css('border', borderCss);
    $('#1, #2, #0, #4, #5, #6').css('border', borderdefault);
});
$('#4').click (() => {
    $('#photo').attr('src',gallery[4].photo);
    $('#title').text(gallery[4].title);
    $('#description').text(gallery[4].text);
    currentPhoto = 4;
    $('#4').css('border', borderCss);
    $('#1, #2, #3, #0, #5, #6').css('border', borderdefault);
});
$('#5').click (() => {
    $('#photo').attr('src',gallery[5].photo);
    $('#title').text(gallery[5].title);
    $('#description').text(gallery[5].text);
    currentPhoto = 5;
    $('#5').css('border', borderCss);
    $('#1, #2, #3, #4, #0, #6').css('border', borderdefault);
});
$('#6').click (() => {
    $('#photo').attr('src',gallery[6].photo);
    $('#title').text(gallery[6].title);
    $('#description').text(gallery[6].text);
    currentPhoto = 6;
    $('#6').css('border', borderCss);
    $('#1, #2, #3, #4, #5, #0').css('border', borderdefault);
});




