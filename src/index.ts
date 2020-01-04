import "./lib/env";
import server from "./api/server";

const port = process.env.PORT;

server.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`)
);
