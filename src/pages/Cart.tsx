export const Cart = () => {


    let posts = [];

    if (localStorage.getItem("posts")) {
        posts = JSON.parse(localStorage.getItem("posts"));

    }

    const removeFilm = () => {
        localStorage.clear();
    }



    console.log(posts);


    return (
        <>
            <p>123</p>
            {posts.name}
            <button onClick={removeFilm}>delete</button>
        </>

    )

}