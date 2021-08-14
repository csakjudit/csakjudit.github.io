document.onkeydown = checkKey;

let data = {
  egy: {
    picture: 'images/water_mountains.png',
    title: 'Az első kép',
    description: 'Ez itt az első kép az első webalkalmazásomon.'
  },
  kettő: {
    picture: 'images/winter.png',
    title: 'A második kép',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc mihi cum tuo fratre convenit.'
  },
  három: {
    picture: 'images/summer.png',
    title: 'A harmadik kép',
    description: 'Falli igitur possumus. Nihil illinc huc pervenit. Itaque his sapiens semper vacabit.'
  },
  négy: {
    picture: 'images/spring.png',
    title: 'A negyedik kép',
    description: 'Duo Reges: constructio interrete. Res enim concurrent contrariae. Pugnant Stoici cum Peripateticis.'
  },
  öt: {
    picture: 'images/moon.png',
    title: 'Az ötödik kép',
    description: 'Istam voluptatem, inquit, Epicurus ignorat? Duo Reges: constructio interrete.'
  },
  hat: {
    picture: 'images/izland.png',
    title: 'A hatodik kép',
    description: 'Nam quid possumus facere melius? Ille incendat? Venit ad extremum.'
  },
  hét: {
    picture: 'images/green_nature.png',
    title: 'A hetedik kép',
    description: 'Sic consequentibus vestris sublatis prima tolluntur. Si verbum sequimur, primum longius verbum praepositum quam bonum.'
  },
  nyolc:{
    picture: 'images/balloon.png',
    title: 'A nyolcadik kép',
    description: 'Bonum integritas corporis: misera debilitas. Certe non potest. Aliter enim explicari, quod quaeritur, non potest.'
  },
 kilenc: {
    picture: 'images/autumn.png',
    title: 'A kilencedik kép',
    description: 'Non laboro, inquit, de nomine. A mene tu? Iam in altera philosophiae parte. Suo enim quisque studio maxime ducitur.'
  },
};


let imagesData = [data.egy, data.kettő, data.három, data.négy, data.öt, data.hat, data.hét, data.nyolc, data.kilenc];
let previewIndex = 0;


let highlightThis = (nr) => {    
    $('#thumbID_' + nr).focus();
};

let loadPhoto = (photoNumber) => {
    $('#picture').attr('src', imagesData[photoNumber].picture);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].description);
    highlightThis(previewIndex);
};

loadPhoto(previewIndex);
$('#arrowRight').on('click', () => {
    if (previewIndex < imagesData.length - 1) {
      previewIndex = previewIndex + 1;
        loadPhoto(previewIndex)
    } else if (previewIndex = imagesData.length) {
      previewIndex = 0;
        loadPhoto(previewIndex)};
});

$('#arrowLeft').on('click', () => {
    if (previewIndex > 0) {  
      previewIndex = previewIndex - 1;
        loadPhoto(previewIndex)
    } else if (previewIndex = 1) {
      previewIndex = imagesData.length -1;
        loadPhoto(previewIndex)};
});


let gTN = Object.values(imagesData)

let i = -1;
gTN.forEach((obj) => {
    i = i+1
    $('#thumbnails').append('<div id="thumbnailsPlace"><button class="thumbnailButton" id=thumbID_' + i + '> <img data-number=' + i + ' src=' + obj.picture + ' class="thumbnailPic"> </button> <span class="thumbCopy">' + obj.title + '</span> </div>');
});


$('.thumbnailPic').on('click', (event) => {
    let thumbnailClicked = $(event.target).attr('data-number');
    let numberIndex = parseInt(thumbnailClicked);
    previewIndex = numberIndex;
    loadPhoto(previewIndex);
})

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        $('#arrowLeft').trigger('click');
    }
    else if (e.keyCode == '39') {
        $('#arrowRight').trigger('click');
    }
}