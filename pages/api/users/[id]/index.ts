export default async function handler(req: any, res: any) {
  var response = {};
  switch (req.method) {
    case "GET":
      response = await getOneUserDetail(req.query.id);
      break;
  
    default:
      break;
  }
  res.status(200).json(response);
};

const getOneUserDetail = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  return data;
};
