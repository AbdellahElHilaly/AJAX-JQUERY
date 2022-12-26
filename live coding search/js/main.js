let divCotainer = document.getElementById('div-container');

getNames();







function getNames(){

    $.ajax({
        url: '../php/script.php', 
        type: 'POST',
        dataType: 'json',
        data: ({ 
            request:"get"
        }), 
    
        success: function(response) {
            affichage(response);
        },
        error: function(xhr, status, error) {
    
        }
    });
}


function serch(key){

    divCotainer.innerHTML = '';

    $.ajax({
        url: '../php/script.php', 
        type: 'POST', 
        dataType: 'json',
        data: ({ 
        request:"serch",
        requestKey:key
            
        }), 
    
        success: function(response) {
            affichage(response);
        },
        error: function(xhr, status, error) {
    
        }
    });
}


function affichage(response){
    for(data of response){
        divCotainer.innerHTML += `
            <div>
                <span class="me-2"> ${data['id']}</span>  
                <span >${data['name']}</span>
            </div>
        `;
    }
}