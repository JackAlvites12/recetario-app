

export const getResponseByCategory = async ( categoria, page = 1 ) => {

    try {

        const res = await fetch(`https://recetario-api.vercel.app/${ categoria }`)
        // ?_limit=9&_page=${ page }

        const data = await res.json()
    
        return data;

    } catch (error) {

        const errorMessage = `Error fetching data for category "${ categoria }"`;
        throw errorMessage;

    }

}
