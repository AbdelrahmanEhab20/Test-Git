      function validate() {

            var username = document.getElementById("userName").value;
            var password = document.getElementById("password").value;

            if (username == "admin" && password == 12345678) {
                console.log('done');
                alert("Done");
                console.log('done444');
                location.href = "window.html";
            } else {
                alert("Login Failed");
            }

        }