export default async function handler(req: any, res: any) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    const filteredData = data.map((item: any) => item.id);
    res.status(200).json(filteredData);
  } catch (error) {
    console.log(error);
  }
}
