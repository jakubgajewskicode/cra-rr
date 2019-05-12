import React from 'react'
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "How to train on your roadbike",
        author: "Gajewski",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"
    },
    {
        id: 2,
        title: "Where would you like to go for a adventure",
        author: "Gajewski",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"},
        {
            id: 3,
            title: "Flat white or Latte",
            author: "Gajewski",
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