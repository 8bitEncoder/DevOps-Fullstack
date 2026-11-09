const http = require('http');
const { Client } = require('pg');

const server = http.createServer(async (req, res) => {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    const result = await client.query('SELECT NOW()');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello from Node ${process.version}! DB Time: ${result.rows[0].now}\n`);
  } catch (err) {
    res.writeHead(500);
    res.end('Database error: ' + err.message);
  } finally {
    await client.end();
  }
});

server.listen(5020, () => {
  console.log('Web server running on port 5020');
});
