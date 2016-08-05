# Partial Request

Disables GitHub's PullRequest button

## Install

* [chrome://extensions/](chrome://extensions/)
* Select `Developer Mode`
* Select `Load Unpacked Extension`
* Select the `app` folder of this repo

## Options

* **Protected Author**
  Regex defining the GitHub author's for which this should apply. 
   * Defaults to all authors  (`.*`)
   * E.x. `[myGitHubUsername|myOrg]`
* **Button Message**
  Instead of the 'Merge Pull Request' button text, display something else
   * Defaults to `Go Merge Yourself!`
* **Alternate Merge Message**
  Explain alternate merge options or instructions. 
   * Defaults to `'See the Fuga <a href="https://github.com/IndependentIP/docs/tree/master/git">docs</a>'`


