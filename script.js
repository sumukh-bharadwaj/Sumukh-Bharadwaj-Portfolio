/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});          
              
})(jQuery);

var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});

// Scramble effect

$( document ).ready(function() {
  
	var charPool = "!<>-_\\/[]{}—=+*^?#________"; // Code feel  
	var button = $('.text-code-hover-feel');
		button.attr("data-text-scramble-original",button.text())
	
	extrachars = button.text();
	var intevalzor;
	button
	.mouseenter(function() {
	  intevalzor = setInterval(function(){ myTimer() }, 300); // Do a random int
	  
	  function myTimer() {
		console.log("doo stuff");
		button.text(createRandomText(extrachars));
		 
	  }
	  
	})
	.mouseleave(function() {
	  $(this).text($(this).attr("data-text-scramble-original"));
	  clearInterval(intevalzor);
	});
	
	function createRandomText(extrachars)
  {
	  var text = "";
	  var possible = "!<>-_\\/[]{}—=+*^?#________"+extrachars+extrachars+extrachars;
  
	  for( var i=0; i < 20; i++ )
		  text += possible.charAt(Math.floor(Math.random() * possible.length));
  
	  return text;
  }
	
	var lengthOfText = getLenghtOfString(button.text());
	var lengthOfPool = getLenghtOfString(charPool);
	// console.log("TextLength: ", lengthOfText);
	
   for (i = 0; i < lengthOfText; i++) { 
	  console.log("hejsa");
	  var randomIntIndexText = selectRandomFrom(lengthOfText)
	  var randomIntIndexPool = selectRandomFrom(lengthOfPool)
	  var poolChar = getCharAtPosition(charPool,randomIntIndexPool);
   }
	
	// console.log("PoolLength ", lengthOfPool);
	// console.log("Random From Text: ", selectRandomFrom(lengthOfText)); 
	// console.log("Random From pool: ", selectRandomFrom(lengthOfPool));
	
	getCharAtPosition(charPool,selectRandomFrom(lengthOfPool));
	
	function getCharAtPosition(str, position){
	  return str.charAt(position+1); //daspdksaoda
	}
	
	function replaceCharInString(index, char){
	  return str.substr(0, index) + 'char' + str.substr(index + 1);
	}
	
  
	function getLenghtOfString(element) {
	  return element.length;
	}
	
	
	function selectRandomFrom(number) {
	  //1 is the start number
	  //"number" is the number of possible results (1 + start (number) - end (1))
	  return Math.floor(Math.random() * number) + 1; 
	}
  
	
	// usage str = str.replaceAt(3, "a");
	function replaceLetterAt(index, character) {
	  return this.substr(0, index) + character + this.substr(index+character.length);
	}
	
  });


//   text scramble
class TextScramble {
	constructor(el) {
	  this.el = el
	  this.chars = '!<>-_\\/[]{}—=+*^?#________'
	  this.update = this.update.bind(this)
	}
	setText(newText) {
	  const oldText = this.el.innerText
	  const length = Math.max(oldText.length, newText.length)
	  const promise = new Promise((resolve) => this.resolve = resolve)
	  this.queue = []
	  for (let i = 0; i < length; i++) {
		const from = oldText[i] || ''
		const to = newText[i] || ''
		const start = Math.floor(Math.random() * 40)
		const end = start + Math.floor(Math.random() * 40)
		this.queue.push({ from, to, start, end })
	  }
	  cancelAnimationFrame(this.frameRequest)
	  this.frame = 0
	  this.update()
	  return promise
	}
	update() {
	  let output = ''
	  let complete = 0
	  for (let i = 0, n = this.queue.length; i < n; i++) {
		let { from, to, start, end, char } = this.queue[i]
		if (this.frame >= end) {
		  complete++
		  output += to
		} else if (this.frame >= start) {
		  if (!char || Math.random() < 0.28) {
			char = this.randomChar()
			this.queue[i].char = char
		  }
		  output += `<span class="dud">${char}</span>`
		} else {
		  output += from
		}
	  }
	  this.el.innerHTML = output
	  if (complete === this.queue.length) {
		this.resolve()
	  } else {
		this.frameRequest = requestAnimationFrame(this.update)
		this.frame++
	  }
	}
	randomChar() {
	  return this.chars[Math.floor(Math.random() * this.chars.length)]
	}
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
	'Food reviewer',
	'Robocist',
	'Python Developer',
	'Engineer',
	'Volunteer'
	
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  let counter = 0
  const next = () => {
	fx.setText(phrases[counter]).then(() => {
	  setTimeout(next, 1500)
	})
	counter = (counter + 1) % phrases.length
  }
  
  next();