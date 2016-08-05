'use strict';

(function($){
  $(function(){
    $('#protected_author').val(localStorage.protectedAuthor);
    $('#button_message').val(localStorage.buttonMessage);
    $('#alt_merge_message').val(localStorage.altMergeMessage);

    $('#save_btn').closest('form').submit(function(e) {
      e.preventDefault();
      localStorage.protectedAuthor = $('#protected_author').val();
      localStorage.buttonMessage = $('#button_message').val();
      localStorage.altMergeMessage = $('#alt_merge_message').val();

      window.alert('The options have been saved!');
    });
  });
})(jQuery);
