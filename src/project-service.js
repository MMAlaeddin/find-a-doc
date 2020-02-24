export class DoctorInfo {
	async getInfo(name) {
			try {
				let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
				let jsonifiedResponse;
				if (response.ok && response.status == 200) {
					jsonifiedResponse = await response.json();
				} else {
					jsonifiedResponse = false; 
				}
				return jsonifiedResponse;
			 	} catch {
					 return false;
				 }
			}
    }
    export class DoctorSymp {
      async getSymp(symps) {
          try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symps}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
            let jsonifiedResponse;
            if (response.ok && response.status == 200) {
              jsonifiedResponse = await response.json();
            } else {
              jsonifiedResponse = false; 
            }
            return jsonifiedResponse;
             } catch {
               return false;
             }
          }
        }
