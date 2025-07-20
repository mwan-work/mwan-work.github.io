let transformLine = [];
let transformText =`    <font color="gray"><i>##Insert transformation actions here</i></font>`;
let transformCounter=0;

function addLine() {
	var list_transform = document.getElementById('list_transform');
	var selectedTransform = list_transform.value;
    let newLine;
	let lineNumber = transformLine.length + 1;
	
	if(selectedTransform==='remove leading and trailing'){
		newLine =`<font color="gray"><i>    #TRANSFORM ${lineNumber}: Remove leading and trailing spaces.</i></font>
    remove leading and trailing spaces (TEMP"1")<br>`
	} else if(selectedTransform==='convert to URL link'){
		newLine =`<font color="gray"><i>    #TRANSFORM ${lineNumber}: Convert into clickable URL link. Only works if value is URL address.</i></font> 
    set TEMP"2" to xpath "<font color="red">${amendedXPathFunction}</font>"
    add prefix (TEMP"1","&lt;a href=\\"")
    add suffix (TEMP"1","\\" target=\\"_blank\\">")
    concatenate with delimiter (TEMP"1",TEMP"2","")
    add suffix (TEMP"1","&lt;/a>")	
    `
	} else	if(selectedTransform==='convert to lower case'){
		newLine =`<font color="gray"><i>    #TRANSFORM ${lineNumber}: Change all to lower case.</i></font>    
    lower case (TEMP"1")<br>`
	} else if(selectedTransform==='remove numbers'){
	
	newLine =`<font color="gray"><i>    #TRANSFORM ${lineNumber}: Remove all numbers.</i></font>
    remove string (TEMP"1","[0-9]")<br>`
	}	else if(selectedTransform==='remove brackets'){
	
	newLine =`<font color="gray"><i>    #TRANSFORM ${lineNumber}: Remove bracket/parentheses and everything inside.</i></font>
<font color="gray"><i>    #e.g. 'Jonathan (John) Smith' --> 'Jonathan Smith'</i></font>
    remove substring using regex (TEMP"1","\\((.*?)\\)")<br>`
	}	else if(selectedTransform==='convert to title case'){
		
	newLine =`<font color="gray"><i>    #TRANSFORM ${lineNumber}: Replace lower case letter with upper case at the beginnining of each word. Use 'lower case' rule beforehand for best results.</i></font>
<font color="gray"><i>    #e.g. 'john doe' --> 'John Doe'</i></font>
    replace string by string (TEMP"1","\\\\ba","A")
    replace string by string (TEMP"1","\\\\bb","B")
    replace string by string (TEMP"1","\\\\bc","C")
    replace string by string (TEMP"1","\\\\bd","D")
    replace string by string (TEMP"1","\\\\be","E")
    replace string by string (TEMP"1","\\\\bf","F")
    replace string by string (TEMP"1","\\\\bg","G")
    replace string by string (TEMP"1","\\\\bh","H")
    replace string by string (TEMP"1","\\\\bi","I")
    replace string by string (TEMP"1","\\\\bj","J")
    replace string by string (TEMP"1","\\\\bk","K")
    replace string by string (TEMP"1","\\\\bl","L")
    replace string by string (TEMP"1","\\\\bm","M")
    replace string by string (TEMP"1","\\\\bn","N")
    replace string by string (TEMP"1","\\\\bo","O")
    replace string by string (TEMP"1","\\\\bp","P")
    replace string by string (TEMP"1","\\\\bq","Q")
    replace string by string (TEMP"1","\\\\br","R")
    replace string by string (TEMP"1","\\\\bs","S")
    replace string by string (TEMP"1","\\\\bt","T")
    replace string by string (TEMP"1","\\\\bu","U")
    replace string by string (TEMP"1","\\\\bv","V")
    replace string by string (TEMP"1","\\\\bw","W")
    replace string by string (TEMP"1","\\\\bx","X")
    replace string by string (TEMP"1","\\\\by","Y")
    replace string by string (TEMP"1","\\\\bz","Z")
`
	}else if(selectedTransform==='convert to upper case'){
		
	newLine =`<font color="gray"><i>    #TRANSFORM ${lineNumber}: Convert everything to upper case.</i></font>
    replace string by string (TEMP"1","a","A")
    replace string by string (TEMP"1","b","B")
    replace string by string (TEMP"1","c","C")
    replace string by string (TEMP"1","d","D")
    replace string by string (TEMP"1","e","E")
    replace string by string (TEMP"1","f","F")
    replace string by string (TEMP"1","g","G")
    replace string by string (TEMP"1","h","H")
    replace string by string (TEMP"1","i","I")
    replace string by string (TEMP"1","j","J")
    replace string by string (TEMP"1","k","K")
    replace string by string (TEMP"1","l","L")
    replace string by string (TEMP"1","m","M")
    replace string by string (TEMP"1","n","N")
    replace string by string (TEMP"1","o","O")
    replace string by string (TEMP"1","p","P")
    replace string by string (TEMP"1","q","Q")
    replace string by string (TEMP"1","r","R")
    replace string by string (TEMP"1","s","S")
    replace string by string (TEMP"1","t","T")
    replace string by string (TEMP"1","u","U")
    replace string by string (TEMP"1","v","V")
    replace string by string (TEMP"1","w","W")
    replace string by string (TEMP"1","x","X")
    replace string by string (TEMP"1","y","Y")
    replace string by string (TEMP"1","z","Z")
`
	}
	transformCounter+=1;
    transformLine.push(newLine);
    updateFunctionLine();
	
	console.log(transformCounter);
}


function removeLine() {
    transformLine.pop();
	transformCounter-=1;
	
	if(transformCounter<0){
	   transformCounter=0;
   }
    updateFunctionLine();
	

	
	
	console.log(transformCounter);
}


