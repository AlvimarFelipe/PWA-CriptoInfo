
//Acesso a camêra
var theStream;
let facingMode = "user"
grabVideo()

function grabVideo(){
    if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
      !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
      alert('User Media API not supported.');
      return;
    }
  
    var constraints = {
      video: {
        facingMode: facingMode
        },
    };
  
    getUserMedia(constraints, function(stream) {
      var mediaControl = document.querySelector('video');
  
      if ('srcObject' in mediaControl) {
        mediaControl.srcObject = stream;
      } else if (navigator.mozGetUserMedia) {
        mediaControl.mozSrcObject = stream;
      } else {
        mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
        
      }
      theStream = stream;
    }, function(err) {
      alert('Error: ' + err);
    });
  };
  
  function getUserMedia(options, successCallback, failureCallback) {
    var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (api) {
      return api.bind(navigator)(options, successCallback, failureCallback);
    }
}


//Capturar Imagem
document.querySelector('.take-photo').addEventListener('click', () => {
    if (!('ImageCapture' in window)) {
      alert('ImageCapture is not available');
      return;
    }
  
    if (!theStream) {
      alert('Grab the video stream first!');
      return;
    }
   const track = theStream.getVideoTracks()[0];
   let theImageCapturer = new ImageCapture(track);
  //  var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);
  
    theImageCapturer.takePhoto(
       {imageHeight:20,imageWidth:16}).then(blob => {
      document.querySelector('.vid').classList.add('d-none')
      document.querySelector('.c-loader').classList.remove('d-none')
      setTimeout(() => {
        document.location.href="/home.html"
       }, 1000)
      })
      .catch(err => console.log('Error: ' + err));
  });

