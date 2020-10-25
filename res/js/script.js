$(function(){

    $(".avatar-container").click(function (){
        $(".dropdown").toggle();
    });

    loadUserInfo()
        return $.get (
            {
                url: 'https://wad20postit.docs.apiary.io/#reference/0/posts-collection/get-all-posts',
            success: function (response) {
                    return response
            },
                error: function () {
                    alert('error')
                }
            },
            displayUserInfo(user)
            /*see vb ei pea siin olema aga proovisin */
        );


    function displayUserInfo(user) {
        $('#firstname').text(user.firstname + " " + user.lastname);
        $('#email').text(user.email );
    }
});

/* mul on praxist selline variant

loadUserInfo()
    .then(function (response) {
        let user = new User(
            response.firstname,
            response.lastname,
            response.birthdate,
            response.faculty
        );

        displayUserInfo(user)
    })
    .catch(function () {
        alert('Error loading user info')
    });
*/

