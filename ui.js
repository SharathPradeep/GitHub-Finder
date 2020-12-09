class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }

    // display user profile in ui
    showProfile(user){
        this.profile.innerHTML=`
        <div class='card card-body mb-3 border-rounded'>
            <div class='row'>
                <div class='col-md-3'>
                    <img src='${user.avatar_url}' class='img-fluid mb-3 border rounded-circle'>
                    <a href='${user.html_url}' target='_blank' class='btn btn-block btn-primary mb-4 border-rounded'>View Profile</a>
                </div>
                <div class='col-md-9'>
                    <span class='badge badge-dark text-white p-3 mb-2 mr-4 border-rounded'>Public Repos: ${user.public_repos}</span>
                    <span class='badge badge-dark text-white p-3 mb-2 mr-4 border-rounded'>Public Gists: ${user.public_gists}</span>
                    <span class='badge badge-dark text-white p-3 mb-2 mr-4 border-rounded'>Followers: ${user.followers}</span>
                    <span class='badge badge-dark text-white p-3 mb-2 mr-4 border-rounded'>Following: ${user.following}</span>
                    
                    <div class='card card-body mt-4 border-rounded' id='card-grad'>
                        <div class='row'>
                            <div class='col-md-6 mb-3'>
                                <div class='card card-body border-rounded'>Company: ${user.company}</div>
                            </div>
                            <div class='col-md-6 mb-3'>
                                <div class='card card-body border-rounded'>Website/Blog: ${user.blog}</div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-md-6 mb-3'>
                                <div class='card card-body border-rounded'>Location: ${user.location}</div>
                            </div>
                            <div class='col-md-6 mb-3'>
                                <div class='card card-body border-rounded'>Member Since: ${user.created_at}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 class='card card-body page-heading mb-3 border-rounded'>Latest Repos</h1>
        <div id='repos' class='mb-3'></div>
        `;
    }



    // display the repos in ui
    showRepos(repos){
        let output='';

        repos.forEach((current)=>{
            output+=`
            <div class='card card-body mb-3 border-rounded'>
                <div class='row'>
                    <div class='col-md-6'>
                        <a href='${current.html_url}' target='_blank' class="lead btn btn-block btn-primary mb-3 border-rounded">${current.name}</a>
                    </div>
                    <div class='col-md-6 text-center'>
                        <span class='badge badge-dark p-3 mb-2 mr-3 border-rounded'>Stars: ${current.stargazers_count}</span>
                        <span class='badge badge-dark p-3 mb-2 mr-3 border-rounded'>Watchers: ${current.watchers_count}</span>
                        <span class='badge badge-dark p-3 mb-2 mr-3 border-rounded'>Forks: ${current.forks}</span>
                    </div>
                </div>
            </div>
            `;
        })

        document.getElementById('repos').innerHTML=output;
    }

    // display alert
    showAlert(msg,classes){
        // create div
        const alertDiv=document.createElement('div');
        
        // add classes
        alertDiv.className=classes;

        // add text node
        alertDiv.appendChild(document.createTextNode(msg));

        // append alert to ui using insert before
        const parent=document.querySelector('.searchContainer');
        const beforeElement=document.querySelector('.search');

        parent.insertBefore(alertDiv,beforeElement);

        // set time out
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },1500);

    }
}