# GitAnalyzer

This application lets you enter any Git Repo URL and observe metrics like No of Open Issues, etc.,

## Procedure

I have used GitAPI URL pattern for querying on issues and wrote a basic Jquery code for the functionality.

URI: https://api.github.com/repos/:owner/:repo/issues?since="Date-in-ISO8601-format"

For details visit: https://developer.github.com/v3/issues/

You can catch application live at : https://my-git-analyzer.herokuapp.com/

### Improvements

This app can be improved to angularjs version and promises can be used instead of nested api calls.
