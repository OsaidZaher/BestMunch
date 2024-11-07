const YelpKey =
  "Upr9vmrGIm4NDhZnhXKoFhqa6Cx7IMP06CIEyNoDkwA04-xb38srgHVsha3npCrd2iOKSab7Pq4ODPBHMk5m7Tl7gsdQd-VL7sf3XQ8TYUTYXDeMWAMrFUYYXq4sZ3Yx";

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
