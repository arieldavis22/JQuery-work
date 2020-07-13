$(function () {

  // $("input").not("[type='text']").remove()

  // $('form').children().not("input:text, textarea, br").remove()

// const detachedList = $("li").detach()
// $("#content").append(detachedList)

// $("p:first").empty()


  // $(".red-box, .blue-box, .green-box").empty()
});



























  // // Fade back in over 1000ms
  // $(".red-box").fadeIn(1000);

  // // Fade element to specific opacity (here 50%)
  // $(".blue-box").fadeTo(1000, 0.5);

  // // Note that the blue box animation starts right away, whereas the second
  // // red box animation waits until the first animation finished.
  // // This is because each element has its own animation queue which is
  // // executed one after the other. So while the red box is still "busy" with
  // // its first animation, the second animation waits in the queue.

  // // Fade element in or out, depending on current status
  // $(".blue-box").fadeToggle();
  // $(".blue-box").fadeToggle();


  // $('.blue-box').slideToggle(1000)

  // $('p').hide().slideDown(1000)
  // // Notice that fadeToggle fades back to the blue box's previous opacity,
  // // thus only back to 50% opacity.
//============================================================================================
  // $('.blue-box').animate({
  //   "margin-left": "+=200px"
  // }, 1000)
  // .animate({
  //   "margin-left": "-=200px"
  // }, 1000)
//============================================================================================

  // $('.blue-box').animate({
  //   "margin-left": "+=200px",
  //   "opacity": "0",
  //   "height": "50px",
  //   "width": "50px",
  //   "margin-top": "25px"
  // }, 1000)

  // $("p").animate({
  //   fontSize: "20px"
  // }, 1000)
//============================================================================================

// $('.red-box').fadeTo(1000, 0.2)
// $('.green-box').delay(1000).fadeTo(1000, 0.5)
// $('.blue-box').delay(2000).fadeTo(1000, 0.7)

//============================================================================================

// $('.red-box').fadeTo(1000, 0.2)
//   $('.green-box').delay(1000).fadeTo(1000, 0.5)
//   $('.blue-box').delay(2000).fadeTo(1000, 0.7)

//============================================================================================

  // $('.red-box').fadeTo(1000, 0.2, () => {
  //   $('.green-box').fadeTo(1000, 0.5, () => {
  //     $('.blue-box').fadeTo(1000, 0.6)
  //     })
  //   })

  // $('.red-box').animate({
  //   marginLeft: "+=200px"
  // }, 1000, () => alert("hello"))
  

//============================================================================================

// $('.lightbox').delay(500).fadeIn(1000).delay(500).fadeOut(1000)

//============================================================================================

  // $('p').css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("li:first").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)")

//============================================================================================

  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)")

//============================================================================================

  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").filter((index) => {
  //   return index % 3 === 2
  // }).css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)")  
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)")  
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)")  
  // $("li").eq(-4).css("background-color", "rgba(180, 180, 30, 0.8)")  
  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)")  

//============================================================================================

  // $("ul ul:first").append("<li>im gonna be the last sub-item</li>")

  // $("<li>Last element of thing yeah</li>").appendTo("ul ul:first") also prependTo

  // $("ul ul:first").prepend("<li>im gonna be the firs sub-item</li>")

  // $(".red-box").after("<div class='red-box'>Another red</div>")
  // $(".blue-box").before("<div class='blue-box'>Another blue</div>")

  // $(".blue-box").before(() => {
  //   return "<div class='blue-box'>Blue 2</div>"
  // })

  // $(".blue-box").before($(".red-box"))

//============================================================================================

  // $("li").replaceWith("<li>Replaced</li>")
  // $("li").replaceWith(() => {
  //   return "<li>Replaced with a function hahahaha</li>"
  // })  

  // const firstListItem = $("li:first")
  // $("p:first").replaceWith(firstListItem)

  // $(".green-box, .blue-box").replaceWith("<div class='red-box'>More Red</div>")

  // $("<div class='red-box'>More Red</sdiv>").replaceAll(".green-box, .blue-box")

//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
