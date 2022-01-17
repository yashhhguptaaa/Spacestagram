
export const fetchNasaData = async (page = 1, limit = 2) => {
    let initialDate = limit * (page - 1) + 1;
    const finalDate = limit * page;
    const api_key = process.env.NEXT_PUBLIC_NASA_API_KEY

    
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=2021-12-${initialDate}&end_date=2021-12-${finalDate}`
        );
 
    
    let data = await response.json();
    
   
    return data.map((value, idx) => {

      return {
        name: value.title,
        date: value.date,
        content: value.explanation,
        imgUrl : value.url,
      }
    });
};