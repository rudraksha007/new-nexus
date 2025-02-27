export async function getNearby(latitude:number, longitude:number, radius:number, query:string) {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius*1000}&type=doctor&keyword=${query}&key=${apiKey}`;
        const response = await fetch(url);
        const json = await response.json();        
        return json;
    }
    catch (error) {
        console.error("Error getting doctors: ", error);
        return null;
    }
}