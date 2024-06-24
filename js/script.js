//API https://jsonplaceholder.typicode.com/users


document.addEventListener('DOMContentLoaded', () => {
    const usersList = document.getElementById('listaUsuarios');
    
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al llamar información');
        }
        return response.json();
    })
    .then(users => {
        users.forEach(user => {
            const {
                id,
                name,
                username,
                email,
                phone,
                address: {street, suite, city},
                company:{name: companyName}
            } = user;
            const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
            
            const li = document.createElement('li');
    
            li.innerHTML = `
            <img src= "assets/img/${id}.jpeg" alt="${name}">
            Name: ${name}<br>
            Age: ${age}<br>
            Username: ${username}<br>
            Email: ${email}<br>
            Phone: ${phone}<br>
            Company: ${companyName}<br>    
            Address: ${street}, ${suite}, ${city}
            `;
            usersList.appendChild(li)
        });
    })
    .catch(error => console.error('Error fetching users', error))
});




