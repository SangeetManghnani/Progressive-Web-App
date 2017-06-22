//latest
(function() {
  'use strict';

  var app = {
    spinner: document.querySelector('.loader')
  };

  var container = document.querySelector('.container');


  // Get Commit Data from Github API
  function fetchCommits() {
  	var api_key = 'da25465fcfaf8b47df7c0ced60c690f3';
  	var request = new Request('https://developers.zomato.com/api/v2.1/collections?city_id=10', {
		headers: new Headers({
			'user-key': api_key
		})
	});
    // var url = 'https://developers.zomato.com/api/v2.1/categories';

    fetch(request)
    .then(function(fetchResponse){ 
      return fetchResponse.json();
    })
    .then(function(response) {
    	console.log(response.collections[0].collection.description);
        // var commitData = {
        //     'first': {
        //       message: response[0].commit.message,
        //       author: response[0].commit.author.name,
        //       time: response[0].commit.author.date,
        //       link: response[0].html_url
        //     },
        //     'second': {
        //       message: response[1].commit.message,
        //       author: response[1].commit.author.name,
        //       time: response[1].commit.author.date,
        //       link: response[1].html_url
        //     },
        //     'third': {
        //       message: response[2].commit.message,
        //       author: response[2].commit.author.name,
        //       time: response[2].commit.author.date,
        //       link: response[2].html_url
        //     },
        //     'fourth': {
        //       message: response[3].commit.message,
        //       author: response[3].commit.author.name,
        //       time: response[3].commit.author.date,
        //       link: response[3].html_url
        //     },
        //     'fifth': {
        //       message: response[4].commit.message,
        //       author: response[4].commit.author.name,
        //       time: response[4].commit.author.date,
        //       link: response[4].html_url
        //     }
        // };
       	const card_container = document.querySelector('.card_container');
       	const mapNumToWord = ['.first','.second','.third','.fourth','.fifth','.sixth','.seventh','.eighth','.ninth','.tenth'];
        for(var i=0; i < 10; i++){
        	console.log(response.collections[i]);
        	const data = response.collections[i].collection;
        	//  initilaize elements
        	// var wrapper = document.createElement('div');
        	// var layer = document.createElement('div');
        	// var share_link = document.createElement('a');
        	// var description = document.createElement('p');
        	// var title = document.createElement('h4');

        	// //append elements
        	// wrapper.appendChild(layer);
        	// wrapper.appendChild(title);
        	// wrapper.appendChild(description);
        	// wrapper.appendChild(share_link);
 

        	// // assign values
        	// share_link.href = data.share_url;
        	// share_link.innerHTML = "Click To Share !"
        	// title.innerHTML = data.title;
        	// description.innerHTML = data.description;
        	// wrapper.classList.add('card');
        	// layer.classList.add('layer');
        	// wrapper.style.backgroundImage = 'url(' + data.image_url + ')';

        	// card_container.appendChild(wrapper);

        	container.querySelector(mapNumToWord[i]).innerHTML = 
        "<h4> Message: " +	data.description + "</h4>" +
        "<h4> Author: " + data.title + "</h4>" +
        "<h4>" + "<a href='" + data.share_url + "'>Click me to see more!</a>"  + "</h4>";
         container.querySelector(mapNumToWord[i]).style.backgroundImage = 'url('+data.image_url+')' ;

        }
        // container.querySelector('.first').innerHTML = 
        // "<h4> Message: " + response.collections[0].collection.description + "</h4>" +
        // "<h4> Author: " + response.collections[0].collection.title + "</h4>" +
        // "<img width='50'src='" + response.collections[0].collection.image_url +  "'></img>" +
        // "<h4>" + "<a href='" +response.collections[0].collection.share_url + "'>Click me to see more!</a>"  + "</h4>";
        //  container.querySelector('.first').style.backgroundImage = 'url('+response.collections[0].collection.image_url+')' ;

        // container.querySelector('.second').innerHTML = 
        // "<h4> Message: " + response[1].commit.message + "</h4>" +
        // "<h4> Author: " + response[1].commit.author.name + "</h4>" +
        // "<h4> Time committed: " + (new Date(response[1].commit.author.date)).toUTCString()  +  "</h4>" +
        // "<h4>" + "<a href='" + response[1].html_url + "'>Click me to see more!</a>"  + "</h4>";

        // container.querySelector('.third').innerHTML = 
        // "<h4> Message: " + response[2].commit.message + "</h4>" +
        // "<h4> Author: " + response[2].commit.author.name + "</h4>" +
        // "<h4> Time committed: " + (new Date(response[2].commit.author.date)).toUTCString()  +  "</h4>" +
        // "<h4>" + "<a href='" + response[2].html_url + "'>Click me to see more!</a>"  + "</h4>";

        // container.querySelector('.fourth').innerHTML = 
        // "<h4> Message: " + response[3].commit.message + "</h4>" +
        // "<h4> Author: " + response[3].commit.author.name + "</h4>" +
        // "<h4> Time committed: " + (new Date(response[3].commit.author.date)).toUTCString()  +  "</h4>" +
        // "<h4>" + "<a href='" + response[3].html_url + "'>Click me to see more!</a>"  + "</h4>";

        // container.querySelector('.fifth').innerHTML = 
        // "<h4> Message: " + response[4].commit.message + "</h4>" +
        // "<h4> Author: " + response[4].commit.author.name + "</h4>" +
        // "<h4> Time committed: " + (new Date(response[4].commit.author.date)).toUTCString() +  "</h4>" +
        // "<h4>" + "<a href='" + response[4].html_url + "'>Click me to see more!</a>"  + "</h4>";

        app.spinner.setAttribute('hidden', true); //hide spinner
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  fetchCommits();
})();