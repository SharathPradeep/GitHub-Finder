// instantiate GitHub class
const github =new GitHub();

// init UI class
const ui= new UI();

// Search input event listener
const searchUser=document.getElementById('button');

// Search  value
const userName=document.getElementById('searchUser');

searchUser.addEventListener('click',(e)=>{

    // clear previous profile
    document.getElementById('profile').innerHTML='';

    // Get the input text
    const userText= userName.value;

    // spinner
    document.querySelector('.loader').style.display='block';

    setTimeout(fetching,1000)

    function fetching(){

        // spinner
        document.querySelector('.loader').style.display='none';

        // check for empty
        if(userText!==''){
            // Make http call-fetch
            github.getUser(userText)
                .then(data => {
                    if(data.profile.message!=='Not Found'){
                        // show profile
                        ui.showProfile(data.profile);
                        // show repos
                        ui.showRepos(data.repos);
                    }else{
                        // clear previous profile
                        document.getElementById('profile').innerHTML='';
                        // show alert
                        ui.showAlert('User not found','alert alert-danger');
                    }
                    
                })
                
        }else{
            // clear previous profile
            document.getElementById('profile').innerHTML='';

            // show alert
            ui.showAlert('User not found','alert alert-primary');
        }
    }
    


    e.preventDefault();
});



// clear all

const clear = document.getElementById('clear');

clear.addEventListener('click',(e)=>{

    // clear previous profile
    document.getElementById('profile').innerHTML='';

    // clear input
    userName.value='';

    e.preventDefault();
})