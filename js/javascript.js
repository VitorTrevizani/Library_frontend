

// const res = await fetch("http://localhost:3000/user/login", {
//     method: 'post',
//     headers:{
//         'content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         email: "vitao@email.com",
//         password: "APItest"
//     })
// })
// if(res.status == 200){
//     const data = await res.json()
//     localStorage.setItem("jwt", data);
// }else{
//     console.log(await res.json())
// }


// const token =  localStorage.getItem("jwt");

// const resp = await fetch("http://localhost:3000/user/loans", {
//     method: 'post',
//     headers:{
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}` // aqui vai o JWT

//     }
// })
// if(resp.status == 200){
//     console.log(await resp.json())
// }else{
//     console.log(await resp.json())
// }