function updateFunctionLine() {
    
    const dynamicContent = transformLine
	
	.join('<br>');
    
   
    transformText = dynamicContent;
  if(transformCounter===0){
	   transformText=`    <font color="gray"><i>##Insert transformation actions here</i></font>`;
   }
    
	generateRuleFromHighlightedRow();
}




 var amendedXPathConditionBackup='Xpath';

 function amendXPathConditionAttr() {
  
  
  // Regular expression to match the XPath with an attribute at the end
  var attributeRegex = /(.+)\/@([\w:]+)$/;

  // Check if the XPath matches the pattern
  var match = amendedXPathCondition.match(attributeRegex);

  if (match) {
    // Construct the amended XPath with the highlightedValue
    amendedXPathCondition = `${match[1]}[@${match[2]}='</font><font color='orange'>${highlightedValue1}</font><font color='blue'>']`;
  }

  // The amendedXPathCondition is now updated
  console.log(amendedXPathCondition);
  //generateRuleFromHighlightedRow();
  return amendedXPathCondition;
}
 
 var amendedXPathFunctionBackup='Xpath';
 function amendXPathFunctionAttr() {
	 
  // Assuming amendedXPathCondition already has a value
  
  // Regular expression to match the XPath with an attribute at the end
  var attributeRegex = /(.+)\/@([\w:]+)$/;

  // Check if the XPath matches the pattern
  var match = amendedXPathFunction.match(attributeRegex);

  if (match) {
    // Construct the amended XPath with the highlightedValue
    amendedXPathFunction = `${match[1]}[@${match[2]}='</font><font color='orange'>${highlightedValue2}</font><font color='red'>']`;
  }

 
  console.log(amendedXPathFunction);
  //generateRuleFromHighlightedRow();
  return amendedXPathFunction;
}
 
 
 let highlightedValue1='Xpath Value';
 let highlightedValue2='Xpath Value';
 
 
 function getHighlightedValue1() {
  // Get the highlighted line element
  const highlightedLineDiv = document.querySelector('.line.highlighted');

  // Get the highlighted XPath element
  const selectXPathDiv = document.querySelector('.selectxpathdiv.highlighted');

  if (highlightedLineDiv) {
    // Find the content within the highlighted element
    const highlightedContent = highlightedLineDiv.textContent.trim();

    // Use a regular expression to remove leading numbers and spaces
    const cleanedContent = highlightedContent.replace(/^\d+\s*/, '');

    // Get the XPath from .selectxpathdiv.highlighted
    let highlightedXPath = '';
    if (selectXPathDiv) {
      highlightedXPath = selectXPathDiv.textContent.trim();
	  console.log("highlighted1-1"+highlightedXPath)
    }

    
    if (highlightedXPath.includes("[@") && highlightedXPath.endsWith("']")) {
        // Use a regular expression to remove the part matching [@...']
        highlightedXPath = highlightedXPath.replace(/\[@[^']*'\]/, '');
		
		if (highlightedXPath.includes("[@")) {
    // Split the string at '[@' and take the part before it
		highlightedXPath = highlightedXPath.split('[@')[0];
		}
		
    }


    // Check if the XPath refers to an attribute
    if (highlightedXPath.includes('@')) {
      // Extract attribute name from XPath
      const attributeName = highlightedXPath.split('@')[1];
      console.log("highlighted1-2"+highlightedXPath)
      // Extract the attribute value using a regular expression
      const attributeRegex = new RegExp(`${attributeName}="([^"]*)"`);
      const attributeMatch = cleanedContent.match(attributeRegex);

      if (attributeMatch) {
        highlightedValue1 = attributeMatch[1]; // Get the attribute value
      } else {
        highlightedValue1 = null; // No attribute value found
      }
    } else {
      // Handle case where XPath refers to element content
      // Create a temporary DOM element to parse the highlighted content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = cleanedContent;
console.log("cleancontent1"+cleanedContent)
      // Extract the text content from the first child element (the main content)
      const textContent = tempDiv.textContent.trim();

      highlightedValue1 = textContent;
    }

    // Log the stored value to confirm
    console.log('Stored value: ' + highlightedValue1);

    // Return the stored value
    return highlightedValue1;
  } else {
    console.log('No highlighted element found.');
    return null;
  }
}
 
 

 function getHighlightedValue2() {
  // Get the highlighted line element
  const highlightedLineDiv = document.querySelector('.line.highlighted');

  // Get the highlighted XPath element
  const selectXPathDiv = document.querySelector('.selectxpathdiv.highlighted');

  if (highlightedLineDiv) {
    // Find the content within the highlighted element
    const highlightedContent = highlightedLineDiv.textContent.trim();

    // Use a regular expression to remove leading numbers and spaces
    const cleanedContent = highlightedContent.replace(/^\d+\s*/, '');

    // Get the XPath from .selectxpathdiv.highlighted
	let highlightedXPath2 = '';
    let highlightedXPath = '';
    if (selectXPathDiv) {
		
      highlightedXPath = selectXPathDiv.textContent.trim();
	  if (highlightedXPath.includes("[@")) {
    // Split the string at '[@' and take the part before it
		highlightedXPath = highlightedXPath.split('[@')[0];
		}
	  console.log("highlighted2-1"+highlightedXPath)
    }
   
    

    // Check if the XPath refers to an attribute
    if (highlightedXPath.includes('@')) {
		console.log("highlighted2-2"+highlightedXPath)
      // Extract attribute name from XPath
      const attributeName = highlightedXPath.split('@')[1];
      
      // Extract the attribute value using a regular expression
      const attributeRegex = new RegExp(`${attributeName}="([^"]*)"`);
      const attributeMatch = cleanedContent.match(attributeRegex);

      if (attributeMatch) {
        highlightedValue2 = attributeMatch[1]; // Get the attribute value
      } else {
        highlightedValue2 = null; // No attribute value found
      }
    } else {
      // Handle case where XPath refers to element content
      // Create a temporary DOM element to parse the highlighted content
      const tempDiv = document.createElement('div');
	  
      tempDiv.innerHTML = cleanedContent;
console.log("cleancontent2"+cleanedContent)
      // Extract the text content from the first child element (the main content)
      const textContent = tempDiv.textContent.trim();

      highlightedValue2 = textContent;
    }

    // Log the stored value to confirm
    console.log('Stored value: ' + highlightedValue2);

    // Return the stored value
    return highlightedValue2;
  } else {
    console.log('No highlighted element found.');
    return null;
  }
}
 


function generateRule() {
    var selectXPath = document.getElementById('selectXPath').innerText.trim();
    var btn_copyxpath = document.getElementById('btn_copyxpath');
    var btn_copyrule = document.getElementById('btn_copyrule');
    var list_fields = document.getElementById('list_fields');
  var list_when = document.getElementById('list_when');
  var list_function = document.getElementById('list_function');
var selectedField = list_fields.value;
	var selectedWhen = list_when.value;
	var selectedFunction = list_function.value;
    if (!selectXPath) {
        document.getElementById('outputRule').innerText = '';
        btn_copyrule.disabled = true;
        btn_copyxpath.disabled = true;
        return;
    }

    var firstLine = selectXPath.split('\n')[0].trim();

    // Function to amend the XPath according to the rules
    function amendXPath(xpath) {
        return xpath.replace(/(\w+:\w+)(\[\d+\])?/g, (match, p1, p2) => {
            if (p2) {
                return `*[name()='${p1}']${p2}`;
            } else {
                return `*[name()='${p1}']`;
            }
        });
    }

     amendedXPath = amendXPath(firstLine);
  

    if (selectedField === 'local field') {
        targetField = 'discovery"."local1';
    } else if (selectedField === 'resource type') {
        targetField = 'discovery"."resourceType';
    } 	else {
        targetField = `dc"."${selectedField.split(':')[1]}`;
    }
	
	
	var btn_copyxpathtocondition = document.getElementById('btn_copyxpathtocondition');
var btn_copyxpathtofunction = document.getElementById('btn_copyxpathtofunction');


		//CONDITION	
	if (selectedWhen === 'true'){
		
		btn_copyxpathtocondition.disabled = true;
		whenLine = `<font color="gray"><i>#CONDITION: Always run the rule</i></font>
    true`
	} else if (selectedWhen === 'exist'){
		
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Only run when the xpath exists</i></font>
    exist "<font color="blue">${amendedXPathCondition}</font>"`
	} else if (selectedWhen === 'not exist'){
		
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Only run when the xpath does NOT exists</i></font>
    not exist "<font color="blue">${amendedXPathCondition}</font>"`
	}else if (selectedWhen === 'equals'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Only run when xpath value is EQUAL to "${highlightedValue1}"</i></font>
    "<font color="blue">${amendedXPathCondition}</font>" equals "<font color="FF8C00">${highlightedValue1}</font>"`
	} else if (selectedWhen === 'not equals'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Only run when xpath value is NOT EQUAL to "${highlightedValue1}"</i></font>
    "<font color="blue">${amendedXPathCondition}</font>" not equals "<font color="FF8C00">${highlightedValue1}</font>"`
	}else if (selectedWhen === 'starts with'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Only run when xpath value STARTS with "${highlightedValue1}"</i></font>
    exist "<font color="blue">${amendedXPathCondition}[starts-with(., '<font color="FF8C00">${highlightedValue1}</font>']</font>"`
	} else if (selectedWhen === 'contains (case)'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Only run when xpath value CONTAINS "${highlightedValue1}" (case sensitive)</i></font>
    exist "<font color="blue">${amendedXPathCondition}[contains(., '<font color="FF8C00">${highlightedValue1}</font>']</font>"`
	} else if (selectedWhen === 'contains (non-case)'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Only run when xpath value CONTAINS "${highlightedValue}" (ignore case sensitive)</i></font>
    exist "<font color="blue">${amendedXPathCondition}[contains(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'<font color="FF8C00">${highlightedValue1}</font>')]</font>"`
	}
	
	
	//ACTION
	if (selectedFunction === 'copy'){
		btn_copyxpathtofunction.disabled = false;
		ruleName = `Copy to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: Copies value from xpath into ${selectedField}</i></font>
    copy "<font color="red">${amendedXPathFunction}</font>" to "<font color="purple">${targetField}</font>"`
	} else if (selectedFunction === 'set value'){
		btn_copyxpathtofunction.disabled = true;
		ruleName = `Set to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: Sets a value into ${selectedField}</i></font>
    set "<font color="red">Insert custom text here</font>" in "<font color="purple">${targetField}"`
	} else if (selectedFunction === 'set to TEMP'){
		btn_copyxpathtofunction.disabled = false;
		ruleName = `Set to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: Assigns xpath value into TEMP1</i></font> 
    set TEMP"1" to xpath "<font color="red">${amendedXPathFunction}</font>"
	
    <font color="gray"><i>##Insert transformation actions below this line</i></font>
	
	
    <font color="gray"><i>#ACTION: Assign value from TEMP1 into ${selectedField}</i></font> 
    set TEMP"1" in "<font color="purple">${targetField}</font>"`
	} 
	
	
	
	
	

   var outputRule = `rule "${ruleName}"
when
    ${whenLine}
then
    ${functionLine}

end
    `;
	
	 const highlightedDiv = document.querySelector('.selectxpathdiv.highlighted');
 
	 if (!highlightedDiv) {
		 
		 btn_copyxpathtocondition.disabled = true;
		 btn_copyxpathtofunction.disabled = true;
	 }
	
	
	
	
	
	document.getElementById('outputRule').innerHTML = outputRule;

	
}




  function copyOutputRule() {
        var textToCopy = document.getElementById('outputRule').innerText.trim();

        // Create a textarea element and set its value to the text to be copied
        var textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px'; // Move the textarea off-screen
        document.body.appendChild(textarea);

        // Select and copy the text inside the textarea
        textarea.select();
        document.execCommand('copy');

        // Remove the textarea from the DOM
        document.body.removeChild(textarea);

        // Provide visual feedback or alert
        alert('Rule copied to clipboard!');
    }


function enableButtonIfTextareaNotEmpty() {
    var xmlInput = document.getElementById('xmlInput');
    var singleButton = document.getElementById('singleButton');

    // Check if textarea is not empty
    if (xmlInput.value.trim() !== '') {
        singleButton.disabled = false; // Enable the button
    } else {
        singleButton.disabled = true; // Keep the button disabled
    }
	validateXML();
}



function removeNumbersInSquareBrackets() {
    const outputXpathDiv = document.getElementById('outputXPath');
    const spans = outputXpathDiv.querySelectorAll('span.fullxpath');
    var occnumberON = document.getElementById("occnumberON"); 
var occnumberOFF = document.getElementById("occnumberOFF"); 
	


    if (occnumberON) {
        occnumberON.disabled = false;
    }
	
	  if (occnumberOFF) {
        occnumberOFF.disabled = true;
    }
    spans.forEach(span => {
        const text = span.textContent;
        const newText = text.replace(/\[\d+\]/g, ''); // Removes numbers within square brackets
        span.textContent = newText;
    });
	extractContent();
}

function replaceXPath() {
    var outputXPath1 = document.querySelectorAll("#outputXPath .fullxpath");
    var outputXPath2 = document.querySelectorAll("#outputXPath2 .fullxpath2");

 var occnumberON = document.getElementById("occnumberON"); 
var occnumberOFF = document.getElementById("occnumberOFF"); 
	


    if (occnumberON) {
        occnumberON.disabled = true;
    }
	
	  if (occnumberOFF) {
        occnumberOFF.disabled = false;
    }



    if (outputXPath1.length !== outputXPath2.length) {
        console.error("The number of XPaths in the two outputs is different.");
        return;
    }

    for (var i = 0; i < outputXPath1.length; i++) {
        outputXPath1[i].innerText = outputXPath2[i].innerText;
    }
	extractContent();
}




 function extractOccurrence() {
      const xmlInput = document.getElementById('xmlInput').value;
      const xmlDoc = new DOMParser().parseFromString(xmlInput, 'text/xml');
      const nodes = xmlDoc.evaluate('//*', xmlDoc, null, XPathResult.ANY_TYPE, null);
      
      let xpathResult = '';
      let node = nodes.iterateNext();
      while (node) {
        const xpath = getXPath(node);
        xpathResult += `<div class="xpathElement"><span class="fullxpath2">${xpath}</span></div>`;
        node = nodes.iterateNext();
      }
      
      document.getElementById('outputXPath2').innerHTML = xpathResult.trim();
    }


function performActions() {
  


  //handleReplace();
  checkAndFixTags()
   tidyXML();
   
	//handleRestore();
    shiftContentUp();
	
    highlightXML();
	    
 extractOccurrence();
    extractXPath();
    setTextContent('Select an element on the left or xpath from the top');
enableRecolour();
  colorAttributeValues();
  generateRuleFromHighlightedRow();
 //generateRule();
}


  const singleButton = document.getElementById('singleButton');
  singleButton.addEventListener('click', performActions);
  


function enableRecolour() {
    var button1 = document.getElementById("recolour");
    var button2 = document.getElementById("occnumberON"); 
	var button3 = document.getElementById("occnumberOFF"); 
	var button4 = document.getElementById("nocolour");
    if (button1) {
        button1.disabled = false;
    }

    if (button2) {
        button2.disabled = false;
    }
	
//	   if (button3) {
//        button3.disabled = false;
//    }
		   if (button4) {
        button4.disabled = false;
    }
}


function disableRecolour() {
    var button1 = document.getElementById("recolour");
    var button2 = document.getElementById("occnumberON"); 
	var button3 = document.getElementById("occnumberOFF"); 
	var button4 = document.getElementById("nocolour");
    if (button1) {
        button1.disabled = true;
    }

    if (button2) {
        button2.disabled = true;
    }
	
	   if (button3) {
        button3.disabled = true;
    }
		   if (button4) {
        button4.disabled = true;
    }
	
	var btn_copyrule = document.getElementById('btn_copyrule');
		if (btn_copyrule) {
        btn_copyrule.disabled = true;
    }
	
	var btn_copyxpath = document.getElementById('btn_copyxpath');
		if (btn_copyxpath) {
        btn_copyxpath.disabled = true;
    }
	
}




 
function setTextContent(text) {
  const selectXPathDiv = document.getElementById('selectXPath');

  if (selectXPathDiv) {
    selectXPathDiv.textContent = text;
  }
}

function extractContent() {
  const outputXPathDiv = document.getElementById('outputXPath');
  const selectXPathDiv = document.getElementById('selectXPath');
  const outputAreaDiv = document.getElementById('outputArea');
  
  if (outputXPathDiv && selectXPathDiv && outputAreaDiv) {
    const fullXPathSpan = outputXPathDiv.querySelector('.line.highlighted .fullxpath');

    if (fullXPathSpan) {
      const fullXPath = fullXPathSpan.textContent.trim();
      const prefix = '<div class="selectxpathdiv"><span class="selectxpathspan">';
      const suffix = '</span></div>';
      
      // Initialize arrays for different types of XPaths
      let attributeXPaths = [];
      let predicateXPaths = [];
      
      // Add the base XPath
      attributeXPaths.push(`${prefix}${fullXPath}${suffix}`);
      
      const highlightedLineDiv = outputAreaDiv.querySelector('.line.highlighted');

      if (highlightedLineDiv && highlightedLineDiv.innerHTML.trim() !== '') {
        const tagSpan = highlightedLineDiv.querySelector('.tag');

        if (tagSpan) {
          const tagContent = tagSpan.textContent;
          const attributeRegex = /(\w+)="([^"]*)"/g;
          let match;
          
          // Find all attributes and their values
          while ((match = attributeRegex.exec(tagContent)) !== null) {
            const attrName = match[1];
            const attrValue = match[2];

            // XPath with attribute values
            attributeXPaths.push(`${prefix}${fullXPath}/@${attrName}${suffix}`);
            // XPath with attribute predicates
            predicateXPaths.push(`${prefix}${fullXPath}[@${attrName}='${attrValue}']${suffix}`);
          }
          
          // Combine arrays to get the desired order
          const formattedXPaths = attributeXPaths.concat(predicateXPaths);
          selectXPathDiv.innerHTML = formattedXPaths.join('');
          console.log("Formatted XPaths:");
          //console.log(formattedXPaths);
        } else {
          selectXPathDiv.innerHTML += prefix + 'No tag span found.' + suffix;
          console.log("No tag span found.");
        }
      } else {
        selectXPathDiv.innerHTML += prefix + 'No content found.' + suffix;
        console.log("No content found.");
      }
    } else {
      selectXPathDiv.innerHTML = '';
      console.log("No fullXPath found.");
    }
  }
  addClickEventToSelectXPathDivs();
  
  var btn_copyrule = document.getElementById('btn_copyrule');
  btn_copyrule.disabled = false;
  // getHighlightedValue();
  //generateRule();
  generateRuleFromHighlightedRow();
}



function extractContent_backup2() {
  const outputXPathDiv = document.getElementById('outputXPath');
  const selectXPathDiv = document.getElementById('selectXPath');
  const outputAreaDiv = document.getElementById('outputArea');
  
  if (outputXPathDiv && selectXPathDiv && outputAreaDiv) {
    const fullXPathSpan = outputXPathDiv.querySelector('.line.highlighted .fullxpath');

    if (fullXPathSpan) {
      const fullXPath = fullXPathSpan.textContent.trim();
      const prefix = '<div class="selectxpathdiv"><span class="selectxpathspan">';
      const suffix = '</span></div>';
      
      // Initialize with the full XPath
      let formattedXPaths = [`${prefix}${fullXPath}${suffix}`];
      
      const highlightedLineDiv = outputAreaDiv.querySelector('.line.highlighted');

      if (highlightedLineDiv && highlightedLineDiv.innerHTML.trim() !== '') {
        const tagSpan = highlightedLineDiv.querySelector('.tag');

        if (tagSpan) {
          const tagContent = tagSpan.textContent;
          const attributeRegex = /(\w+)="([^"]*)"/g;
          let match;
          
          // Find all attributes and their values
          while ((match = attributeRegex.exec(tagContent)) !== null) {
            const attrName = match[1];
            const attrValue = match[2];

            // XPath with attribute predicates
            formattedXPaths.push(`${prefix}${fullXPath}[@${attrName}='${attrValue}']${suffix}`);
            // XPath with attribute values
            formattedXPaths.push(`${prefix}${fullXPath}/@${attrName}${suffix}`);
          }
          
          // Add to the selectXPathDiv
          selectXPathDiv.innerHTML = formattedXPaths.join('');
          console.log("Formatted XPaths:");
          //console.log(formattedXPaths);
        } else {
          selectXPathDiv.innerHTML += prefix + 'No tag span found.' + suffix;
          console.log("No tag span found.");
        }
      } else {
        selectXPathDiv.innerHTML += prefix + 'No content found.' + suffix;
        console.log("No content found.");
      }
    } else {
      selectXPathDiv.innerHTML = '';
      console.log("No fullXPath found.");
    }
  }
  addClickEventToSelectXPathDivs();
  
  var btn_copyrule = document.getElementById('btn_copyrule');
  btn_copyrule.disabled = false;
  // getHighlightedValue();
  //generateRule();
  generateRuleFromHighlightedRow();
}




function extractContent_backup() {
  const outputXPathDiv = document.getElementById('outputXPath');
  const selectXPathDiv = document.getElementById('selectXPath');
  const outputAreaDiv = document.getElementById('outputArea');
 
 
  if (outputXPathDiv && selectXPathDiv && outputAreaDiv) {
    const fullXPathSpan = outputXPathDiv.querySelector('.line.highlighted .fullxpath');

    if (fullXPathSpan) {
      const fullXPath = fullXPathSpan.textContent.trim();
      const prefix = '<div class="selectxpathdiv"><span class="selectxpathspan">';
      const suffix = '</span></div>';
      selectXPathDiv.innerHTML = prefix + fullXPath + suffix;

      const highlightedLineDiv = outputAreaDiv.querySelector('.line.highlighted');

      if (highlightedLineDiv && highlightedLineDiv.innerHTML.trim() !== '') {
        const tagSpan = highlightedLineDiv.querySelector('.tag');

        if (tagSpan) {
          const tagContent = tagSpan.textContent;
          const attributeNames = tagContent.match(/\b([^=\s]+)=/g);

          if (attributeNames && attributeNames.length > 0) {
			  const formattedAttributes = attributeNames.map(attr => `${prefix}${fullXPath}/@${attr.slice(0, -1)}${suffix}`).join('');
selectXPathDiv.innerHTML += formattedAttributes;
			 console.log("423");
			 console.log(formattedAttributes);

          } else {
            selectXPathDiv.innerHTML += prefix + suffix;
			console.log("427");

          }
        } else {
          selectXPathDiv.innerHTML += prefix + 'No tag span found.' + suffix;
		  console.log("432");

        }
      } else {
        selectXPathDiv.innerHTML += prefix + 'No content found.' + suffix;
		console.log("437");

      }
    } else {
      //selectXPathDiv.innerHTML = '';
	 console.log("442");

    }
  }
  addClickEventToSelectXPathDivs();
  
  
  
var btn_copyrule = document.getElementById('btn_copyrule');
btn_copyrule.disabled = false;
//getHighlightedValue();
generateRule();
  
}

function addClickEventToSelectXPathDivs() {
  const selectXPathDivs = document.querySelectorAll('.selectxpathdiv');
  selectXPathDivs.forEach(div => {
    div.addEventListener('click', function() {
      // Remove highlight from all selectXPathDivs
      selectXPathDivs.forEach(d => d.classList.remove('highlighted'));
      // Add highlight to the clicked selectXPathDiv
      this.classList.add('highlighted');
	  
	  //xyz
var btn_copyxpath = document.getElementById('btn_copyxpath');

var btn_copyxpathtofunction = document.getElementById('btn_copyxpathtofunction');
var btn_copyxpathtocondition = document.getElementById('btn_copyxpathtocondition');
btn_copyxpath.disabled = false;
btn_copyxpathtocondition.disabled = false;
btn_copyxpathtofunction.disabled = false;
      // Generate rule based on the highlighted row
	   
      generateRuleFromHighlightedRow();
	 
    });
  });
}



  
	var ruleName;
	var whenLine;
	var functionLine;
    var targetField;
	var amendedXPath;
var amendedXPathFunction='&#9650; Xpath';
var amendedXPathCondition='&#9632; Xpath';


function copyxpathtoCondition(highlightedDiv){
	getHighlightedValue1();
	var selectXPath = highlightedDiv.innerText.trim();
	var firstLine = selectXPath.split('\n')[0].trim();
	    function amendXPath(xpath) {
        return xpath.replace(/(\w+:\w+)(\[\d+\])?/g, (match, p1, p2) => {
            if (p2) {
                return `*[name()='${p1}']${p2}`;
            } else {
                return `*[name()='${p1}']`;
            }
        });
    }
AttributeValueTextcondition='';

copyfunction=false;
	copycondition=true;

amendedXPathCondition = amendXPath(firstLine);
amendedXPathConditionBackup = amendedXPathCondition;
generateRuleFromHighlightedRow();	

}


function copyxpathtoFunction(highlightedDiv){
	getHighlightedValue2();
	var selectXPath = highlightedDiv.innerText.trim();
	var firstLine = selectXPath.split('\n')[0].trim();
	    function amendXPath(xpath) {
        return xpath.replace(/(\w+:\w+)(\[\d+\])?/g, (match, p1, p2) => {
            if (p2) {
                return `*[name()='${p1}']${p2}`;
            } else {
                return `*[name()='${p1}']`;
            }
        });
    }


copyfunction=true;
	copycondition=false;
AttributeValueTextfunction='';
amendedXPathFunction = amendXPath(firstLine);
amendedXPathFunctionBackup = amendedXPathFunction;

	
		
	generateRuleFromHighlightedRow();

	
}

var AttributeValueTextfunction ='';
var AttributeValueTextcondition ='';
//var AttributeValue ='';
var copyfunction=false;
var copycondition=false;

function generateRuleFromHighlightedRow() {
	
   //console
   console.log("generateRuleFromHighlightedRow");
    var list_fields = document.getElementById('list_fields');
var list_when = document.getElementById('list_when');
var list_function = document.getElementById('list_function');
var list_transform = document.getElementById('list_transform');
    // Function to amend the XPath according to the rules
 
  var selectedField = list_fields.value;

	var selectedWhen = list_when.value;
	var selectedFunction = list_function.value;

    if (selectedField === 'local field') {
        targetField = 'discovery"."local1';
    } else if (selectedField === 'resource type') {
        targetField = 'discovery"."resourceType';
    } 	else {
        targetField = `dc"."${selectedField.split(':')[1]}`;
    }
	
	
	var btn_copyxpathtocondition = document.getElementById('btn_copyxpathtocondition');
var btn_copyxpathtofunction = document.getElementById('btn_copyxpathtofunction');
var btn_transformadd = document.getElementById('btn_transformadd');
var btn_transformremove = document.getElementById('btn_transformremove');
	//asdfg
	
	if (amendedXPathFunction.includes("[@")) {
    // Replace "[@" with "[<font color="orange">@"
    //amendedXPathFunction = amendedXPathFunction.replace("[@", "[<font color=\"orange\">@");
  const attributeValueMatchfunction = amendedXPathFunction.match(/@\w+='[^']*'/);
    
	let attributeValuefunction = '';
	
    if (attributeValueMatchfunction) {
        attributeValuefunction = attributeValueMatchfunction[0];
		attributeValuefunction = attributeValuefunction.replace(/<font color="orange">|<\/font>/g, '');
		
		
		
		if(copyfunction){
			
		AttributeValueTextfunction=`, only when attribute ${attributeValuefunction} exists`;
		}  
		
			
		
    }

   // Replace the last instance of "='" with "='<font color=\"orange\""
    const lastEqualSingleQuoteIndex = amendedXPathFunction.lastIndexOf("='");
    if (lastEqualSingleQuoteIndex !== -1) {
        amendedXPathFunction = amendedXPathFunction.substring(0, lastEqualSingleQuoteIndex) + 
            "='<font color=\"orange\">" + 
            amendedXPathFunction.substring(lastEqualSingleQuoteIndex + 2);
        
        // Find the closing single quote for the replacement
        const endQuoteIndex = amendedXPathFunction.indexOf("'", lastEqualSingleQuoteIndex + 20); // 20 is the length of "='<font color=\"orange\">"
        if (endQuoteIndex !== -1) {
            amendedXPathFunction = amendedXPathFunction.substring(0, endQuoteIndex) + 
                "</font>" + 
                amendedXPathFunction.substring(endQuoteIndex);
        }
    }


}


	if (amendedXPathCondition.includes("[@")) {
   
const attributeValueMatchCondition = amendedXPathCondition.match(/@\w+='[^']*'/);
    let attributeValue = '';
	
let attributeValuecondition = '';
//AttributeValueTextcondition = '';
    if (attributeValueMatchCondition) {
        attributeValuecondition = attributeValueMatchCondition[0];
		attributeValuecondition = attributeValuecondition.replace(/<font color="orange">|<\/font>/g, '');
		
			  
		
			
		
    }


if (copycondition){
			
		AttributeValueTextcondition=`, and when attribute ${attributeValuecondition} exists`;
		
		
		}	


   // Replace the last instance of "='" with "='<font color=\"orange\""
    const lastEqualSingleQuoteIndex = amendedXPathCondition.lastIndexOf("='");
    if (lastEqualSingleQuoteIndex !== -1) {
        amendedXPathCondition = amendedXPathCondition.substring(0, lastEqualSingleQuoteIndex) + 
            "='<font color=\"orange\">" + 
            amendedXPathCondition.substring(lastEqualSingleQuoteIndex + 2);
        
        // Find the closing single quote for the replacement
        const endQuoteIndex = amendedXPathCondition.indexOf("'", lastEqualSingleQuoteIndex + 20); // 20 is the length of "='<font color=\"orange\">"
        if (endQuoteIndex !== -1) {
            amendedXPathCondition = amendedXPathCondition.substring(0, endQuoteIndex) + 
                "</font>" + 
                amendedXPathCondition.substring(endQuoteIndex);
        }
    }


}

 
	
	
	//CONDITION	
	if (selectedWhen === 'true'){
		
		btn_copyxpathtocondition.disabled = true;
		whenLine = `<font color="gray"><i>#CONDITION: Always run the rule</i></font>
    true`
	} else if (selectedWhen === 'exist'){
		
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Run when the xpath exists${AttributeValueTextcondition}.</i></font>
    exist "<font color="blue">${amendedXPathCondition}</font>"`
	} else if (selectedWhen === 'not exist'){
		
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Run when the xpath does NOT exists.</i></font>
    not exist "<font color="blue">${amendedXPathCondition}</font>"`
	}else if (selectedWhen === 'equals'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Run when xpath value is EQUAL to "${highlightedValue1}"${AttributeValueTextcondition}.</i></font>
    "<font color="blue">${amendedXPathCondition}</font>" equals "<font color="FF8C00"><font color="FF8C00">${highlightedValue1}</font></font>"`
	} else if (selectedWhen === 'not equals'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Run when xpath value is NOT EQUAL to "${highlightedValue1}".</i></font>
    "<font color="blue">${amendedXPathCondition}</font>" not equals "<font color="FF8C00"><font color="FF8C00">${highlightedValue1}</font></font>"`
	}else if (selectedWhen === 'starts with'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Run when xpath value STARTS with "${highlightedValue1}"${AttributeValueTextcondition}.</i></font>
    exist "<font color="blue">${amendedXPathCondition}[starts-with(., '<font color="FF8C00">${highlightedValue1}</font>']</font>"`
	} else if (selectedWhen === 'contains (case)'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Run when xpath value CONTAINS "${highlightedValue1}" (case sensitive)${AttributeValueTextcondition}.</i></font>
    exist "<font color="blue">${amendedXPathCondition}[contains(., '<font color="FF8C00">${highlightedValue1}</font>']</font>"`
	} else if (selectedWhen === 'contains (non-case)'){
		btn_copyxpathtocondition.disabled = false;
		whenLine = `<font color="gray"><i>#CONDITION: Run when xpath value CONTAINS "${highlightedValue1}" (ignore case sensitive)${AttributeValueTextcondition}.</i></font>
    exist "<font color="blue">${amendedXPathCondition}[contains(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'<font color="FF8C00">${highlightedValue1}</font>')]</font>"`
	}
	
	
	//TRANSFORM BUTTON
	
	if (selectedFunction === 'set to TEMP') {
		 
		 list_transform.disabled = false;
		 btn_transformadd.disabled = false
		 if(transformCounter>0){
			 btn_transformremove.disabled = false
		 } else{btn_transformremove.disabled = true;}
	 } else {
		 list_transform.disabled = true;
		 btn_transformadd.disabled = true;
		 btn_transformremove.disabled = true;
		 }
	
	
	//ACTION
	if (selectedFunction === 'copy'){
		btn_copyxpathtofunction.disabled = false;
		ruleName = `Copy to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: Copies value from xpath into ${selectedField}${AttributeValueTextfunction}.</i></font>
    copy "<font color="red">${amendedXPathFunction}</font>" to "<font color="purple">${targetField}</font>"`
	} else 	if (selectedFunction === 'copy (starts with)'){
		btn_copyxpathtofunction.disabled = false;
		ruleName = `Copy to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: If xpath value starts with '${highlightedValue2}' then copy into ${selectedField}${AttributeValueTextfunction}.</i></font>
    copy "<font color="red">${amendedXPathFunction}[starts-with(., '<font color="FF8C00">${highlightedValue2}</font>']</font>" to "<font color="purple">${targetField}</font>"`
	} else 	if (selectedFunction === 'copy (not starts with)'){
		btn_copyxpathtofunction.disabled = false;
		ruleName = `Copy to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: If xpath value NOT STARTS with '${highlightedValue2}' then copy into ${selectedField}${AttributeValueTextfunction}.</i></font>
    copy "<font color="red">${amendedXPathFunction}[not(starts-with(., '<font color="FF8C00">${highlightedValue2}</font>'))]</font>" to "<font color="purple">${targetField}</font>"`
	}else if (selectedFunction === 'set value'){
		btn_copyxpathtofunction.disabled = true;
		ruleName = `Set to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: Sets a value into ${selectedField}${AttributeValueTextfunction}.</i></font>
    set "<font color="red">Insert custom text here</font>" in "<font color="purple">${targetField}"`
	} else if (selectedFunction === 'set to TEMP'){
		btn_copyxpathtofunction.disabled = false;
		ruleName = `Set to ${selectedField}`
		functionLine = `<font color="gray"><i>#ACTION: Assign xpath value into TEMP1${AttributeValueTextfunction}.</i></font> 
    set TEMP"1" to xpath "<font color="red">${amendedXPathFunction}</font>"
	
${transformText}
	
	
    <font color="gray"><i>#ACTION: Assign value from TEMP1 into ${selectedField}</i></font> 
    set TEMP"1" in "<font color="purple">${targetField}</font>"`
	} 
	
	
	
	
	

   var outputRule = `rule "${ruleName}"
when
    ${whenLine}
then
    ${functionLine}

end
    `;
	
	
	 const highlightedDiv = document.querySelector('.selectxpathdiv.highlighted');
 
	 if (!highlightedDiv) {
		 
		 btn_copyxpathtocondition.disabled = true;
		 btn_copyxpathtofunction.disabled = true;
	 }
	
	
	
	
	
	document.getElementById('outputRule').innerHTML = outputRule;

	copyfunction=false;
	copycondition=false;
}









   
function clearXMLInput() {
  document.getElementById('xmlInput').value = ''; // Clears the content of the XML input
  const outputArea = document.getElementById('outputArea');
  outputArea.innerHTML = ''; // Clear the contents of outputArea

  const outputXPath = document.getElementById('outputXPath');
  outputXPath.innerHTML = ''; // Clear the contents of outputXPath
  
    const selectXPath = document.getElementById('selectXPath');
  selectXPath.innerHTML = ''; // Clear the contents of selectXPath
  
  const outputRule = document.getElementById('outputRule');
  outputRule.innerHTML = ''; // Clear the contents of selectXPath
  
  highlightedValue1='';
  highlightedValue2='';
  list_when.value='true';
  list_function.value='copy';
  list_fields.value='dc:identifier';
  validateXML();
  disableRecolour();
   amendedXPathFunction='&#9650; Xpath';
 amendedXPathCondition='&#9632; Xpath';
 btn_copyxpathtocondition.disabled=true;
  btn_copyxpathtofunction.disabled=true;
  list_transform.disabled=true;
  btn_transformadd.disabled=true;
  btn_transformremove.disabled=true;
}

function generateRandomXML3() {
    const elements = ['title', 'creator', 'subject', 'description', 'date', 'language', 'format', 'publisher', 'identifier', 'contributor', 'coverage', 'relation', 'rights'];
    const attributes = ['id', 'type', 'role', 'lang', 'scheme', 'value'];
    const values = ['value1', 'value2', 'value3', 'value4', 'value5'];
    const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

    function generateRandomElement(depth) {
        if (depth === 0) return '';

        const randomElement = elements[getRandomIndex(elements)];
        const randomValue = values[getRandomIndex(values)];
        let randomAttributes = '';
        const usedAttributes = new Set();

        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            let randomAttribute;
            do {
                randomAttribute = attributes[getRandomIndex(attributes)];
            } while (usedAttributes.has(randomAttribute));
            usedAttributes.add(randomAttribute);
            randomAttributes += ` ${randomAttribute}="${Math.random().toString(36).substring(2, 10)}"`;
        }

        const randomContent = Math.random() > 0.5 
            ? randomValue 
            : generateRandomElement(depth - 1);

        return `<${randomElement}${randomAttributes}>${randomContent}</${randomElement}>`;
    }

    function generateRandomNestedXML(depth) {
        let xmlString = '<record>';
        for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
            xmlString += generateRandomElement(depth);
        }
        xmlString += '</record>';
        return xmlString;
    }

    const randomXML = generateRandomNestedXML(5); // Increase depth for larger XML
    document.getElementById("xmlInput").value = randomXML;
    
    enableButtonIfTextareaNotEmpty();
}



function generateRandomXML2() {
    const titles = ['Analysis of Social Media', 'Advanced Machine Learning', 'Deep Learning Applications'];
   const creators = [
        'Moreno, Antonio', 'Iglesias, Carlos A.', 'Smith, John', 'Doe, Jane', 'Johnson, Emily', 
        'Brown, Michael', 'Davis, Jessica', 'Miller, Christopher', 'Garcia, Daniel', 'Martinez, Maria', 
        'Rodriguez, Patricia', 'Martinez, Luis', 'Hernandez, Barbara', 'Lopez, Richard', 'Gonzalez, David',
        'Wilson, Mark', 'Anderson, Susan', 'Thomas, Robert', 'Taylor, Michelle', 'Moore, William'
    ];
   const subjects = [
    'opinion mining', 'affect computing', 'Twitter', 'deep learning', 'machine learning', 
    'text mining', 'social media', 'cyber-aggression', 'emotion analysis', 'lexicon construction', 
    'provider networks', 'text feature representation', 'recommender system', 'user preference prediction', 
    'violence based on sexual orientation', 'semantic networks', 'psychographic segmentation', 
    'medical web forum', 'gender classification', 'racism', 'sentiment analysis', 'sentiment classification', 
    'sentiment word analysis', 'social networks', 'convolutional neural network', 'review data mining', 
    'big data-driven marketing', 'natural language processing', 'data visualization', 'AI ethics', 
    'robotics', 'computer vision', 'autonomous systems', 'predictive analytics', 'data science', 
    'cloud computing', 'blockchain', 'cybersecurity', 'quantum computing', 'edge computing', 
    'internet of things', '5G technology', 'augmented reality', 'virtual reality', 'bioinformatics', 
    'genomics', 'neural networks', 'computational linguistics', 'speech recognition'
];

    const descriptions = [
        'Sentiment analysis is a branch of natural language processing concerned with the study of the intensity of the emotions expressed in a piece of text.',
        'This book provides advanced knowledge on machine learning techniques and applications.',
        'A comprehensive guide to deep learning and its applications in various fields.'
    ];
    const dates = ['2021-02-12T03:23:14Z', '2020-06-09T16:38:56Z', '2023-05-20T12:00:00Z'];
    const languages = ['eng', 'fr', 'es'];
    const formats = ['application/pdf', 'application/epub+zip', 'application/octet-stream'];
    const publishers = ['MDPI - Multidisciplinary Digital Publishing Institute', 'Springer', 'IEEE'];
    const identifiers = [
        '10.3390/books978-3-03928-573-0',
        '10.1007/springer-978-3-030-45677-1',
        '10.1109/5.771073'
    ];

    const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

    const randomTitle = titles[getRandomIndex(titles)];
    const randomCreator1 = creators[getRandomIndex(creators)];
    const randomCreator2 = creators[getRandomIndex(creators)];
    const randomSubject1 = subjects[getRandomIndex(subjects)];
	const randomSubject2 = subjects[getRandomIndex(subjects)];
	const randomSubject3 = subjects[getRandomIndex(subjects)];
	const randomSubject4 = subjects[getRandomIndex(subjects)];
    const randomDescription = descriptions[getRandomIndex(descriptions)];
    const randomDate = dates[getRandomIndex(dates)];
    const randomLanguage = languages[getRandomIndex(languages)];
    const randomFormat = formats[getRandomIndex(formats)];
    const randomPublisher = publishers[getRandomIndex(publishers)];
    const randomIdentifier = identifiers[getRandomIndex(identifiers)];

    const xmlString = `<record><header><identifier>oai:directory.doabooks.org:${Math.random().toString(36).substring(2, 10)}</identifier><datestamp>${new Date().toISOString()}</datestamp><setSpec>com_20.500.12854_5</setSpec><setSpec>col_20.500.12854_6</setSpec></header>    <metadata><oai_dc:dc xmlns:oai_dc="http://www.openarchives.org/OAI/2.0/oai_dc/"                    xmlns:doc="http://www.lyncode.com/xoai"                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"                    xmlns:datacite="https://schema.datacite.org/meta/kernel-4.1/metadata.xsd"                    xmlns:oaire="https://raw.githubusercontent.com/rcic/openaire4/master/schemas/4.0/oaire.xsd"                    xmlns:oapen="http://purl.org/dc/elements/1.1/"                    xmlns:publisher="http://purl.org/dc/elements/1.1/"                    xmlns:grantor="http://purl.org/dc/elements/1.1/"                    xmlns:dc="http://purl.org/dc/elements/1.1/"                    xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/ http://www.openarchives.org/OAI/2.0/oai_dc.xsd">             <datacite:title>${randomTitle}</datacite:title>             <datacite:creator>${randomCreator1}</datacite:creator><datacite:creator>${randomCreator2}</datacite:creator><dc:subject>${randomSubject1}</dc:subject><dc:subject>${randomSubject2}</dc:subject><dc:subject>${randomSubject3}</dc:subject><dc:subject>${randomSubject4}</dc:subject><dc:description>${randomDescription}</dc:description><dc:date>${randomDate}</dc:date><datacite:date type="Issued">${new Date().getFullYear()}</datacite:date><dc:identifier>${Math.random().toString(36).substring(2, 10)}</dc:identifier><datacite:identifier type="DOI">${randomIdentifier}</datacite:identifier> <datacite:identifier>${Math.random().toString(36).substring(2, 10)}</datacite:identifier><dc:language>${randomLanguage}</dc:language>             <dc:format>${randomFormat}</dc:format><dc:publisher>${randomPublisher}</dc:publisher>         </oai_dc:dc>     </metadata> </record>`;

    document.getElementById("xmlInput").value = xmlString;
	
    enableButtonIfTextareaNotEmpty();
}



function generateRandomXML1() {
    const titles = ['Collection Title A', 'Collection Title B', 'Collection Title C'];
    const creators = ['Creator Name X', 'Creator Name Y', 'Creator Name Z'];
    const countries = ['Country A', 'Country B', 'Country C'];
    const languages = ['Language 1', 'Language 2', 'Language 3'];

    const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

    const randomTitle = titles[getRandomIndex(titles)];
    const randomCreator = creators[getRandomIndex(creators)];
    const randomCountry = countries[getRandomIndex(countries)];
    const randomLanguage = languages[getRandomIndex(languages)];

    const addressLines = [];
    for (let i = 0; i < 5; i++) {
        addressLines.push(`<addressline>${i + 1} Main Street</addressline>`);
    }

    const xmlString = `<ead xmlns="urn:isbn:1-931666-22-9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:isbn:1-931666-22-9 http://www.loc.gov/ead/ead.xsd"><eadheader><eadid identifier="${Math.random().toString(36).substring(7)}" country="${randomCountry}">${Math.random().toString(36).substring(7)}</eadid><filedesc><titlestmt><titleproper type="main">${randomTitle}</titleproper><author role="writer">${randomCreator}</author></titlestmt><publicationstmt><publisher>Publisher Name</publisher><address>${addressLines.join('')}<country>${randomCountry}</country></address><date>${Math.floor(Math.random() * 30) + 1990}</date></publicationstmt><seriesstmt>Example Series Statement</seriesstmt></filedesc><archdesc><did><repository><corpname>Repository Name</corpname><address>${addressLines.join('')}<country>${randomCountry}</country></address></repository><unittitle>${randomTitle}</unittitle><unitid>${Math.random().toString(36).substring(7)}</unitid><origination>${randomCreator}</origination><physdesc>Physical Description</physdesc><abstract>Collection abstract or summary</abstract><langmaterial lang="${randomLanguage}">${randomLanguage}</langmaterial><materialspec>Materials specification</materialspec><physloc>Physical Location</physloc><accessrestrict>Access Restrictions</accessrestrict><userestrict>Use Restrictions</userestrict><prefercite>Preferred Citation</prefercite><acqinfo>Acquisition Information</acqinfo><altformavail>Alternate Forms Available</altformavail><relatedmaterial>Related Material</relatedmaterial><separatedmaterial>Separated Material</separatedmaterial><processinfo>Processing Information</processinfo><accruals>Accruals</accruals><appraisal>Appraisal Information</appraisal><custodhist>Custodial History</custodhist><scopecontent>Scope and Content</scopecontent><arrangement>Arrangement</arrangement><bioghist>Biographical or Historical Information</bioghist><controlaccess>Control Access Subjects</controlaccess><otherfindaid>Other Finding Aids</otherfindaid><physdesc>Physical Description</physdesc></did></archdesc></eadheader></ead>`;

    document.getElementById("xmlInput").value = xmlString;
	
	enableButtonIfTextareaNotEmpty();
}

  


 function tidyXML() {
  const input = document.getElementById('xmlInput');
  let xmlString = input.value;

  // Escape special characters in XML
  xmlString = escapeSpecialCharacters(xmlString);

  const formattedXML = formatXML(xmlString);
  input.value = formattedXML;
}


function replaceNamespace(xmlInput) {
  const replacedInput = xmlInput.replace(/<([^>]+):/g, '<$1UNIQ-')
    .replace(/<\/([^>]+):/g, '</$1UNIQ-');

  return replacedInput;
}



function handleReplace() {
  const inputElement = document.getElementById('xmlInput');
  const xmlContent = inputElement.value;

  const modifiedXML = replaceNamespace(xmlContent);
  console.log(modifiedXML); // You can log it or use it as needed

  // For demonstration purposes, update the textarea with the modified content
  inputElement.value = modifiedXML;
}

function restoreNamespace(xmlInput) {
  const restoredInput = xmlInput.replace(/<([^>]+)UNIQ-/g, '<$1:')
    .replace(/<\/([^>]+)UNIQ-/g, '</$1');

  return restoredInput;
}



function handleRestore() {
  const inputElement = document.getElementById('xmlInput');
  const xmlContent = inputElement.value;

  const modifiedXML = restoreNamespace(xmlContent);
  console.log(modifiedXML); 

  // For demonstration purposes, update the textarea with the modified content
  inputElement.value = modifiedXML;
}

function escapeSpecialCharacters(xmlString) {
  // Replace '&' with '&amp;'
  return xmlString.replace(/&/g, '&amp;');
  return inputString.replace(/(\r\n|\n|\r)/gm, '');
}

function formatXML(xmlString) {
	
  const parser = new DOMParser();
  
  const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
  const rootElement = xmlDoc.documentElement;
  const formatted = formatElement(rootElement, 0);
  return formatted;
}
function formatElement(element, level) {
  const tab = '   '; // Two spaces for each level of indentation
  const newline = '\n';
  let formatted = '';

  if (element.nodeType === Node.ELEMENT_NODE) {
    formatted += newline + tab.repeat(level);
  }

  formatted += '<' + element.tagName;

  const attributes = element.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    formatted += ' ' + attribute.name + '="' + attribute.value + '"';
  }

  if (element.childElementCount > 0 || element.textContent.trim() !== '') {
    formatted += '>';

    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        formatted += formatElement(child, level + 1);
      } else if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim() !== '') {
        formatted += child.nodeValue.trim();
      }
    }

    // Check if the last child is a text node and avoid breaking the closing tag to the next line
    const lastChild = children[children.length - 1];
    if (lastChild.nodeType === Node.TEXT_NODE && lastChild.nodeValue.trim() !== '') {
      formatted += '</' + element.tagName + '>';
    } else {
      formatted += newline + tab.repeat(level) + '</' + element.tagName + '>';
    }
  } else {
    formatted += '></' + element.tagName + '>';
  }

  return formatted;
}

		
function extractXPath() {
  const outputArea = document.getElementById('outputArea');
  const lines = outputArea.innerText.split('\n');

  let xpathResult = '';
  let openTagsStack = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const lineNumber = i + 1;

    const openTags = line.match(/<[^/][^>]*>/g) || [];
    const closeTags = line.match(/<\/.*?>/g) || [];

    openTags.forEach((openTag) => {
      const tagName = openTag.match(/<([^>\s]+)[^>]*>/)[1];
      openTagsStack.push(tagName);

      const xpathTags = openTagsStack.join('/');
      xpathResult += `<div class="line">[LINE <span class="lineNumber">${String(lineNumber).padStart(3, '0')}</span>] <span class="fullxpath">/${xpathTags}</span></div>`;
    });

    closeTags.forEach(() => {
      openTagsStack.pop();
    });
  }

  // Remove the numbers at the end of the XPath
  xpathResult = xpathResult.replace(/\[\d+\]/g, '');

  document.getElementById('outputXPath').innerHTML = xpathResult.trim();
  
   // Add event listeners for row highlighting
