var user = [{
        id: 'User-1',
        name: 'Nguyen Doan Ngoc Hau',
        email: 'ngochau@gmail.com',
        pass: 'hktqueen',
        role: 'admin'
    }, , {
        id: 'User-2',
        name: 'Trinh Thi Thuc Trung',
        email: 'thuctrung@gmail.com',
        pass: 'hktqueen',
        role: 'admin'
    }, , {
        id: 'User-3',
        name: 'Ho Thi Nhu Quynh',
        email: 'nhuquynh@gmail.com',
        pass: 'hktqueen',
        role: 'admin'
    },
    {
        id: 'User-4',
        name: 'Nguyen Dinh Kha',
        email: 'ndkha.2k1@gmail.com',
        pass: 'hktqueen',
        role: 'admin'
    },
    {
        id: 'User-5',
        name: 'Thu Dieu',
        email: 'thudieu@gmail.com',
        pass: 'thudieu',
        role: 'user'
    },
];

function saveUser() {
    localStorage.setItem('listUser', JSON.stringify(user));
}

function loadUser() {
    user = JSON.parse(localStorage.getItem('listUser'));
}

if (localStorage.getItem('listUser') != null) {
    loadUser();
}

function account() {

}

// HOME ============================================================================================================================================//



function afterSignIn() {
    console.log(checkLogIn)
    if (checkLogIn) {
        document.querySelector(".user-management").style.display = "block";
        $(".signIn").appendTo("#user-management")

        // var pvidu1;
        // $(".signIn").click(function() {
        //     if (pvidu1) {
        //         pvidu1.appendTo("#container1");
        //         pvidu1 = null;
        //     } else {
        //         pvidu1 = $("#container1 p").detach();
        //     }
        // });
    }

}





// function signUp() {
//     if
// }