export const Cart = () => {

    let posts = [];

    if (localStorage.getItem("posts")) {
        posts = JSON.parse(localStorage.getItem("posts"));
    }
    const removeFilm = () => {
        localStorage.clear();
    }

    return (
        <>
            <h1>Cart</h1>
            <div className="d-block w-50">
                <p>{posts.name}</p>
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