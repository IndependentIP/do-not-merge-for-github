'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var author = $container.find('span.author').text()
    // var issueTitle = $container.find('.js-issue-title').text();
    var $buttonMerge = $container.find('.merge-message button.js-merge-branch-action');
    var disabled = true;
    var buttonHtml = '';

    chrome.runtime.sendMessage({from: 'content', subject: 'localStorage'}, function(response){
      if (!response) { return; }

      var localStorage = response.localStorage;
      console.log("response", response)
      if (localStorage && localStorage.protectedAuthor) {
          disabled = issueTitle.match(localStorage.protectedAuthor)
          console.log("issueTitle", issueTitle)
          console.log("disabled", disabled)
      }
      // var wipTitleRegex = /(\[wip\]|\[do\s*not\s*merge\]|\[dnm\])/i;
      // var wipTagRegex = /(wip|do\s*not\s*merge|dnm)/i;

      // var isWipTitle = wipTitleRegex.test(issueTitle);
      // var isWipTaksList = $container.find('.timeline-comment:first input[type="checkbox"]:not(:checked)').length > 0;
      // var isSquashCommits = false;
      // $container.find('#commits_bucket .commit .commit-title').each(function(i, elem){
      //   isSquashCommits = isSquashCommits || $(elem).text().match(/^\s*(squash|fixup)!\s/);
      // });

      // var isWipTag = false;
      // $container.find('#discussion_bucket .labels .label').each(function(i, elem) {
      //   isWipTag = isWipTag || $(elem).text().match(wipTagRegex);
      // });

      // disabled = (isWipTitle || isWipTaksList || isSquashCommits || isWipTag);

      var buttonMessage = '';

      if (localStorage && localStorage.buttonMessage) {
        buttonMessage = localStorage.buttonMessage;
      } else {
        buttonMessage = 'Go Merge Yourself!';
      }

      buttonHtml = '<span class="octicon octicon-git-merge"></span> ' + (disabled ? buttonMessage : 'Merge pull request');
      
      $buttonMerge.attr('disabled', disabled);
      $buttonMerge.html(buttonHtml);
    });
  };

  changeMergeButtonState();
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
