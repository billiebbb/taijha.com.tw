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
	
	var removeData = function(c_id){
		var story;
		for(var key in stories){
			story = stories[key];
			if(story.c_id == c_id){
				stories.splice(key, 1);
				break;
			}
		}
	};
	
	var addData = function(data){
		for(var key in stories){
			story = stories[key];
			if(story.project == data.project){
				stories.splice(key, 0, data);
				return;
			}
		}
		
		stories.push(data);
	}
	
	return {
		getStory: getStory
		, addData: addData
		, getProject: getProject
		, setProject: setProject
		, setStory: setStory
		, removeData: removeData
	}
}();
