var WorksData = function(){
	var workSession = {};
	var years, arr_years;
	var works =  [
		{
			name: '水丰景'
			, id: 'p1'
			, year: '2012'
			, images: [
				'uploads/00/01.jpg'
				,'uploads/00/03.jpg'
				,'uploads/00/04.jpg'
				,'uploads/00/05.jpg'
				,'uploads/00/06.jpg'
				,'uploads/00/07.jpg'
				,'uploads/00/08.jpg'
			]
			, thumbs: [
				'uploads/00/thumbs/01.jpg'
				,'uploads/00/thumbs/03.jpg'
				,'uploads/00/thumbs/04.jpg'
				,'uploads/00/thumbs/05.jpg'
				,'uploads/00/thumbs/06.jpg'
				,'uploads/00/thumbs/07.jpg'
				,'uploads/00/thumbs/08.jpg'
			]
			, logo: 'uploads/00/logo.png'
			, subtitle: 'uploads/00/info.png'
		}
		,{
			name: '水山硯'
			, id: 'p2'
			, year: '2011'
			, images: [
				'uploads/01/00.jpg'
				,'uploads/01/01.jpg'
				,'uploads/01/02.jpg'
				,'uploads/01/03.jpg'
				,'uploads/01/04.jpg'
				,'uploads/01/05.jpg'
				,'uploads/01/06.jpg'
			]
			, thumbs: [
				'uploads/01/thumbs/00.jpg'
				,'uploads/01/thumbs/01.jpg'
				,'uploads/01/thumbs/02.jpg'
				,'uploads/01/thumbs/03.jpg'
				,'uploads/01/thumbs/04.jpg'
				,'uploads/01/thumbs/05.jpg'
				,'uploads/01/thumbs/06.jpg'
			]
			, logo: 'uploads/01/logo.png'
			, subtitle: 'uploads/01/info.png'
		}
		,{
			name: '水工坊'
			, id: 'p3'
			, year: '2010'
			, images: [
				'uploads/02/00.jpg'
				,'uploads/02/01.jpg'
				,'uploads/02/02.jpg'
				,'uploads/02/03.jpg'
				,'uploads/02/04.jpg'
				,'uploads/02/05.jpg'
			]
			, thumbs: [
				'uploads/02/thumbs/00.jpg'
				,'uploads/02/thumbs/01.jpg'
				,'uploads/02/thumbs/02.jpg'
				,'uploads/02/thumbs/03.jpg'
				,'uploads/02/thumbs/04.jpg'
				,'uploads/02/thumbs/05.jpg'
			]
			, logo: 'uploads/02/logo.png'
			, subtitle: 'uploads/02/info.png'
		}
		,{
			name: '悅讀水世紀'
			, id: 'p4'
			, year: '2008'
			, images: [
				'uploads/03/00.jpg'
				,'uploads/03/01.jpg'
				,'uploads/03/02.jpg'
				,'uploads/03/03.jpg'
				,'uploads/03/04.jpg'
				,'uploads/03/05.jpg'
				,'uploads/03/06.jpg'
			]
			, thumbs: [
				'uploads/03/thumbs/00.jpg'
				,'uploads/03/thumbs/01.jpg'
				,'uploads/03/thumbs/02.jpg'
				,'uploads/03/thumbs/03.jpg'
				,'uploads/03/thumbs/04.jpg'
				,'uploads/03/thumbs/05.jpg'
				,'uploads/03/thumbs/06.jpg'
			]
			, logo: 'uploads/03/logo.png'
			, subtitle: 'uploads/03/info.png'
		}
		,{
			name: '悅讀知音'
			, id: 'p5'
			, year: '2007'
			, images: [
				'uploads/04/00.jpg'
				,'uploads/04/01.jpg'
				,'uploads/04/02.jpg'
				,'uploads/04/03.jpg'
				,'uploads/04/04.jpg'
				,'uploads/04/05.jpg'
				,'uploads/04/06.jpg'
			]
			, thumbs: [
				'uploads/04/thumbs/00.jpg'
				,'uploads/04/thumbs/01.jpg'
				,'uploads/04/thumbs/02.jpg'
				,'uploads/04/thumbs/03.jpg'
				,'uploads/04/thumbs/04.jpg'
				,'uploads/04/thumbs/05.jpg'
				,'uploads/04/thumbs/06.jpg'
			]
			, logo: 'uploads/04/logo.png'
			, subtitle: 'uploads/04/info.png'
		}
		,{
			name: '愛上悅讀'
			, id: 'p6'
			, year: '2007'
			, images: [
				'uploads/05/00.jpg'
				,'uploads/05/01.jpg'
				,'uploads/05/02.jpg'
				,'uploads/05/03.jpg'
				,'uploads/05/04.jpg'
				,'uploads/05/05.jpg'
			]
			, thumbs: [
				'uploads/05/thumbs/00.jpg'
				,'uploads/05/thumbs/01.jpg'
				,'uploads/05/thumbs/02.jpg'
				,'uploads/05/thumbs/03.jpg'
				,'uploads/05/thumbs/04.jpg'
				,'uploads/05/thumbs/05.jpg'
			]
			, logo: 'uploads/05/logo.png'
			, subtitle: 'uploads/05/info.png'
		}
		,{
			name: '悅讀工坊'
			, id: 'p7'
			, year: '2006'
			, images: [
				'uploads/06/00.jpg'
				,'uploads/06/01.jpg'
				,'uploads/06/02.jpg'
				,'uploads/06/03.jpg'
				,'uploads/06/04.jpg'
			]
			, thumbs: [
				'uploads/06/thumbs/00.jpg'
				,'uploads/06/thumbs/01.jpg'
				,'uploads/06/thumbs/02.jpg'
				,'uploads/06/thumbs/03.jpg'
				,'uploads/06/thumbs/04.jpg'
			]
			, logo: 'uploads/06/logo.png'
			, subtitle: 'uploads/06/info.png'
		}
	];
	
	var setWorksData = function(data){
		// workSession = data;
		// console.dir(data);
		works = data;
	};
	
	var getRecent = function(){
		var data = [];
		$.each(works, function(i){
			if(this.is_new){
				data.push(this);
			}
		});
		
		return data;
	};
	
	var getYearsList = function(){
		if(arr_years) return arr_years;
		arr_years = [];
		$.each(getYears(), function(i){
			arr_years.push(i);
		});
		
		arr_years.sort(function (a, b) {
		    if (a < b) return 1;
		    if (b < a) return -1;
		    return 0;
		});
		
		return arr_years;
	};
	
	var getWorks = function(){
		return works;
	};
	
	var getYears = function(){
		if(years) return years;
		
		years = {};
		var yr;
		$.each(works, function(i){
			yr = this.year;
			if(!years[yr]) years[yr] = [];
			years[yr].push(this);
		});
		_.sortBy(years, function(element, index, list){
			
		});
		return years;
	};
	
	var addWork = function(data){
		for(var i=0; i<works.length; i++){
			if(works[i].year == data.year){
				works.splice(i, 0, data);
				break;		
			}
		}
		
		works.unshift(data);
	};
	
	var addWorksInfo = function(data){
		var work;
		
		for(var i=0; i<works.length; i++){
			work = works[i];
			console.dir(work);
			if(parseInt(work.id) == parseInt(data.p_id)){
				work.subtitle = "uploads/" + data.image;
				work.subtitle_id = data.subtitle_id
				
				console.dir(works);
				break;		
			}
		}		
		
	};
	
	var addImage = function(data){
		var work;
		for(var i=0; i<works.length; i++){
			work = works[i];
			if(work.id == data.p_id){
				if(!work.images){
					work.images = [];
					work.img_id = [];
					work.thumbs = [];
				}
				
				work.images.push("uploads/" + data.image);
				work.thumbs.push("uploads/thumb_" + data.image);
				work.img_id.push(data.m_id);
				
				console.dir(work);
				break;		
			}
		}
	};
	
	var removeWorkById = function(pid){
		var data, year;
		for(var i=0; i < works.length; i++){
			data = works[i];
			year = data.year;
			if(data.id == pid){
				works.splice(i, 1);
				years = null;
				
				
				if($(".work_item[year='" + year + "']").length == 1){
					$(".submenu .item.sub[key='" + year + "']").remove();
				}
				
				$(".work_logo[pid='project-" + pid + "'], .work_item[id='project-" + pid + "']").remove();
				
				break;
			}
		}
	};
	
	var getDataById = function(id){
		var data;
		for(var i=0; i < works.length; i++){
			data = works[i];
			if(data.id == id){
				return data;
			}
		}
	};
	
	return {
		getWorks: getWorks
		, getDataById: getDataById
		, getRecent: getRecent
		, addWork: addWork
		, addWorksInfo: addWorksInfo
		, addImage: addImage
		, getMeta: {}
		, removeWorkById: removeWorkById
		, getYears: getYears
		, getYearsList: getYearsList
		, setWorksData: setWorksData
	}
}();