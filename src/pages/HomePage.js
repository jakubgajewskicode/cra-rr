import React from 'react'
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "czym jest teoria strun",
        author: "Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"
    },
    {
        id: 2,
        title: "czym jest teoria strun",
        author: "Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"},
        {
            id: 3,
            title: "czym jest teoria strun",
            author: "Nowak",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"
        }
    
]

const HomePage = () => {

const artList = articles.map(article => (
    <Article key={article.id} {...article}/>
))

    return ( 
        <>   
       <div className="home">
        {artList}
       </div>
        </>
     );
}
 
export default HomePage;