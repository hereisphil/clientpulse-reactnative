const fetchAllClients = async () => {
  try {
    const response = await fetch(
      "https://clientpulse-dusky.vercel.app/api/v1/client"
    );
    if (response.ok) {
      const body = await response.json();
      return body.clients;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllClients;
