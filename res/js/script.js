let profiles = [];

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

    loadPosts()
        .then(function(response) {
            let post = new Post(
                response.id,
                response.author.firstname,
                response.author.lastname,
                response.author.avatar,
                response.createtime,
                response.text,
                response.media.type,
                response.media.url,
                response.likes
            );
            displayPosts(post)
        })
        .catch(function () {
            alert('Error loading post info')
        });


    loadProfilesInfo()
        .then(function (response){
            for (let profile of response){
                profiles.push (new Profile
                (profile.firstname, profile.lastname, profile.avatar));
            }
            displayProfilesInfo()
        })
        .catch(function(){
            alert('Error loading profiles info')
        });


    function displayUserInfo(user) {
        $('#name').text(user.firstname + " " + user.lastname);
        $('#email').text(user.email);
        $('#avatar').attr('src', user.avatar);
    }

    function displayPosts(post) {
        $('#post_author_photo').attr('src',post.avatar);
        $('#name').text(post.name);
        $('#createTime').text(post.createtime);
        //$('#post_photo').attr('src',post.)
        $('.post-title').text(post.text);
        $('.like-button').text(post.likes);
    }

    function displayProfilesInfo(profile) {
        $('#nameProfile').text(user.firstname + " " + user.lastname);
        $('#avatarProfile').attr('src', user.avatar);
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
        );
    }

    function loadPosts() {
        return $.get (
            {
                url: 'https://private-anon-293f083657-wad20postit.apiary-mock.com/posts',
                success: function(response) {
                    return response
                },
                error: function() {
                    alert('error')
                }
            }
        );
    }

    function loadProfilesInfo() {
        return $.get (
            {
                url: 'https://wad20postit.docs.apiary.io/#reference/0/profiles-collection',
                success: function (response) {
                    return response
                },
                error: function () {
                    alert('error loading profiles info')
                }
            }
        );
    }

});



