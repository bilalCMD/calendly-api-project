export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).send('hello birathor');
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
