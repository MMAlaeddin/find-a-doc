import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './../src/project-service.js';
import { DoctorSymp } from './../src/project-service.js';

$(document).ready(function() {
  $("#docInfo").submit(function(event) {
    event.preventDefault();
    const name = $("#docName").val();
    $("#docName").val("");

    (async () => {
      let doctorInfo = new DoctorInfo();
      const response = await doctorInfo.getInfo(name);
      getElements(response);
    })();

    function getElements(response) {
      const docArr = response.data;
      const nameArr = [];
      if (response.data.length === 0) {
        alert("Sorry, no results for that.  Please try again.");
      } else if (response) {
        for (let i = 0; i < docArr.length; i++) {
          nameArr.push(`<li><strong> ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</strong> <br> ${response.data[i].practices[0].visit_address.street} <br> ${response.data[i].practices[0].phones[0].number} <br>${response.data[i].practices[0].accepts_new_patients? 'Is accepting new patients' : 'Is not accepting new patients'} <br> ${response.data[i].practices[0].website? '<a href="`${response.data[i].practices[0].website}`">Link to website</a>' : "No Link"} </li>`);
        }
      }
      $("#name").append(nameArr);
    }
  });
  $("#sympForm").submit(function(event) {
    event.preventDefault();
    const symps = $("#symptoms").val();
    $("#symptoms").val("");
  
    (async () => {
      let doctorSymp = new DoctorSymp();
      const response2 = await doctorSymp.getSymp(symps);
      getElements2(response2);
    })();
  
    function getElements2(response2) {
      const docArr2 = response2.data;
      const sympArr = [];
      if (response2.data.length === 0) {
        alert("Sorry, no results for that.  Please try again.");
      } else if (response2) {
        for (let j = 0; j < docArr2.length; j++) {
          sympArr.push(`<li><strong> ${response2.data[j].profile.first_name} ${response2.data[j].profile.last_name} </strong><br> ${response2.data[j].practices[0].visit_address.street} <br> ${response2.data[j].practices[0].phones[0].number} <br> ${response2.data[j].practices[0].accepts_new_patients? 'Is accepting new patients' : 'Is not accepting new patients'} <br> ${response2.data[j].practices[0].website? '<a href="`${response.data[i].practices[0].website}`">Link to website</a>' : "No Website"} </li>`);
        }
      }
      $("#name").append(sympArr);
    }
  });
});
