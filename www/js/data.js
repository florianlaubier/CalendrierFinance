var codropsEvents = {
	  // '05-08-2014' : '<span>1er test</span>',
	  // '05-29-2014' : '<span>2eme test</span>'
	};


	function getAlerts(){




		html5sql.openDatabase("BDDAlertes", "BDDAlertes", 3 * 1024 * 1024);

		html5sql.process(
			[{
				sql:"SELECT * FROM alertes;",

			}],
			function(transaction, results, rowsArray){

				for(var i = 0; i < rowsArray.length; i++){
					var date=""+rowsArray[i].date_alerte;
					var titre=""+rowsArray[i].titre;
					codropsEvents[date]='<span>'+titre+'</span>';
				}
				console.log(codropsEvents);


			},
			function(error, statement){
				errors.append("<li>"+error.message+" Occured while processing: "+statement+"</li>");
			}
			);
		
		return codropsEvents;

	}


