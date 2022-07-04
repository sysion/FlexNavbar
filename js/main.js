;(()=>{
	const toggle = document.querySelector('.toggle');
	const top_nav = document.querySelector('.logo-nav > nav');
	const projects_nav = document.querySelector('.projects-nav');
	const projects = document.querySelector('.projects');
	const project_sub_menu = document.querySelector('.project-sub-menu');
	const project_sub_education = document.querySelector('.project-sub-education');
	const project_sub_water = document.querySelector('.project-sub-water');
	const project_sub_climate = document.querySelector('.project-sub-climate');

	let toggleItem = (obj)=>{
		if (obj.classList.contains('remove')){
			obj.classList.remove('remove');
			//obj.classList.add('add');

			if (obj === projects_nav){
				obj.classList.add('addFlex');
			}
			else{
				obj.classList.add('add');
			}
		}
		else{
			//obj.classList.remove('add');
			obj.classList.add('remove');

			if (obj === projects_nav){
				obj.classList.remove('addFlex');
			}
			else{
				obj.classList.remove('add');
			}	
		}
	}

	let showMenu = ()=>{
		/*if (top_nav.classList.contains('remove')){
			top_nav.classList.remove('remove');
			top_nav.classList.add('add');
		}
		else{
			top_nav.classList.remove('add');
			top_nav.classList.add('remove');	
		}*/
		toggleItem(top_nav);
	};

	let showSub = (e)=>{
		//e.preventDefault();
		toggleItem(projects_nav);
	}

	toggle.addEventListener('click', showMenu);
	projects.addEventListener('click', showSub);


})();