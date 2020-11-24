
Survey.StylesManager.applyTheme("modern");

var surveyJSON = { "title": "Test 1", "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "firstName", "title": "First Name" }, { "type": "text", "name": "lastName", "title": "Last Name" }, { "type": "dropdown", "name": "age", "title": "Please select your age group:", "choices": [{ "value": "item1", "text": "Under 16" }, { "value": "item2", "text": "16 - 17" }, { "value": "item3", "text": "18 and over" }] }, { "type": "radiogroup", "name": "humanCheck", "title": "Are you a human?", "choices": [{ "value": "item1", "text": "Yes" }, { "value": "item2", "text": "No" }], "hasOther": true, "otherText": "I'd rather not say" }, { "type": "text", "name": "favProduct", "title": "What is your favorite product?" }, { "type": "text", "name": "productPurchaseReason", "title": "Why did you purchase this product?" }, { "type": "text", "name": "productSatisfaction", "title": "How satisfied are you with this product?" }, { "type": "text", "name": "recomend", "title": "Would you recommend this product to a friend?" }, { "type": "text", "name": "change", "title": "If you could change one thing about this product, what would it be?" }, { "type": "text", "name": "otherOptions", "title": "Which other options were you considering before this product?" }] }], "showTitle": false }


window.survey = new Survey.Model(surveyJSON);


survey	
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });


$("#surveyContainer").Survey({ model: survey }); 



