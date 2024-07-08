export const Cart = () => {


    let posts = [];

    if (localStorage.getItem("posts")) {
        posts = JSON.parse(localStorage.getItem("posts"));
        
    }



console.log(posts);


    return (
        <>
        <p>123</p>
        {posts.name}
        </>
        
    )

}