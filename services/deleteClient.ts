const baseUrl = "https://clientpulse-dusky.vercel.app/api/v1";
// const baseUrl = "http://127.0.0.1:8001/api/v1";

const deleteClient = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/client/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default deleteClient;
