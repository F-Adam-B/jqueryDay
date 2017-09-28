// 'use strict';
// // // image displayed in full size at top when user selects it

// // function handleThumbnailClicks() {
// //   $('.thumbnail').on('click', function(event) {
// //      const imgSrc = $(event.currentTarget).find('img').attr('src');  
// //      const imgAlt = $(event.currentTarget).find('img').attr('alt');
    
// //     $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    
// //     // Accomplishes the same as line 6 with only one use off .attr()
// //     // by passing it an object with multiple properties.
// //     // See: http://api.jquery.com/attr/#attr-attributes
// //     // $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
// //   });
// // }

// // $(handleThumbnailClicks());

// // $(function() {
// //   const thumbnail = $('.thumbnail')
// //   const heroImg = $('.hero img')
// //   thumbnail.on('click', function(event) {
// //     const newSrc = $(event.target).attr('src');
// //     const newAlt = $(event.target).attr('alt');
// //     heroImg.attr('src', newSrc)
// //     heroImg.attr('alt', newAlt)
// //     console.log(newAlt);

// //   });
// // }

// // Return of FizzBuzz


// // create event listener

// // when a user submits a form

// // make the sequence
// function fizzBuzzSequence () {
     
//       for (let i = 1; i <= countTo; i++) {
//         switch(true) {
//         case i % 15 === 0: 
//           result.push('fizzbuzz');
//           break;
//         case i % 5 === 0:
//           result.push('buzz');
//           break;
//         case i % 3 === 0:
//           result.push('fizz');
//           break;
//         default:
//           result.pop(i);
//           break;
//         }
//       } 

// // store the array
//       function fizzBuzzArray(num){
//         const result = [];
//         for (let i = 0; i <= num; i++){
//           result.push(fizzBuzzSequence(i));
//         }
//         return result;  
//       }
// }

// // identify fizzbuzzs in array

// const fizzbuzzs = fizzBuzzArray(num);
//   fizzbuzzs.forEach(function(element) {
//     const newClass = $('<div class="fizz-buzz-item"><span>' + element + '</span></div>');
//     if (element === fizz || element === buzz || element === fizzbuzz) {
//       newClass.addClass(element);
//     }
    
//   },


// //   $('.fizz-buzz-itm').append('<div class="fizz-buzz-item">
// //   <span>1</span>
// // </div>');

// // $('form').submit(function(event) 

