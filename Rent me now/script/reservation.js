        let firstSelect = document.getElementById("list-test");
        let secondeSelect = document.getElementById("seconde-select");
        
        let motors = ["KYMCO VITALITY 50", "KYMCO AGILITY 125", "Kymco Xciting 400"];
        let cars = ["citroin C3", "sonata hybrid", "Audi-A5", "Renault express van"];
        let engins = ["XCMG LW400KN", "Drum_roller"];
        let camions = ["Scania P340n"];

        let imgMotors =['./pics/KYMCO VITALITY 50.jpg','./pics/KYMCO AGILITY 125.jpg','./pics/Kymco-Xciting-400.jpg'];
        let imgCars=['./pics/citroin c 3.jpg','./pics/sonata hybrid.webp','./pics/Audi-A5-Right-Front-Three-Quarter-165509.webp','./pics/Renault express van.png'];
        let imgCamions=['./pics/scania P340.jpg'];
        let imgEngins=['./pics/XCMG LW400KN.jpg','./pics/br_drum_roller.jpg'];


        firstSelect.addEventListener("change", function () {
            selected();
        });
        function selected() {
           
            let fs = firstSelect.value;
            
            if (fs === "moto") {
                Array = motors;
            } else if (fs === "cars")
                Array = cars;
            else if (fs === 'camion')
                Array = camions;
            else if (fs === 'engine')
                Array = engins;
            var code = "";
            for (i = 0; i < Array.length; i++) {
                code +=  `<option value="${Array[i]}" > ${Array[i]} </option>`;
                // code = code + "<option value="+ Array[i] +" > "+ Array[i] + "</option>";
            }
            code +=  '<option value="" style="display: none;" selected>Choose</option>';
            code = "<select>" + code + "</select>";
            secondeSelect.innerHTML = code;
        }
        secondeSelect.addEventListener("change", function () {
            selected_img();
        });
        function selected_img() {
            let fs = firstSelect.value;
            let ss = secondeSelect.value;
            let img = document.getElementById("img");
            img.classList.add("img-shower");
            console.log(ss);
            if (fs === 'moto') {
                for (let i = 0; i < motors.length; i++) {  
                    if (motors[i] === ss) {
                        img.src = imgMotors[i];
                    }
                    
                }
                
            } else if (fs === 'cars') {
                for (let i = 0; i < cars.length; i++) {  
                    if (cars[i] === ss) {
                        img.src = imgCars[i];
                    }
                }
                
            }else if(fs === 'camion') {
                for (let i = 0; i < camions.length; i++) {  
                    if (camions[i] === ss) {
                        img.src = imgCamions[i];
                    }
                }
                
            }else{
                for (let i = 0; i < engins.length; i++) {  
                    if (engins[i] === ss) {
                        img.src = imgEngins[i];
                    }
                }

            }
            
        }
        secondeSelect.addEventListener("change", function (){
        fuel_types()
        });
        function fuel_types() {
            let ss = secondeSelect.value;
            let fs = firstSelect.value;
            // let fuelSelect=document.getElementById('fuel-select')

            if (fs==='camion') {
                remove();
                autoCall();
                diesel();
            }
            else if (fs==='moto') {
                remove();
                essance();
                electrique();
            }
            else if (fs==='engine') {
                remove();
                manuCall();
                essance();
                diesel();
           }
           else {
             if (ss==="citroin C3") {
                remove();
                manuCall();
                essance();
                diesel();
                electrique();
                hybrid();
               }
               else if (ss==="sonata hybrid"){
                remove();
                manuCall();
                essance();
                diesel();
                hybrid();
               }
               else if (ss==="Audi-A5"){
                remove();
                autoCall();
                essance();
                diesel();
                hybrid();

               }
               else{
                manuCall();
                remove();
                diesel();
               }

           }
            
        }
        function remove(){
          document.getElementById("fuel-select").style.display="none";
          document.getElementById("fuel-select2").style.display="none";
          document.getElementById("fuel-select3").style.display="none";
          document.getElementById("fuel-select4").style.display="none";
        }
        function autoCall(){
          document.getElementById("input-boite-vitess").style.display="block";
          document.getElementById("automatique").checked=true;
          document.getElementById("automatique").disabled=true;
          document.getElementById("manual").disabled=true;
        }
        function manuCall(){
          document.getElementById("input-boite-vitess").style.display="block";
          document.getElementById("manual").checked=true;
          document.getElementById("manual").disabled=true;
          document.getElementById("automatique").disabled=true;
        }
        function essance(){
          document.getElementById("fuel-select2").style.display="block";
        }
        function diesel(){
          document.getElementById("fuel-select").style.display="block";
        }
        function hybrid(){
          document.getElementById("fuel-select3").style.display="block";
        }
        function electrique(){
          document.getElementById("fuel-select4").style.display="block";
        }
        
        // secondeSelect.addEventListener("click", function (){
        //   disable()
        //   });

        function disable(){
          let radiobox = document.createElement('input');
          radiobox.type='radio';
          radiobox.id='automatique';
          radiobox.name='check';
          var label = document.createElement('label')
          label.htmlFor = 'automatique';
          var description = document.createTextNode('auto');
          label.appendChild(description);
          var container = document.getElementById('creat-input');
          container.appendChild(radiobox);
          container.appendChild(label);
        }
        secondeSelect.addEventListener("change", function (){
        number_input()
        });
        function number_input() {
            document.getElementById("myNumber").style.display="block";
        }
        secondeSelect.addEventListener("change", function (){
        submit()
        });
        function submit() {
            
            document.getElementById("submit").style.display="block";
        }
        function calcule() {
            let ss = secondeSelect.value;
            let fs = firstSelect.value;
            let price;
            let jourNumber = document.getElementById("myNumber").value;
            let Diesel = document.getElementById("Diesel")
            let Essance = document.getElementById("Essance")
            let Hybride = document.getElementById("Hybride")
            let Electrique = document.getElementById("Electrique")
            let finalMsg=document.getElementById('final-msg');
            if (fs==='camion'){
                price=250*1.19;
                if(Diesel.checked)
                {
                price=price * jourNumber;
                price= price  + price * 21/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Diesel";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                }
            }
            else if (fs==='moto'){
                price=10;
                if(Essance.checked)
                {
                price=price * jourNumber;
                price=price + price * 14/100;
                price=price.toFixed(2);
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Essance";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                }
                else if(Electrique.checked)
                {
                    price=price * jourNumber;
                    price=price + price * 5/100;
                    document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Electrique";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                }
            }
            else if(fs==='engine'){
                price=900;
                if(Essance.checked)
                {
                price=price * jourNumber;
                price=price + price * 14/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Essance";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                }
                else if(Diesel.checked)
                {
                    price=price * jourNumber;
                    price=price + price * 21/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Diesel";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                }
            }
            else{
                    if(ss==="citroin C3")
                {
                    price=12;
                    if(Essance.checked)
                    {
                    price=price * jourNumber;
                    price=price + price * 14/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Essance";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                    else if(Diesel.checked)
                    {
                        price=price * jourNumber;
                        price=price + price * 21/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Diesel";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                    else if(Electrique.checked)
                    {
                        price=price * jourNumber;
                        price=price + price * 5/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Electrique";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                    else if(Hybride.checked)
                    {
                    price=price * jourNumber;
                    price=price + price * 9/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Hybride";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                }
                else if(ss==="sonata hybrid")
                    {
                        price=14;
                        if(Essance.checked)
                    {
                    price=price * jourNumber;
                    price=price + price * 14/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Essance";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                    else if(Diesel.checked)
                    {
                        price=price * jourNumber;
                        price=price + price * 21/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Diesel";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                    else if(Hybride.checked)
                    {
                    price=price * jourNumber;
                    price=price + price * 9/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Hybride";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                        
                    }
                else if(ss==="Audi-A5")
                    {

                        price=20+20*19/100;
                        if(Essance.checked)
                    {
                    price=price * jourNumber;
                    price=price + price * 14/100 ;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Essance";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                    else if(Diesel.checked)
                    {
                        price=price * jourNumber;
                        price=price + price * 21/100;
                        price=price.toFixed(2);
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Diesel";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }
                    else if(Hybride.checked)
                    {
                    price=price * jourNumber;
                    price=price + price * 9/100;
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Hybride";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+"days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+"€";
                    }    
                    }
                else{
                    price=16;
                if(Diesel.checked)
                {
                    price=price * jourNumber;
                    price=price+price*21/100;
                    
                document.getElementById('popup').style.display="block";
                document.getElementById("fuel-choice").innerHTML="fuel type : Diesel";
                document.getElementById("day-numbre").innerHTML="Duration : "+jourNumber+" days"
                document.getElementById('final-msg').innerHTML="The price is :"+price+" €";
                }
                }

            }
        
        }
        
        function hide() {
            document.getElementById("popup").style.display="none";
            
        }