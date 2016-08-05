'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var author = $container.find('.repohead-details-container span.author').text()
    var $buttonMerge = $container.find('.merge-message .btn');
    var $altMergeP = $container.find('.merge-message .alt-merge-options');
    
    chrome.runtime.sendMessage({from: 'content', subject: 'localStorage'}, function(response){
      if (!response) { return; }

      var disabled = true;
      var localStorage = response.localStorage;
      if (localStorage && localStorage.protectedAuthor) {
          disabled = author.match(localStorage.protectedAuthor)
      }
    
      if (disabled) {
        var buttonMessage = 'Go Merge Yourself!';
        if (localStorage && localStorage.buttonMessage) {
          buttonMessage = localStorage.buttonMessage;
        }

        $buttonMerge.attr('disabled', true);
        $buttonMerge.html('<span class="octicon octicon-git-merge"></span> ' + buttonMessage);

        var altMergeMessage = 'See the Fuga <a href="https://github.com/IndependentIP/docs/tree/master/git">docs</a>';
        if (localStorage && localStorage.altMergeMessage) {
          altMergeMessage = localStorage.altMergeMessage;
        }
        $altMergeP.html(altMergeMessage);
      }
    });
  };

  changeMergeButtonState();
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
