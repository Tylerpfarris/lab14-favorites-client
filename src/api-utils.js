import request from 'superagent';

const URL = 'http://localhost:3000';

export async function signUpUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password });
    
    return response.body;
}

export async function logInUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password });
    
    return response.body;
}

export async function addFavorite(cocktail, token) {
    const response = await request
        .post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(cocktail);
    
    return response.body;
}


export async function getFavorites(token) {
    const response = await request
        .get(`${URL}/api/favorites`)
        .set('Authorization', token)
    
    return response.body;
}

export async function searchCocktails(query) {
    const response = await request
        .get(`${URL}/cocktails/?search=${query}`)
        
    return response.body.drinks;
}

export async function deleteFavorite(id, token) {
    const response = await request
        .delete(`${URL}/api/favorites/${id}`)
        .set('Authorization', token)
    
    return response.body;
}