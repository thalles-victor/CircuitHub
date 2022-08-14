import Express from 'express';
import type { Request, Response } from 'express'
import { router } from './Routes/routers'

const app = Express();

app.use(Express.json());
app.use(router);

app.get("/", (request: Request, response: Response) => {
  return response.status(201).send("created");
})

const PORT = 3333;
const HostIP ="localhost" // or You local IP. Exp: "192.168.0.103"
app.listen(PORT, HostIP, () => {
  console.log(`Server is running at http://${HostIP}:${PORT}`);
});

export { app };