const outputXPath = document.getElementById('outputXPath');
const clickableElements = outputXPath.querySelectorAll('.line');
clickableElements.forEach(element => {
  element.addEventListener('click', function(event) {
    const row = event.target.closest('.line');
    
    // Check if the clicked row is already highlighted
    const isHighlighted = row.classList.contains('highlighted');
    
    // Remove highlight from all rows
    const rows = outputXPath.querySelectorAll('.line.highlighted');
    rows.forEach(row => {
      row.classList.remove('highlighted');
	  extractContent();
	  console.log("790");

    });

    // Toggle highlight on the clicked row
    if (!isHighlighted) {
      row.classList.add('highlighted');
	  extractContent();
	  console.log("798");
	 // generateRule();
    }
  });
});

// Add event listener for row highlighting in outputXPath
const clickableElementsXPath = outputXPath.querySelectorAll('.line');
clickableElementsXPath.forEach(element => {
  element.addEventListener('click', function(event) {
    const row = event.target.closest('.line');
    const clickedLineNumber = row.querySelector('.lineNumber').textContent.trim();
    const isHighlighted = row.classList.contains('highlighted');

    // Find the corresponding line in outputArea
    const outputArea = document.getElementById('outputArea');
    const outputAreaLines = outputArea.querySelectorAll('.line');

    if (!isHighlighted) {
      // Remove highlight from all rows in outputArea
      const rowsArea = outputArea.querySelectorAll('.line.highlighted');
      rowsArea.forEach(row => {
        row.classList.remove('highlighted');
      });
    } else {
      outputAreaLines.forEach(areaLine => {
        const areaLineNumber = areaLine.querySelector('.lineNumber').textContent.trim();

        if (areaLineNumber === clickedLineNumber) {
          // Remove highlight from all rows in outputArea
          const rowsArea = outputArea.querySelectorAll('.line.highlighted');
          rowsArea.forEach(row => {
            row.classList.remove('highlighted');
          });

          // Highlight the corresponding row in outputArea
          areaLine.classList.add('highlighted');
		  extractContent();
		  areaLine.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });
});

  
}


function copyHighlightedText() {
  const highlightedDiv = document.querySelector('.selectxpathdiv.highlighted');
  if (highlightedDiv) {
    const textToCopy = highlightedDiv.innerText.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Xpath copied to clipboard');
	  alert('Xpath copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  } else {
    console.log('No highlighted text to copy');
  }
}

function getXPath(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node;
    const sameTagSiblings = Array.from(element.parentNode.childNodes)
      .filter(e => e.tagName === element.tagName && e.nodeType === Node.ELEMENT_NODE);

    const index = sameTagSiblings.indexOf(element) + 1;

    let xpath = '/' + element.tagName + '[' + index + ']';

    let parentNode = element.parentNode;
    while (parentNode !== null && parentNode.nodeType === Node.ELEMENT_NODE) {
      const sameTagParentSiblings = Array.from(parentNode.parentNode.childNodes)
        .filter(e => e.tagName === parentNode.tagName && e.nodeType === Node.ELEMENT_NODE);
      
      const parentIndex = sameTagParentSiblings.indexOf(parentNode) + 1;
      xpath = '/' + parentNode.tagName + '[' + parentIndex + ']' + xpath;
      
      parentNode = parentNode.parentNode;
    }

    return xpath;
  }
  return '';
}



function highlightXML() {
  const xmlInput = document.getElementById('xmlInput');
  const outputArea = document.getElementById('outputArea');

  const xmlCode = xmlInput.value;

  // Escape HTML entities to display correctly
  const encodedXML = xmlCode.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Match XML tags using regular expression and apply consistent colors
  const tagColors = {};
  const tagCounts = {};

  let xpath = '';
  let lineNumber = 1;
  let highlightedXML = '<pre>'; // Start with <pre> tag to preserve formatting

  const lines = encodedXML.split('\n');

  lines.forEach((line) => {
    const leadingSpaces = line.match(/^\s*/)[0]; // Capture leading spaces
    const lineWithoutSpaces = line.trim(); // Trim leading/trailing spaces

    let lineWithTags = lineWithoutSpaces.replace(/&lt;(\/?\w+)([^&]*?)&gt;/g, match => {
      const tagContent = match.replace(/&lt;|&gt;/g, ''); // Remove HTML encoding
      const isClosingTag = tagContent.startsWith('/');

      const tagName = tagContent.split(' ')[0].replace('/', ''); // Extract tag name

      if (!isClosingTag) {
        if (!tagCounts[xpath]) {
          tagCounts[xpath] = {};
        }

        if (!tagCounts[xpath][tagName]) {
          tagCounts[xpath][tagName] = 1;
        } else {
          tagCounts[xpath][tagName]++;
        }

        let color;
        if (!tagColors[tagName]) {
          color = generateBrightColor();
          tagColors[tagName] = color;
        } else {
          color = tagColors[tagName];
        }

        const tagCount = tagCounts[xpath][tagName];
        xpath += `/${tagName}[${tagCount}]`;

        return `<span class="tag" data-tag="${tagName}" style="color: ${color}">${match}</span>`;
      } else {
        const openingTagName = tagName;
        const closingTagName = openingTagName;

        let color;
        if (tagColors[openingTagName]) {
          color = tagColors[openingTagName];
        } else {
          color = generateBrightColor();
          tagColors[openingTagName] = color;
        }

        xpath = xpath.substring(0, xpath.lastIndexOf(`/${closingTagName}`));

        return `<span class="tag" data-tag="${closingTagName}" style="color: ${color}">${match}</span>`;
      }
    });

    const lineContent = `<div class="line"><span class="lineNumber">${String(lineNumber).padStart(3, '0')}</span>${leadingSpaces}${lineWithTags}</div>`; // Adjusted lineContent with line numbers at the beginning

    highlightedXML += lineContent;

    lineNumber++;
  });

  highlightedXML += '</pre>'; // Close <pre> tag

  outputArea.innerHTML = highlightedXML; // Update the outputArea with the modified content

  // Add event listeners for row highlighting
const clickableElements = outputArea.querySelectorAll('.line');
clickableElements.forEach(element => {
  element.addEventListener('click', function(event) {
    const row = event.target.closest('.line');
    
    // Check if the clicked row is already highlighted
    const isHighlighted = row.classList.contains('highlighted');
    
    // Remove highlight from all rows
    const rows = outputArea.querySelectorAll('.line.highlighted');
    rows.forEach(row => {
      row.classList.remove('highlighted');
	  
    });

    // Toggle highlight on the clicked row
    if (!isHighlighted) {
      row.classList.add('highlighted');
	  
    }
	
  });
});

// Add event listener for row highlighting in outputArea
const clickableElementsOutputArea = outputArea.querySelectorAll('.line');
clickableElementsOutputArea.forEach(element => {
  element.addEventListener('click', function(event) {
    const row = event.target.closest('.line');
    const clickedLineNumber = row.querySelector('.lineNumber').textContent.trim();
    const isHighlighted = row.classList.contains('highlighted');

    // Find the corresponding line in outputXPath
    const xpathOutputArea = document.getElementById('outputXPath');
    const xpathLines = xpathOutputArea.querySelectorAll('.line');

    if (!isHighlighted) {
      // Remove highlight from all rows in outputXPath
      const rowsXPath = xpathOutputArea.querySelectorAll('.line.highlighted');
      rowsXPath.forEach(row => {
        row.classList.remove('highlighted');
		extractContent();
		console.log("1039");
      });
    } else {
      xpathLines.forEach(xpathLine => {
        const xpathLineNumber = xpathLine.querySelector('.lineNumber').textContent.trim();

        if (xpathLineNumber === clickedLineNumber) {
          // Remove highlight from all rows in outputXPath
          const rowsXPath = xpathOutputArea.querySelectorAll('.line.highlighted');
          rowsXPath.forEach(row => {
            row.classList.remove('highlighted');
					var btn_copyrule = document.getElementById('btn_copyrule');
	btn_copyxpath.disabled = true;	
			console.log("1049");
          });

          // Highlight the corresponding row in outputXPath
          xpathLine.classList.add('highlighted');
		  extractContent();
		  xpathLine.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });
});




}

function recolorizeTags() {
  const outputArea = document.getElementById('outputArea');
  const tags = outputArea.querySelectorAll('.tag');

  const tagColors = {};

  tags.forEach(tag => {
    const tagName = tag.getAttribute('data-tag');
    const isClosingTag = tagName.startsWith('/');

    if (!isClosingTag) {
      // If it's an opening tag, assign or retrieve a color for it
      if (!tagColors[tagName]) {
        const color = generateBrightColor();
        tagColors[tagName] = color;
        tag.style.color = color; // Apply color to the opening tag
      } else {
        tag.style.color = tagColors[tagName]; // Apply the existing color to the opening tag
      }
    } else {
      // If it's a closing tag, find the corresponding opening tag and apply the same color
      const openingTagName = tagName.substring(1);
      tag.style.color = tagColors[openingTagName]; // Apply the same color to the closing tag
    }
  });
}

function nocolourTags() {
  const tags = document.querySelectorAll('.tag');

  tags.forEach(tag => {
    tag.style.color = 'white';
  });
}

function generateBrightColor() {
  const r = Math.floor(Math.random() * 150) + 100; // Red component between 100 and 250
  const g = Math.floor(Math.random() * 150) + 100; // Green component between 100 and 250
  const b = Math.floor(Math.random() * 150) + 100; // Blue component between 100 and 250

  return `rgb(${r}, ${g}, ${b})`;
}



function validateXML() {
    const input = document.getElementById('xmlInput').value;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(input, 'application/xml');

    const validationMessage = document.getElementById('validationMessage');
    const buttons = document.querySelectorAll('button');

    // Check for Dublin Core tags
    const dcTags = xmlDoc.getElementsByTagName('dc:title');
    const oaiDcTags = xmlDoc.getElementsByTagName('oai:dc');

//    if (dcTags.length > 0 || oaiDcTags.length > 0) {
//        validationMessage.innerText = 'XML Validation: Dublin Core tags detected. Errors may occur.';
//        validationMessage.style.color = 'red'; 
//        return;
//    }

    // Check for self-closing tags
    const selfClosingTags = ['br', 'hr', 'img', 'input', 'meta', 'link', 'area', 'base'];
    let selfClosingTagDetected = false;

    selfClosingTags.forEach(tag => {
        const foundTags = xmlDoc.getElementsByTagName(tag);
        if (foundTags.length > 0) {
            selfClosingTagDetected = true;
            return;
        }
    });

    if (selfClosingTagDetected) {
        validationMessage.innerText = 'XML Validation: Self-closing tags detected. Errors may occur.';
        validationMessage.style.color = 'red'; // Set color to red for error message
        return;
    }

    // Check for parsing errors
    const parserErrors = xmlDoc.getElementsByTagName('parsererror');
    if (parserErrors.length > 0) {
        const errorText = parserErrors[0].textContent.trim();
        const errorMessage = extractErrorMessage(errorText);
        validationMessage.innerText = `XML Validation: ${errorMessage}`;
        validationMessage.style.color = 'red'; // Set color to red for error message
        return;
    }

    // If all checks pass, display success message and enable buttons
    validationMessage.innerText = 'XML Input Check: Good';
    validationMessage.style.color = 'green'; // Set color to green for success message
	
	
}

// Function to extract error message from the provided text (unchanged from previous code)
function extractErrorMessage(errorText) {
    const startString = 'errors:';
    const endString = 'Below is a rendering';
    const startIndex = errorText.indexOf(startString) + startString.length;
    const endIndex = errorText.indexOf(endString);
    return errorText.substring(startIndex, endIndex).trim();
}




function shiftContentUp() {
  const xmlInput = document.getElementById('xmlInput');
  const currentValue = xmlInput.value;

  // Split the input by lines and remove the first line
  const lines = currentValue.split('\n');
  if (lines.length > 1) {
    lines.shift(); // Remove the first line
    xmlInput.value = lines.join('\n');
  } else {
    xmlInput.value = ''; // Clear the content if there's only one line
  }
}
   function colorAttributeValues() {
      const spans = document.querySelectorAll('#outputArea .tag');
      spans.forEach(span => {
        const content = span.textContent;
        const matches = content.match(/="([^"]*)"/g);
        if (matches) {
          matches.forEach(match => {
            const coloredMatch = match.replace(/="([^"]*)"/, '="<span style="color: lightgrey;">$1</span>"');
            span.innerHTML = span.innerHTML.replace(match, coloredMatch);
          });
        }
      });
    }
function checkAndFixTags() {
    var inputText = document.getElementById('xmlInput').value;

    var selfClosingTags = ['br', 'hr', 'input', 'meta', 'link', 'area', 'base'];

    var selfClosingTagsWithAttributes = ['img']; // Add other self-closing tags as needed

    selfClosingTagsWithAttributes.forEach(tag => {
        var pattern = new RegExp('<' + tag + '(\\s+[^>]*)?>(?!</' + tag + '>)', 'g');
        var closeTagPattern = new RegExp('</' + tag + '>', 'g');

        inputText = inputText.replace(pattern, function(match) {
            if (!match.match(closeTagPattern)) {
                if (match.includes('/>')) {
                    return match;
                } else {
                    return match.replace('>', ' />');
                }
            }
            return match;
        });
    });

    selfClosingTags.forEach(tag => {
        if (selfClosingTagsWithAttributes.indexOf(tag) === -1) {
            var openTagPattern = new RegExp('<' + tag + '(\\s+[^>]*)?>', 'g');
            var closeTagPattern = new RegExp('</' + tag + '>', 'g');

            if (inputText.match(openTagPattern) && !inputText.match(closeTagPattern)) {
                inputText = inputText.replace(openTagPattern, '<' + tag + '$1></' + tag + '>');
            }
        }
    });

    document.getElementById('xmlInput').value = inputText;
}
