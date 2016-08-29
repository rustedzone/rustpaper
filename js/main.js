/*-
 *
 *
 * style.css


,--.                      ,--.
,--,--,--. ,--,--.`--',--,--,               `--' ,---.
|        |' ,-.  |,--.|      \              ,--.(  .-'
|  |  |  |\ '-'  ||  ||  ||  |    .--.      |  |.-'  `)
`--`--`--' `--`--'`--'`--''--'    '--'    .-'  /`----'
'---'         

 *
 *
 *
 * Authors:  Muhammad Syaful Ihsan <syaf.ruli.hsan at gmail.com>
 *********************
 *
 * Copyright (c) 2016 Muhammad Syafrul Ihsan
 * All Rights Reserved.
 *
 *********************
 * */

/*MENU

  S01. LOADER
    S010. UNDER CONSTRUCTION
  S02. HEADER
  S03. MAIN PAGE

  custom font = font-family: 'Open Sans Condensed', sans-serif;
*/



  $(document).ready(function(){
//
//  LOADER
//
    setTimeout(function(){
      $('body').addClass('loaded');
    },3000);
// ==============================================

//
//    EASY Nav-tab
//
    $("nav a").click(function(){
      event.preventDefault();
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");

      var tab = $(this).attr("href");
      $(".sec-content").not(tab).hide(2000);
      $(tab).show(1000);
    });
    // ==============================================

    //
    //Resume section
    //
      $("dt a").click(function(){
        event.preventDefault();

        $(this).next().show(1000);
        console.log($(this));
      })
    // ==============================================
    // modal box

      $(".Pcontainer").click(function(){
        event.preventDefault();
        var _id = $(this).attr("id");
        $("#"+_id+".modals").show();

      })

      // to close the modal box
      $(".modal-close").click(function(){
        $(".modals").hide();
      })
      // TODO: make js script for closing modal box via clicking outside the box

  });
