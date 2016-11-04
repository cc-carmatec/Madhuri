 $(document).ready(function () {
 $("#showHide").click(function () {
 if ($("#password").attr("type")=="password") {
 $("#password").attr("type", "text");
 }
 else{
 $("#password").attr("type", "password");
 }
 
 });
 });
  $('#configreset').click(function(){
        $('#configform')[0].reset();
  });
$('.selectpicker').selectpicker();
$('select').change(function(){
if ($(this).val()!="")
{
$(this).valid();
}
});
$(function() {
        // Countries If the country has to preseneted as a dropdown//
       var country_arr = new Array("Select Country","INDIA","USA");

        $.each(country_arr, function (i, item) {
            $('#country').append($('<option>', {
                value: i,
                text : item,
            }, '</option>' ));
        });

        // States when the country is presented as a dropdown and the grolocation is not used
        var s_a = new Array();
        s_a[0]="Select State";
        s_a[1]="Select State|Andaman & Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhatisgarh|Dadra & Nagar Haveli|Daman & Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu & Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Odisha (Orissa)|Puducherry| Punjab|Rajasthan|Sikkim|Tamil Nadu|Telangana|Tripura|Uttar Pradesh|Uttarakhand|West Bengal";
        s_a[2]="Select State|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
         // var s_a = new Array();
        
         // s_a['India']="Select State|Andaman & Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhatisgarh|Dadra & Nagar Haveli|Daman & Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu & Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Odisha (Orissa)|Puducherry| Punjab|Rajasthan|Sikkim|Tamil Nadu|Telangana|Tripura|Uttar Pradesh|Uttarakhand|West Bengal";
         // s_a['USA']="Select State|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming";

        // Cities
        var c_a = new Array();
        c_a['Andaman & Nicobar Islands']="Select City|Nicobar|North and Middle Andaman|South Andaman";
        c_a['Andhra Pradesh']="Select City|Anantapur|Chittoor|Cuddapah|East Godavari|Guntur|Krishna|Kurnool|Nellore|Prakasam|Srikakulam|Visakhapatnam|Vizianagaram|West Godavari";
        c_a['Arunachal Pradesh']="Select City|Anjaw|Changlang|Dibang Valley|East Kameng|East Siang|Kurung Kumey|Lohit|Longding|Lower Dibang Valley|Lower Subansiri|Papum Pare|Tawang|Tirap|Upper Siang|Upper Subansiri|West Kameng|West Siang";
        c_a['Assam']="Select City|Baksa|Barpeta|Bongaigaon|Cachar|Chirang|Darrang|Dhemaji|Dhubri|Dibrugarh|Dima Hasao|Goalpara|Hailakandi|Jorhat|Kamrup Metropolitan|Kamrup|Karbi Anglong|Karimganj|Kokrajhar|Lakhimpur|Morigaon|Nagaon|Nalbari|Sivasagar|Sonitpur|Tinsukia|Udalguri";
        c_a['Bihar']="Select City|Araria|Arwal|Aurangabad|Banka|Begusarai|Bhagalpur|Bhojpur|Buxar|Darbhanga|East Champaran (Motihari)|Gaya|Gopalganj|Jamui|Jehanabad|Kaimur (Bhabua)|Katihar|Khagaria|Kishanganj|Lakhisarai|Madhepura|Madhubani|Munger (Monghyr)|Muzaffarpur|Nalanda|Nawada|Patna|Purnia (Purnea)|Rohtas|Sahars|Samastipur|Saran|Sheikhpura|Sheohar|Sitamarhi|Siwan|Supaul|Vaishali|West Champaran";
        c_a['Chandigarh']="Select City|Chandigarh";
        c_a['Chhatisgarh']="Select City|Balod|Baloda Bazar|Balrampur|Bastar|Bemetara|Bijapur|Bilaspur|Dantewada (South Bastar)|Dhamtari|Durg|Gariaband|Janjgir-Champa|JashpurKabirdham (Kawardha)|Kanker (North Bastar)|Kondagaon|Korba|Korea (Koriya)|Mahasamund|Mungeli|Narayanpur|Raigarh|Raipur|Rajnandgaon|Sukma|Surajpur|Surguja";
        c_a['Dadra & Nagar Haveli']="Select City|Dadra & Nagar Haveli";
        c_a['Daman & Diu']="Select City|Daman|Diu";
        c_a['Delhi']="Select City|Central Delhi|East Delhi|New Delhi|North Delhi|North East Delhi|North West Delhi|South Delhi|South West Delhi|West Delhi";
        c_a['Goa']="Select City|North Goa |South Goa";
        c_a['Gujarat']="Select City|Ahmedabad|Anand|Aravalli|Banaskantha (Palanpur)|Bharuch|Bhavnagar|Botad|Chhota Udepur|Dahod|Dangs (Ahwa)|Devbhoomi Dwarka|Gandhinagar|Gir Somnath|Jamnagar|Junagadh|Kachchh|Kheda (Nadiad)|Mahisagar|Mehsana|Morbi|Narmada (Rajpipla)|Navsari|Panchmahal (Godhra)|PatanPorbandar|Rajkot|Sabarkantha (Himmatnagar)|SuratSurendranagar|Tapi (Vyara)|VadodaraValsad";
        c_a['Haryana']="Select City|Ambala|Bhiwani|Faridabad|Fatehabad|Gurgaon|Hisar|Jhajjar|Jind|Kaithal|Karnal|Kurukshetra|Mahendragarh|Mewat|Palwal|Panchkula|Panipat|Rewari|Rohtak|Sirsa|Sonipat|Yamunanagar";
        c_a['Himachal Pradesh']="Select City|Bilaspur|Chamba|Hamirpur|Kangra|Kinnaur|Kullu|Lahaul & Spiti|Mandi|Shimla|Sirmaur (Sirmour)|Solan|Una";
        c_a['Jammu & Kashmir']="Select City|Anantnag|Bandipora|Baramulla|Budgam|Doda|Ganderbal|Jammu|Kargil|Kathua|Kishtwar|Kulgam|Kupwara|Leh|Poonch|Pulwama|Rajouri|Ramban|Reasi|Samba|Shopian|Srinagar|Udhampur";
        c_a['Jharkhand']="Select City|Bokaro|Chatra|Deoghar|Dhanbad|Dumka|East Singhbhum|Garhwa|Giridih|Godda|Gumla|Hazaribag|Jamtara|Khunti|Koderma|Latehar|Lohardaga|Pakur|Palamu|Ramgarh|Ranchi|Sahibganj|Seraikela-Kharsawan|Simdega|West Singhbhum";
        c_a['Karnataka']="Select City|Bagalkot|Bangalore Rural|Bangalore Urban|Belgaum|Bellary|Bidar|Bijapur|Chamarajanagar|Chickmagalur|Chikballapur|Chitradurga|Dakshina Kannada|Davangere|Dharwad|Gadag|Gulbarga|Hassan|Haveri|Kodagu|Kolar|Koppal|Mandya|Mysore|Raichur|Ramnagara|Shimoga|Tumkur|Udupi|Uttara Kannada (Karwar)|Yadgir";
        c_a['Kerala']="Select City|Alappuzha|Ernakulam|Idukki|Kannur|Kasaragod|Kollam|Kottayam|Kozhikode|Malappuram|Palakkad|Pathanamthitta|Thiruvananthapuram|Thrissur|Wayanad";
        c_a['Madhya Pradesh']="Select City|Alirajpur|Anuppur|Ashoknagar|Balaghat|Barwani|Betul|Bhind|Bhopal|Burhanpur|Chhatarpur|Chhindwara|Damoh|Datia|Dewas|Dhar|Dindori|Guna|Gwalior|Harda|Hoshangabad|Indore|Jabalpur|Jhabua|Katni|Khandwa|Khargone|Mandla|Mandsaur|Morena|Narsinghpur|Neemuch|Panna|Raisen|Rajgarh|Ratlam|Rewa|Sagar|Satna|Sehore|Seoni|Shahdol|Shajapur|Sheopur|Shivpuri|Sidhi|Singrauli|Tikamgarh|Ujjain|Umaria|Vidisha";
        c_a['Maharashtra']="Select City|Ahmednagar|Akola|Amravati|Aurangabad|Beed|Bhandara|Buldhana|Chandrapur|Dhule|Gadchiroli|Gondia|Hingoli|Jalgaon|Jalna|Kolhapur|Latur|Mumbai City|Mumbai Suburban|Nagpur|Nanded|Nandurbar|Nashik|Osmanabad|Parbhani|Pune|Raigad|Ratnagiri|Sangli|Satara|Sindhudurg|Solapur|Thane|Wardha|Washim|Yavatmal";
        c_a['Manipur']="Select City|Bishnupur|Chandel|Churachandpur|Imphal East|Imphal West|Senapati|Tamenglong|Thoubal|Ukhrul";
        c_a['Meghalaya']="Select City|East Garo Hills|East Jaintia Hills|East Khasi Hills|North Garo Hills|Ri Bhoi|South Garo Hills|South West Garo Hills|South West Khasi Hills|West Garo Hills|West Jaintia Hills|West Khasi Hills";
        c_a['Mizoram']="Select City|Aizawl|Champhai|Kolasib|Lawngtlai|Lunglei|Mamit|Saiha|Serchhip";
        c_a['Nagaland']="Select City|Dimapur|Kiphire|Kohima|Longleng|Mokokchung|Mon|Peren|Phek|Tuensang|Wokha|Zunheboto";
        c_a['Odisha']="Select City|Angul|Balangir|Balasore|Bargarh|Bhadrak|Boudh|Cuttack|Deogarh|Dhenkanal|Gajapati|Ganjam|Jagatsinghapur|Jajpur|Jharsuguda|Kalahandi|Kandhamal|Kendrapara|Kendujhar (Keonjhar)|Khordha|Koraput|Malkangiri|Mayurbhanj|Nabarangpur|Nayagarh|Nuapada|Puri|Rayagada|Sambalpur|Sonepur|Sundargarh";
        c_a['Puducherry']="Select City|Karaikal|Mahe|Pondicherry|Yanam";
        c_a['Punjab']="Select City|Amritsar|Barnala|Bathinda|Faridkot|Fatehgarh Sahib|Fazilka|Ferozepur|Gurdaspur|Hoshiarpur|Jalandhar|Kapurthala|Ludhiana|Mansa|Moga|Muktsar|Nawanshahr|Pathankot|Patiala|Rupnagar|Sangrur|SAS Nagar (Mohali)|Tarn Taran";
        c_a['Rajasthan']="Select City|Ajmer|Alwar|Banswara|Baran|Barmer|Bhilwara|Bikaner|Bundi|Chittorgarh|Churu|Dausa|Dholpur|Dungarpur|Hanumangarh|Jaipur|Jaisalmer|Jalore|Jhalawar|Jhunjhunu|Jodhpur|Karauli|Kota|Nagaur|Pali|Pratapgarh|Rajsamand|Sawai Madhopur|Sikar|Sirohi|Sri Ganganagar|Tonk|Udaipur";
        c_a['Sikkim']="Select City|East Sikkim|North Sikkim|South Sikkim|West Sikkim";
        c_a['Tamil Nadu']="Select City|Ariyalur|Chennai|Coimbatore|Cuddalore|Dharmapuri|Dindigul|Erode|Kanchipuram|Kanyakumari|Karur|Krishnagiri|Madurai|Nagapattinam|Namakkal|Nilgiris|Perambalur|Pudukkottai|Ramanathapuram|Salem|Sivaganga|Thanjavur|Theni|Thoothukudi (Tuticorin)|Tiruchirappalli|Tirunelveli|Tiruppur|Tiruvallur|Tiruvannamalai|Tiruvarur|Vellore|ViluppuramVirudhunagar";
        c_a['Telangana']="Select City|Adilabad|Hyderabad|Karimnagar|Khammam|Mahabubnagar|Medak|Nalgonda|Nizamabad|Rangareddy|Warangal";
        c_a['Tripura']="Select City|Dhalai|Gomati|Khowai|North Tripura|Sepahijala|South Tripura|Unakoti|West Tripura";
        c_a['Uttar Pradesh']="Select City|Agra|Aligarh|Allahabad|Ambedkar Nagar|Auraiya|Azamgarh|Baghpat|Bahraich|Ballia|Balrampur|Banda|Barabanki|Bareilly|Basti|Sambhal (Bhim Nagar)|Bijnor|Budaun|Bulandshahr|Chandauli|Amethi (Chatrapati Sahuji Mahraj Nagar)|Chitrakoot|Deoria|Etah|Etawah|Faizabad|Farrukhabad|Fatehpur|Firozabad|Gautam Buddha Nagar|Ghaziabad|Ghazipur|Gonda|Gorakhpur|Hamirpur|Hardoi|Hathras|Jalaun|Jaunpur|Jhansi|Amroha (J.P. Nagar)|Kannauj|Kanpur Dehat|Kanpur Nagar|Kanshiram Nagar (Kasganj)|Kaushambi|Kushinagar (Padrauna)|Lakhimpur - Kheri|Lalitpur|Lucknow|Maharajganj|Mahoba|Mainpuri|Mathura|Mau|Meerut|Mirzapur|Moradabad|Muzaffarnagar|Hapur (Panchsheel Nagar)|Pilibhit|Shamali (Prabuddh Nagar)|Pratapgarh|RaeBareli|Rampur|Saharanpur|Sant Kabir Nagar|Sant Ravidas Nagar|Shahjahanpur|Shravasti|Siddharth Nagar|Sitapur|Sonbhadra|Sultanpur|Unnao|Varanasi";
        c_a['Uttarakhand']="Select City|Almora|Bageshwar|Chamoli|Champawat|Dehradun|Haridwar|Nainital|Pauri Garhwal|Pithoragarh|Rudraprayag|Tehri Garhwal|Udham Singh Nagar|Uttarkashi";
        c_a['West Bengal']="Select City|Bankura|Birbhum|Burdwan (Bardhaman)|Cooch Behar|Dakshin Dinajpur (South Dinajpur)|Darjeeling|Hooghly|Howrah|Jalpaiguri|Kolkata|Malda|Murshidabad|Nadia|North 24 Parganas|Paschim Medinipur (West Medinipur)|Purba Medinipur (East Medinipur)|Purulia|South 24 Parganas|Uttar Dinajpur (North Dinajpur)";

        //The Functionn that has to be used when the dropdown has to be for country,state and city.This will work in case geolocation is not used//
          $('#country').change(function(){
            var c = $(this).val();
            var state_arr = s_a[c].split("|");
            $('#state').empty();
            $('#city').empty();
            if(c==0){
                $('#state').append($('<option>', {
                    value: '0',
                    text: 'Select State',
                }, '</option>'));
            }else {
                $.each(state_arr, function (i, item_state) {
                    $('#state').append($('<option>', {
                        value: item_state,
                        text: item_state,
                    }, '</option>'));
                });
            }
            $('#city').append($('<option>', {
                value: '0',
                text: 'Select City',
            }, '</option>'));
        });

        //The below function is used when the geolocation plugin is imported//
      // var myVar = setTimeout(function(){ myTimer() },1000); 

      // function myTimer(){
      //     var c= $("#country").text();
      //      var state_arr = s_a[c].split("|");
      //       $('#state').empty();
      //       $('#city').empty();
      //       if(c==0){
      //           $('#state').append($('<option>', {
      //               value: '0',
      //               text: 'Select State',
      //           }, '</option>'));
      //       }else {
      //           $.each(state_arr, function (i, item_state) {
      //               $('#state').append($('<option>', {
      //                   value: item_state,
      //                   text: item_state,
      //               }, '</option>'));
      //           });
      //       }
      //       $('#city').append($('<option>', {
      //           value: '0',
      //           text: 'Select City',
      //       }, '</option>'));

      //   }

        $('#state').change(function(){
            var s = $(this).val();
            if(s=='Select State'){
                $('#city').empty();
                $('#city').append($('<option>', {
                    value: '0',
                    text: 'Select City',
                }, '</option>'));
            }
            var city_arr = c_a[s].split("|");
            $('#city').empty();

            $.each(city_arr, function (j, item_city) {
                $('#city').append($('<option>', {
                    value: item_city,
                    text: item_city,
                }, '</option>'));
            });


        });
    });
// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  jQuery.validator.addMethod("phonenumber", function(value, element) {
       return this.optional( element ) || /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i.test( value );
     }, 'Please enter a valid phone number.');
    jQuery.validator.addMethod("lettersonly", function(value, element) {
       return this.optional( element ) || /^[a-zA-Z]+$/i.test( value );
     }, 'Please enter characters only.');
  $.validator.addMethod("pwcheck", function(value,element) {
   return this.optional(element) || /^[A-Za-z0-9\d=!\-@._*]*$/i.test(value) // consists of only these
       && /\d/i.test(value) // has a digit
        && /(?=.*[A-Z])/i.test(value) && /([!,%,&,@,#,$,^,*,?,_,~])/i.test(value) && (value).length>=8//
}, 'Please enter valid password,Make sure you have a capital letter & small letter & a digit');
   $.validator.addMethod("pincheck", function(value,element) {
   return this.optional(element) || /^[A-Za-z0-9\d=!\-@._*]*$/i.test(value) // consists of only these
       && (value).length==6//
}, 'Please enter valid pin');
   $.validator.addMethod("inArray", function(value, element, params) {
    return this.optional(element) || (value in params);
    }, "Not an allowed selection.");

 errorClass: "invalid"
  $("form[name='registration']").validate({
    ignore:"",
   errorClass: "invalid", /*(if the css properties are to be omitted for the text and the box,)
   disable it when the css properties have to be applied like highlighting the error boxes instead of labels */
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: 
      {
      	required:true,
      	minlength:3,
      	maxlength:30,
      	lettersonly:true
      },

      lastname: 
      {
      	required:true,
      	minlength:3,
      	maxlength:30,
      	lettersonly:true
      },

      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        pwcheck:true,
       
      },
      pincode: 
      {
      	required:true,
      	pincheck:true
      },
      profession: 
      {
      	required:true,
      	minlength:5,
      	lettersonly:true
      },
      phonenumber: 
      {
      	required:true,
      	minlength:10,
      	phonenumber:true
      },
      country:
      {
        required:true
      },
      city:
      {
        required:true
      },
      optradio:
      {
      required:true 
      },
      check:
      {
      required:true 
      },
     item:
     {
     required:true
     },
     comment:
     {
     required:true,
     
     minlength:10
     },
     pdffile:
          {
            required:true
          }

    },
    // Specify validation error messages
    messages: {
       firstname: {
        required: "Please provide a Firstname",
        minlength:"First Name should be atleast 3 characters long",
        maxlength:"First Name not more than 30 characters"
      },
       lastname: {
        required: "Please provide a Lastname",
        minlength:"Last Name should be atleast 3 characters long",
        maxlength:"Last Name not more than 30 characters"
      },
      password: {
        required: "Please provide a password",
      
      },
    
      pincode: 
      {
      	required:"Please enter the pin-code",
      	minlength:"please enter 5 digits"
      },
      phonenumber: 
      {
      	required:"please enter the phonenumber",
      	minlength:"please enter 10 digits"
      },
      optradio:
      {
        required:"Please select either of the options"
      },
         check:
      {
        required:"Please select atleast one option"
      },
         item:
      {
         required:"Please select an option from the dropdown"
      },
         comment:
      {
        required:"Please leave a message"
      },
       pdffile:
          {
            accept:"Upload the file"
          },
      country:
      {
        required: "Please fill the country"
      },
      city:
      {
        required:"Please enter city"
      },

      profession: 
      {
      	required:"Please enter the profession",
      minlength:"Please enter your profession with a minimum of 5 characters"
      },

      email: "Please enter a valid email address"  
    },
errorPlacement: function(error, element) 
    {
        if ( element.is(":radio") ) 
        {
            error.appendTo( element.parents('.radiobutton') );
        }
       else if (element.is(":checkbox"))
       {
       	error.appendTo( element.parents('.checkboxbutton') );
       }
       else if (element.is('select'))
       {
        error.appendTo( element.parents('.select-container') );
       }
    
    
        else
        { // This is the default behavior 
            error.insertAfter( element );
        }
    },
  /*  errorPlacement: function(error, element) 
    {
        When the input boxes need to be highlighted in red color without error messages .using this function will only highlight 
        input boxes and does not apply for checkbox/radio/dropdown
    },*/
   


    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
