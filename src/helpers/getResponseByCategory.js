

export const getResponseByCategory = async ( categoria ) => {

    try {

        const res = await fetch(`http://localhost:3000/${ categoria }`)
        // ?_limit=9&_page=${ page }
        
        const data = await res.json()
    
        return data;

    } catch (error) {

    
        const errorMessage = `Error fetching data for category "${ categoria }"`;
        throw errorMessage;

    }

}
