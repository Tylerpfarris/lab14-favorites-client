import React, { Component } from 'react'

import { getFavorites, deleteFavorite } from '../api-utils'
import style from '../CocktailSearchPage/CocktailSearchPage.module.css'

export default class FavoritesListPage extends Component {
    state = {
        favorites: [],
    }

    componentDidMount = async () => {
        const favorites = await getFavorites(this.props.token);

        this.setState({ favorites });
    }

    handleDeleteFavorite = async (id) => {
        await deleteFavorite(id, this.props.token);
        
        const favorites = await getFavorites(this.props.token)

        this.setState({ favorites });


    }
    render() {
        console.log(this.props.token, 'token')
        return (
        <>
         <h3>Your Favorite Tipples</h3>
            <div className={style.cocktails}>
                
                {this.state.favorites.map(fave =>
                     <div className={style.cocktail} onClick={() => this.handleDeleteFavorite(fave.id)} key={`${fave.name}-${fave.drink_id}`}>
                        <h3>{fave.name}</h3>
                        <img src={fave.image} alt={fave.name} />
                        
                    </div>)}
                    
                </div>
        </>        
        )
    }
}
// 