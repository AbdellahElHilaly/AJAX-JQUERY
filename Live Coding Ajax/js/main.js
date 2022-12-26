let text = document.getElementsByTagName('text');


// send();
// sendNormal();
sendJson();




function send(){
    $.ajax({
            url: '../php/script.php', 
            type: 'POST', 
            data: ({ 
                jsMsg:"hi php"
                
            }), 

            success: function(response) {
                console.log(response);
            },
            error: function(xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
}



























function sendNormal(){
        
    $.ajax({
        url: '../php/script.php', // the URL of the PHP script
        type: 'POST', // HTTP method
        data: ({ 
            jsMsg : "hi php" 
        }), // data to send to the PHP script

        success: function(response) {
            // handle the response from the PHP script
            text[0].innerText = "success send data to php";
            text[1].innerText = response;
        },
        error: function(xhr, status, error) {
            // handle errors
            text[2].innerText = xhr.status;
            text[2].innerText += status;
            text[2].innerText += error;
        }
    });

}




function sendJson(){
    
    let myArray = new Array('one' , 'two');
        
    $.ajax({
        url: '../php/script.php', // the URL of the PHP script
        type: 'POST', // HTTP method
        dataType: 'json',
        data: ({ 
            jsMsgJson : "giv me arry" ,
            data2 : JSON.stringify(myArray)
        }), // data to send to the PHP script

        success: function(response) {
        // handle the response from the PHP script
            text[0].innerText = "success send data to php";
            if(response !='') text[1].innerText = response;
            else text[1].innerText = "no data from php";

            console.log(response);
        },
        error: function(xhr, status, error) {
        // handle errors
        text[2].innerText = xhr.status;
        text[2].innerText += status;
        text[2].innerText += error;
        }
    });

}

