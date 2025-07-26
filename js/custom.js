$(document).ready(function() {
  particlesJS("particles-js", 
    {
      "particles": {
      "number": {
        "value": 160,
        "density": {
        "enable": true,
        "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
        "width": 0,
        "color": "#000000"
        },
        "polygon": {
        "nb_sides": 5
        },
        "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
        }
      }
      },
      "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
        "enable": true,
        "mode": "bubble"
        },
        "onclick": {
        "enable": true,
        "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
        },
        "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
        },
        "repulse": {
        "distance": 400,
        "duration": 0.4
        },
        "push": {
        "particles_nb": 4
        },
        "remove": {
        "particles_nb": 2
        }
      }
      },
      "retina_detect": true
    }
    );
});

var form = $("#example-advanced-form").show();

form.steps({
  headerTag: "h3",
  bodyTag: "fieldset",
  transitionEffect: "slideLeft",
  onStepChanging: function (event, currentIndex, newIndex)
  {
    // Allways allow previous action even if the current form is not valid!
    if (currentIndex > newIndex)
    {
      return true;
    }
    // Forbid next action on "Warning" step if the user is to young
    if (newIndex === 3 && Number($("#age").val()) < 18)
    {
      return false;
    }
    // Needed in some cases if the user went back (clean up)
    if (currentIndex < newIndex)
    {
      // To remove error styles
      form.find(".body:eq(" + newIndex + ") label.error").remove();
      form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
    }
    form.validate().settings.ignore = ":disabled,:hidden";
    return form.valid();
  },
  onStepChanged: function (event, currentIndex, priorIndex)
  {
    // Used to skip the "Warning" step if the user is old enough.
    if (currentIndex === 2 && Number($("#age").val()) >= 18)
    {
      form.steps("next");
    }
    // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
    if (currentIndex === 2 && priorIndex === 3)
    {
      form.steps("previous");
    }
  },
  onFinishing: function (event, currentIndex)
  {
    form.validate().settings.ignore = ":disabled";
    return form.valid();
  },
  onFinished: function (event, currentIndex)
  {
    alert("Submitted!");
  }
}).validate({
  errorPlacement: function errorPlacement(error, element) { element.before(error); },
  rules: {
    confirm: {
      equalTo: "#password"
    }
  }
});
