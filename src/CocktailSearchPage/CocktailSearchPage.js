import React, { Component } from 'react'
import { addFavorite, getFavorites, searchCocktails } from '../api-utils';
import style from './CocktailSearchPage.module.css'
// import stubData from '../stubData';

export default class CocktailSearchPage extends Component {
    state = {
        cocktails: [],
        favorites: [],
        search: '',
    }

    componentDidMount = async () => {
        if (this.props.token) await this.mountFavorites();
    }

    mountFavorites = async () => {
        const favorites = await getFavorites(this.props.user.token)

        this.setState({ favorites });
    }

    handleSearch = e => this.setState({ search: e.target.value });

    mountSearch = async () => {
        const cocktails = await searchCocktails(this.state.search);

        this.setState({ cocktails });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await this.mountSearch();
    }

    handleFavoritesClick = async (dbCocktail) => {
        console.log(dbCocktail);
        await addFavorite({
            name: dbCocktail.strDrink,
            glass: dbCocktail.strGlass,
            image: dbCocktail.strDrinkThumb,
            drink_id: dbCocktail.idDrink,
        }, this.props.user.token);
        
        await this.mountFavorites();
    }
    
 

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.search} onChange={this.handleSearch} />
                    <button>Search for Cocktails</button>
                </form>
                <div className={style.cocktails}>
                    {this.state.cocktails.map((cocktail) => 
                            <div className={style.cocktail} onClick={() => this.handleFavoritesClick(cocktail)} key={`${cocktail.strDrink}-${cocktail.idDrink}`}>
                                <h3>{cocktail.strDrink}</h3>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            </div>
                    )}
                    
                </div>
            </div>
        )
    }
}
// 