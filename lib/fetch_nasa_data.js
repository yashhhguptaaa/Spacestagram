
export const fetchNasaData = async () => {

    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=2021-12-10&end_date=2021-12-21`
        );

    
    const data = await response.json();
 
    return data.map((value, idx) => {
      return {
        id: idx,
        name: value.title,
        date: value.date,
        content: value.explanation,
        imgUrl : value.url,
      }
    });
};