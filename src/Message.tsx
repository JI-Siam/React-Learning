// Function based components are more popular now 
// Function Based and Class Based 


// Pascal Casing - convention more developers follow 
function Message(){ 
    // JSX : JavaScript XML
    const name = "Siam"
    if(name)
         return <h1>Hello {name}</h1>
    return <h1>Hello World!!</h1>
}


// to use the functions we need to export them first 
export default Message ; 