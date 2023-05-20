const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
]


let wrapper = document.getElementById('mainWrap');

dataAraay.forEach( (i)=>{
    // console.log(i.userAddresses);
    

    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'divWrapper');

    // ID number for top right corner
    let textElement = document.createElement('p');
    textElement.innerText = i.userId;
    textElement.setAttribute('class', 'top-right-corner-element');
    divElement.appendChild(textElement);

    // IMG URL for Image element
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', i.userImage)
    imgElement.setAttribute('class', 'image-item');
    divElement.appendChild(imgElement);

    // Name
    let nameElement = document.createElement('p');
    nameElement.innerText = i.userName;
    nameElement.setAttribute('class', 'nametag');
    divElement.appendChild(nameElement);

    // lastname
    let lastNameElement = document.createElement('p');
    lastNameElement.innerText = i.userLastName;
    lastNameElement.setAttribute('class', 'last-name');
    divElement.appendChild(lastNameElement);

    // age element
    let ageElement = document.createElement('p');
    ageElement.innerText = i.userAge + ": years old";
    ageElement.setAttribute('class', 'age');
    divElement.appendChild(ageElement);

    // adress
    let adress = document.createElement("div");
    adress.setAttribute('class','adress');
    divElement.appendChild(adress)

    i.userAddresses.forEach((c) =>{
        let user = document.createElement('p');
        user.setAttribute('class', 'user');
        user.innerText = c;
        adress.appendChild(user);
    })

    wrapper.appendChild(divElement);

    divElement.addEventListener('click',function(){
        divElement.classList.toggle('active')
    })
} )