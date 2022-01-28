// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



import { Sequelize } from "sequelize";


const sequalize = new Sequelize('postgres://postgres:1234@localhost:5432/test');

export default async function handler(req, res) {
  try {
    await sequalize.authenticate();
    return res.status(200).json({
      message: "Success"
    });
  }
  catch(ex) {
    console.log(ex);
    return res.status(500).json({
      message: "failed"
    });
  }
}
