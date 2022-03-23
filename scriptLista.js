const URL = "http://168.194.207.98:8081/tp/lista.php?action=BUSCAR"

fetch(URL, {
    //Opcional
    method: "POST",
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
    },
    body:JSON.stringify({ a:10, b:'Texto'})
})