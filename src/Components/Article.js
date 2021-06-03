import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CardDetail from './CardDetail';

const Article = () => {
    const [articles, setArticles] = useState([

        {
            id: 0,
            title: "Exercitation Lorem adipisicing ",
            subtitle: "Consectetur",
            contents: "Eiusmod tempor enim culpa aute cillum labore fugiat qui laborum deserunt Fugiat exercitation sint ipsum reprehenderit.Mollit sit culpa amet enim consectetur reprehenderit.Aliquip eiusmod culpa irure culpa anim et irure et non ad"
        },
        {
            id: 1,
            title: "Exercitation Lorem qs ",
            subtitle: "Consectetur",
            contents: "Eiusmod tempor enim culpa aute cillum labore fugiat qui laborum deserunt Fugiat exercitation sint ipsum reprehenderit.Mollit sit culpa amet enim consectetur reprehenderit.Aliquip eiusmod culpa irure culpa anim et irure et non ad"
        },
        {
            id: 2,
            title: "Exercitation Lorem fe ",
            subtitle: "Consectetur",
            contents: "Deserunt ad commodo consequat et nisi occaecat veniam magna et sint culpa voluptate esse nulla.Magna incididunt cupidatat do consequat aliquip magna reprehenderit.Anim aliquip ullamco ipsum qui quis exercitation reprehenderit ut est aliquip irure occaecat irure.Incididunt cupidatat velit quis esse fugiat nostrud ex est tempor duis irure est.Nostrud ea nulla excepteur occaecat ad aliquip incididunt officia ad.Dolore reprehenderit eiusmod voluptate anim nisi dolor laboris.Incididunt excepteur ea velit esse nisi voluptate ea occaecat Lorem dolore laboris adipisicing.Exercitation tempor proident veniam non incididunt ipsum.Cillum ex laboris eiusmod eu ipsum fugiat quis.Ullamco consequat consequat labore sunt enim sunt sunt laboris proident.Pariatur do et velit labore do.Velit occaecat ipsum nisi ea enim sunt mollit nulla mollit do excepteur amet amet.Duis voluptate non anim qui culpa labore enim pariatur ut sit occaecat laborum voluptate nulla.Nostrud voluptate eu elit anim non.Ex laboris velit labore amet ad aute cillum do esse eiusmod proident.In nisi commodo exercitation consequat.Ex fugiat fugiat qui est ex magna anim dolore.Eiusmod tempor enim culpa aute cillum labore fugiat qui laborum deserunt Fugiat exercitation sint ipsum reprehenderit.Mollit sit culpa amet enim consectetur reprehenderit.Aliquip eiusmod culpa irure culpa anim et irure et non ad"
        },
    ]
    );

    const [cards, setImages] = useState([
        [
            {
                id: 0,
                img: 'https://dummyimage.com/300x200/000/fff',
                title: 'Test 0',
                text: "Occaecat est ex labore et excepteur et quis elit ex do excepteur adipisicing..",
                article_id: 0
            },
            {
                id: 1,
                img: 'https://dummyimage.com/300x200/000/fff',
                title: 'Test 1',
                text: "Voluptate proident adipisicing pariatur cupidatat et ut ullamco magna ea nisi mollit ullamco qui..",
                article_id: 0
            }

        ],

        [
            {
                id: 2,
                img: 'https://dummyimage.com/300x200/000/fff',
                title: 'Test 2',
                text: "Esse proident nisi irure et anim eiusmod non aute Lorem in esse ipsum sunt.",
                article_id: 1
            },
            {
                id: 3,
                img: 'https://dummyimage.com/300x200/000/fff',
                title: 'Id duis',
                text: "Cupidatat deserunt qui non sunt nisi commodo minim reprehenderit.",
                article_id: 1

            },

            {
                id: 4,
                img: 'https://dummyimage.com/300x200/000/fff',
                title: 'Test 4',
                text: "Minim consequat ex pariatur elit et duis consectetur magna cupidatat et adipisicing.",
                article_id: 1

            }

        ]
    ]

    )

    return (
        <div className="articles">
            {articles.map((article) => (

                <div key={article.id} className="article"  >
                    <div className="article_title">
                        <h2 > {article.title}</h2>
                    </div>
                    <div className="article_contents">
                        <h3> {article.subtitle} </h3>
                        <p> {article.contents}</p>
                    </div>
                    <div className="cards_article">
                        {cards.map((item) => (
                            item.map((card) => (
                                card.article_id == article.id &&
                                <CardDetail card={card} key={card.id} />

                            ))
                        ))}
                    </div>

                </div>
            ))}


        </div>
    );
};

export default Article;