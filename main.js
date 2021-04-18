

// <!-- Fetch data  -->
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(data=> showUserData(data))

// <!-- Fetching data and loop throw  -->
function showUserData(data){
    let list = '';
    data.forEach( user =>{
        // <!-- data   -->
        list = list + `
            <div class="users">
                <h2>${user.name}</h2>
                <p>${user.email}</p>
                <p>${user.company.name}</p>
            </div>`
    })
    const userCcontainer = document.getElementById('user-container');
    userCcontainer.innerHTML = list;

    console.log(data)
}




