# StoreAsVariableGoogleSheetFunction
This is a simple Google Apps Script project where I use the functionality of the [Properties Service](https://developers.google.com/apps-script/guides/properties) to create a custom function that will allow users to store any specific sheet functions as variables &amp; be used several times in a very complex Google Sheet function by only calling the configured "Variable Name" instead of the actual Google Sheet function (for readability purposes).

## Functions ##
> STOREVAR(_arrayValue_)

_This custom function will store the custom variable name and the Google Sheet function returned value._
**E.g.** `=STOREVAR({"OGPrice",MID(A2,4,8),"ACPrice",MID(B2,4,8)})`

> QVAR(name)

_This custom function will access the stored variable name and return its value._ **E.g.** `=QVAR("OGPrice")` 
_(This will then return the `OGPrice` variable, which is the returned value of the specfic Google Sheet function `=MID(A2,4,8)`)_

_For more context, you can view a sample demonstration [here](https://imgur.com/a/3Sivk0K)._
