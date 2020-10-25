$(function(){

    $(".avatar-container").click(function (){
        $(".dropdown").toggle();
    });

    $(".like-button").click(function() {
        $(this).toggleClass("liked");
    });

    loadUserInfo()
        .then(function(response) {
            let user = new User(
                response.firstname,
                response.lastname,
                response.email,
                response.avatar
            );

        displayUserInfo(user)
    })
    .catch(function () {
        alert('Error loading user info')
    });

    function displayUserInfo(user) {
        $('#name').text(user.firstname + " " + user.lastname);
        $('#email').text(user.email);
        $('#avatar').url(user.avatar);
    }

    function loadUserInfo() {
        return $.get (
            {
                url: 'https://private-anon-293f083657-wad20postit.apiary-mock.com/users/1',
                success: function (response) {
                    return response
                },
                error: function () {
                    alert('error')
                }
            }
            /*displayUserInfo(user)*/
            /*see vb ei pea siin olema aga proovisin */
        );
    }

});

/* mul on praxist selline variant */




