
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
