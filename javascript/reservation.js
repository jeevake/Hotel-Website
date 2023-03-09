/* javascipt for price calculation */ 

//Price Objects

/* Classic Room Prices */
var classic={ PN_S:30,BF_S:40,HB_S:60,FB_S:90,
			  PN_D:50,BF_D:60,HB_D:90,FB_D:120,
			  PN_F:80,BF_F:90,HB_F:120,FB_F:150};

/* Deluxe Room Prices */
var deluxe={  PN_S:50,BF_S:60,HB_S:80,FB_S:110,
			  PN_D:70,BF_D:90,HB_D:120,FB_D:140,
			  PN_F:100,BF_F:110,HB_F:140,FB_F:170};

/* Presedential Room Prices */
var presedential={ PN_S:70,BF_S:80,HB_S:100,FB_S:130,
				   PN_D:90,BF_D:110,HB_D:150,FB_D:190,
				   PN_F:120,BF_F:150,HB_F:190,FB_F:250};

var roomType;
var add_info;

/* This function runs when the user clicks on the button */

function main(){
	var price = priceCal();
	var full_name = name();
	var country = document.getElementById("country").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var no_guests = numGuest();
	var no_date = date();
	var no_rooms = numRooms();
	
	//This displays the reservation details
	document.getElementById("res_name").innerHTML = ("Name: " + full_name);
	document.getElementById("res_country").innerHTML = ("Country: " + country);
	document.getElementById("res_email").innerHTML = ("Email: " + email);
	document.getElementById("res_phone").innerHTML = ("Phone No: " + phone);
	document.getElementById("res_noguest").innerHTML = ("No of Guests: " + no_guests);
	document.getElementById("res_days").innerHTML = ("No of nights: " + no_date)
	document.getElementById("res_roomtype").innerHTML = ("Room Type: " + roomType);
	document.getElementById("res_norooms").innerHTML = ("No of Rooms: " + no_rooms);
	document.getElementById("res_addinfo").innerHTML = ("Additinol info: " + add_info);
	document.getElementById("res_total").innerHTML = ("Total Amount: $" + price);
	alert("After confirming your reservation details. Please book your rooms");
}

/* This function calculate the No. of days of staying */
function date(){	
	var arrival_date = document.getElementById("arrival").value;
	var departure_date = document.getElementById("departure").value;
	const date1 = new Date(arrival_date);
	const date2 = new Date(departure_date);
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	return diffDays;
} 

/* This function concatenate the first and the last name*/
function name(){
	var first_name = document.getElementById("f_name").value;
	var last_name = document.getElementById("l_name").value;
	return first_name+" "+last_name;
}

/* This function returns the no of guests in the booking*/
function numGuest(){
	var num_guests = document.getElementById("no_of_guests").value;
	return num_guests;
}

/* This function return the no of rooms in the bookings*/
function numRooms(){
	var num_rooms = document.getElementById("no_of_rooms").value;
	return num_rooms;
}

