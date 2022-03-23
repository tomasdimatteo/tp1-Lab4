let btnSend;

async function login(){
    let user, password;
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    if((user === "" || user == null) && (password === "" || password == null)){
        alert("Complete los campos.")
    }else{
        const URL = "http://168.194.207.98:8081/tp/login.php" + "?user=" + user + "&pass=" + password;
        fetch(URL, {
            //Opcional
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ a:10, b:'Texto'})
        })
        .then((response) => response.json())
        .then((data) =>{
            if(data.respuesta === "OK"){
                document.location.href = "./lista.html"
            }else{
                alert(data.mje)
            }
        })
    }
}

btnSend = document.getElementById("btnSend")
btnSend.addEventListener("click", () => {
    login()
    document.getElementById("formulario").reset()
})

