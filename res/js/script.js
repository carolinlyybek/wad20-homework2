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
            for (i in response) {
                let post = new Post(
                    i.author,
                    i.createTime,
                    i.media,
                    i.likes
                );
                displayPosts(post)
            }
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
        $('span img').attr('src',post.avatar);
        $('span small').text(post.name);
        $('small').text(post.createtime);
        $('.post-image img').attr(post.type,post.url);
        $('.post-title h3').text(post.text);
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



