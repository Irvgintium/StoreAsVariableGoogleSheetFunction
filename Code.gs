/**
 * These Google Sheets project contains custom functions for storing, accessing, and deleting variables. This allows users to store any specific sheet functions as a variables & be used several times in a complex function by only calling the configured "Variable name" instead of the actual Google Sheet function (for readability).
 *Written by Irvin Jay Guinto • 2022;
 * @public
 * @class
 */

/**
 * Stores any cell value & their data as variables in {"variable name1",value1,"variable name2",value2} format.
 *
 * @param {array object} input The value to multiply.
 * @return none.
 * @customfunction
 */
function STOREVAR(arrayValue) { //Store them as variables
  var variables = {};
  var total = arrayValue[0].length;
  var userProperties = PropertiesService.getUserProperties();
  for (var i = 0; i < total; i++) {
    (i % 2) ? (i === 1) ? variables[arrayValue[0].slice(i - 1, i + 1)[0]] = arrayValue[0].slice(i - 1, i + 1)[1] : variables[arrayValue[0].slice(i - 1, i + 1)[0]] = arrayValue[0].slice(i - 1, i + 1)[1] : null
  }
  userProperties.setProperties(variables);
  console.log(arrayValue[0], 'Store on ' + new Date());
}

/**
 * Returns value value of a named variable.
 *
 * @param {any variable} input The value to multiply.
 * @return stored value.
 * @customfunction
 */
function QVAR(name) { //Queries a variable then returns its value
  var userProperties = PropertiesService.getUserProperties();
  var variableValue = userProperties.getProperty(name);
  return variableValue;
}

/**
 * Force deletes all variables stored by the user. 
 * 
 * @param {boolean}.
 * @return n/a.
 * @customfunction
 */
function CLEANVAR(boolean) { //Force delete all variables
  var userProperties = PropertiesService.getUserProperties();
  boolean ? userProperties.deleteAllProperties() : null;
}
