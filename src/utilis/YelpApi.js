const YelpKey =
  "u9IT81SefiRG5dZoGPSuZNJUt6FSgtq96m5E1S5nfx_qlNIfU71SNmYPVdlab-gzVmwDrav6J4XG1N4sznSqT99p9Umty_X2mqZBTkPsi0Uj53AVAjyBtL2c2cDIZnYx";

async function getSearch(searchTerm, location, sortBy) {
  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${YelpKey}`,
        },
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();

      const businesses = jsonResponse.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zip_code: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
        url: business.url,
      }));
      return businesses;
    } else {
      throw new Error("Request Failed.");
    }
  } catch (err) {
    console.log(err);
  }
}
export default getSearch;
