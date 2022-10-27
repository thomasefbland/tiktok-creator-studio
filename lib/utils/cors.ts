import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
export const cors = Cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: Function) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
