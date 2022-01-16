
export const fetchNasaData = async (page = 1, limit = 9) => {
    let initialDate = limit * (page - 1) + 1;
    const finalDate = limit * page;
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=2021-12-${initialDate}&end_date=2021-12-${finalDate}`
        );

    
    let data = await response.json();
    console.log({data})
   
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