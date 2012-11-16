var StoryData = function() {
	var stories = [];
	var projects = {};
	
	var getStory = function(){
		return stories
	};
	
	var setStory = function(data){
		stories = data;
	};
	
	var setProject = function(data){
		projects = data;
	};
	
	var getProject = function(){
		return projects;
	};
	
	return {
		getStory: getStory
		, getProject: getProject
		, setProject: setProject
		, setStory: setStory
	}
}();
