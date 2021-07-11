import React, { useState } from 'react';
import CardDetail from './CardDetail';

const Article = () => {
    const [articles] = useState([

        {
            id: 0,
            title: "06 52 19 72 89",
            subtitle: " GDE ÉNERGIE - Entrerpise certifiée et spécialisée dans la climatisation.",
            contents: "L'été arrive, vous avez chaud ? \n \n Vous souhaitez refroidir votre habitation ? GDE ÉNERGIE est votre référence d'installation de climatisation dans Marseille et ses alentours. Nous effectuons la vente, l'installation, la mainteance et l'entretien de tous type de climatiseurs.             Située à Marseille Gde ENERGIE s'occupe pour vous offrir ses services de dépannages dans la domaine du froid.  GDE ÉNERGIE vous propose des solutions adaptée à votre environement. GDE ÉNERGIE met son savoir-faire et son professionnalisme à votre disposition.   \n \n  Pour toute demande n'hésitez pas à nous contacter. "
        }, 
        {
            id: 1,
            title: "POMPES À CHALEUR PISCINE",
            subtitle: "",
            contents: "Il est possible de multiplier  le volume d'eau par 0,175 pour estimer la puissance de la pompe à chaleur adaptée à votre piscine. \n Exemple : pour un bassin de 40m3 les fabricants recommandent une PAC de 7 kW Naturellement, ce résultat est à pondérer à la hausse ou à la baisse selon les critères suivants : \n \t - Votre département en France \n \t  - Le niveau d'ensoleillement de votre terrain \n \t - Si la piscine est couverte ou non \n \n  Quelques conseils de Raviday Piscine : II faut laisser au moins 50cm d'écart avec un mur et plus de 2 mètres avec le bassin. L'installation d'un disjoncteur différentiel est obligatoire. Pensez à hiverner votre pompe à chaleur en vidant complètement l'eau pour éviter le gel."
        },
        {
            id: 2, 
            title: "Nos marques",
            contents: "Achat, pose de climatisations industrielles, murales, mobiles, sûr Marseille Vous souhaitez procéder à l’achat d’une climatisation ? Nous nous chargeons de la pose de climatisations industrielles, murales, mobiles, vers Marseille. Choisissez le modèle qui vous convient parmi les marques Panasonic, Daikin, Mitsubishi et LG et nous l’installons de manière à refroidir une ou plusieurs pièces."
        }
    ]
    );

    
    
    const [cards] = useState([
        [
            {
                id: 0, 
                title: 'test',
                img: process.env.PUBLIC_URL + "/images/Marques/lg.png",
              
            },
            { 
                id: 1, 
                title: 'test',
                img: process.env.PUBLIC_URL + "/images/Marques/lg.png",
              
            }

        ],

        [
            {
              
            },
            {
               

            },

            {

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
                                card.article_id === article.id &&
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