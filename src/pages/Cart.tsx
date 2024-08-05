export const Cart = () => {

    let posts = JSON.parse(localStorage.getItem("postsFavorites"));

    if (localStorage.getItem("posts")) {
        posts = JSON.parse(localStorage.getItem("postsFavorites"));
    }
    const removeFilm = () => {
        localStorage.clear();
    }

    return (
        <>
            <h1>Cart</h1>
            <div className="d-block w-50">
                <p>{posts[0]}</p>
                <p>{posts[1]}</p>
                <p>{posts[2]}</p>
                <p>{posts[3]}</p>
                <p>{posts[4]}</p>
                <p>{posts.alternativeName}</p>
                <p>{posts.description}</p>
                <p>{posts.year}</p>
                <p>{posts.type}</p>
                <img src={posts.poster?.url} className='w-50' />
                <img src={posts.image} alt="" width={300} />
                <div className="lead">{posts.text}</div>
                <button onClick={removeFilm}>delete</button>
            </div>
        </>
    )

}