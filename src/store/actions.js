import axiosClient from '../axiosClient';
    
    export  function searchMeals({commit}, keyword) {

        axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            
            commit('setSearchedMeals', data.meals)
        })

    }

    
    export  function searchMealsByLetter({commit}, letter) {

        axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            
            commit('setMealsByLetter', data.meals)
        })

    }


    
    export  function searchMealsByIngredient({commit}, i) {

        axiosClient.get(`filter.php?i=${i}`)
        .then(({data}) => {
            
            commit('setMealsByIngredient', data.meals)
        })

    }


