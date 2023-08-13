export default async function handler(req: any, res: any) {
  var response: {} = {};
  switch (req.method) {
    case "GET":
      response = await getUsersInfoFromApi();
      break;

    default:
      break;
  }
  res.status(200).json(response);
}

export const getUsersInfoFromApi = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
  } catch (error) {
    console.log(error)
  }
};
