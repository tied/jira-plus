AJS.toInit(function() {
  
  var baseUrl = AJS.$("meta[name='ajs-base-url']").attr("content");
  console.log(baseUrl)   
  function populateForm() {
	console.log(baseUrl + "/rest/jiraplusconfig/1.0/")
    AJS.$.ajax({
      url: baseUrl + "/rest/jiraplusconfig/1.0/",
      dataType: "json",
      success: function(config) {
    	console.log(config)
        AJS.$("#name").attr("value", config.name);
        AJS.$("#time").attr("value", config.time);
      }
    });
  }
  
  function updateConfig() {
	  AJS.$.ajax({
	    url: baseUrl + "/rest/jiraplusconfig/1.0/",
	    type: "PUT",
	    contentType: "application/json",
	    data: '{ "name": "' + AJS.$("#name").attr("value") + '", "time": ' +  AJS.$("#time").attr("value") + ' }',
	    processData: false
	  });
	}
  
  populateForm();
  
  AJS.$("#admin").submit(function(e) {
	    e.preventDefault();
	    updateConfig();
  });
  
});