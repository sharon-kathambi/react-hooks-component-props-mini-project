import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const article = posts.map((post) => {
        return <div key={post.id}>
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.preview}</p>
            </div>
    })
    return(
        <div>
            <main>
            {article}
            </main>
        </div>
    )
}

export default ArticleList;