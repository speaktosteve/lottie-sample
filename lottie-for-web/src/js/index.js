import lottie from 'lottie-web';
import './../styles/appStyles.scss';

  lottie.loadAnimation({
    container: document.getElementById('animationContainer'), 
    path: 'data/demo/loading_light_bulb.json',
    //path: 'data/demo/3d.json',
    loop: true 
  });

  lottie.loadAnimation({
    container: document.getElementById('loaderContainer'), 
    path: 'data/demo/loader.json',
    loop: true
  });