/* This function calculate the total amount of the booking*/
function priceCal(){
	var no_guests = numGuest();
	var no_days = date();
	var no_rooms = numRooms();
	var price;


	if(no_guests=="1"){
		if (add_info=="per_night"){
			price = eval(roomType).PN_S * no_days;
		}
		else if (add_info=="breakfast"){
			price = eval(roomType).BF_S * no_days;
		}
		
		else if (add_info=="halfBoard"){
			price = eval(roomType).HB_S * no_days;
		}
		
		else if (add_info=="fullBoard"){
			price = eval(roomType).FB_S * no_days;
		}
	}
	
	if (no_guests=="2"){
		if (add_info=="per_night"){
			if(no_rooms == 1){
				price = eval(roomType).PN_D * no_days;
			}
			else if(no_rooms == 2){
				price = eval(roomType).PN_S * no_days * no_rooms;
			}
		}
		
		if (add_info=="breakfast"){
			if(no_rooms == 1){
				price = eval(roomType).BF_D * no_days;
			}
			else if(no_rooms == 2){
				price = eval(roomType).BF_S * no_days * no_rooms;
			}
		}
		
		if (add_info=="halfBoard"){
			if(no_rooms == 1){
				price = eval(roomType).HB_D * no_days;
			}
			else if(no_rooms == 2){
				price = eval(roomType).HB_S * no_days * no_rooms;
			}
		}
		
		if (add_info=="fullBoard"){
			if(no_rooms == 1){
				price = eval(roomType).FB_D * no_days;
			}
			else if(no_rooms == 2){
				price = eval(roomType).FB_S * no_days * no_rooms;
			}
		}		
		
	}

	if (no_guests=="3"){
		if (add_info=="per_night"){
			if(no_rooms == 1){
				price = eval(roomType).PN_F * no_days;
			}
			
			else if(no_rooms == 2){
				price = (eval(roomType).PN_S * no_days) + (eval(roomType).PN_D * no_days);
			}
			
			else if(no_rooms == 3){
				price = eval(roomType).PN_S*no_days*no_rooms;
			}
		}
		
		if (add_info=="breakfast"){
			if(no_rooms == 1){
				price = eval(roomType).BF_F * no_days;
			}
			else if(no_rooms == 2){
				price = (eval(roomType).BF_S * no_days) + (eval(roomType).BF_D * no_days);
			}
			
			else if(no_rooms == 3){
				price = eval(roomType).BF_S * no_days*no_rooms;
			}
		}
		
		if (add_info=="halfBoard"){
			if(no_rooms == 1){
				price = eval(roomType).HB_F * no_days;
			}
			else if(no_rooms == 2){
				price = (eval(roomType).HB_S * no_days) + (eval(roomType).BF_D * no_days);
			}
			
			else if(no_rooms == 3){
				price = eval(roomType).HB_S * no_days*no_rooms;
			}
		}
		
		if (add_info=="fullBoard"){
			if(no_rooms == 1){
				price = eval(roomType).FB_F * no_days;
			}
			else if(no_rooms == 2){
				price = (eval(roomType).FB_S * no_days) + (eval(roomType).BF_D * no_days);
			}
			
			else if(no_rooms == 3){
				price = eval(roomType).FB_S * no_days * no_rooms;
			}
		}
		
		
	}
	

	if (no_guests=="4"){
		if (add_info=="per_night"){
			if(no_rooms == 1){
				price = eval(roomType).PN_F * no_days * no_rooms;
			}
			
			else if(no_rooms == 2){
				price = eval(roomType).PN_D * no_days * no_rooms;
			}
			
			else if(no_rooms == 3){
				price = (eval(roomType).PN_S * no_days*2) + (eval(roomType).PN_D * no_days);
			}
			
			else if(no_rooms == 4){
				price = eval(roomType).PN_S * no_days * no_rooms;
			}
		}
		
		if (add_info=="breakfast"){
			if(no_rooms == 1){
				price = eval(roomType).BF_F * no_days * no_rooms;
			}
			
			else if(no_rooms == 2){
				price = eval(roomType).BF_D * no_days * no_rooms;
			}
			
			else if(no_rooms == 3){
				price = (eval(roomType).BF_S * no_days*2) + (eval(roomType).PN_D * no_days);
			}
			
			else if(no_rooms == 4){
				price = eval(roomType).BF_S * no_days * no_rooms;
			}
		}
		
		if (add_info=="halfBoard"){
			if(no_rooms == 1){
				price = eval(roomType).HB_F * no_days * no_rooms;
			}
			
			else if(no_rooms == 2){
				price = eval(roomType).HB_D * no_days * no_rooms;
			}
			
			else if(no_rooms == 3){
				price = (eval(roomType).HB_S * no_days*2) + (eval(roomType).HB_D * no_days);
			}
			
			else if(no_rooms == 4){
				price = eval(roomType).HB_S * no_days * no_rooms;
			}
		}
		
		if (add_info=="fullBoard"){
			if(no_rooms == 1){
				price = eval(roomType).FB_F * no_days * no_rooms;
			}
			
			else if(no_rooms == 2){
				price = eval(roomType).FB_D * no_days * no_rooms;
			}
			
			else if(no_rooms == 3){
				price = (eval(roomType).FB_S * no_days*2) + (eval(roomType).PN_D * no_days);
			}
			
			else if(no_rooms == 4){
				price = eval(roomType).FB_S * no_days * no_rooms;
			}
		}
	}
    return price;
}