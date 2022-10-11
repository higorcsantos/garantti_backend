import app from "./app";
import {AppDataSource} from './db';

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(8000);
    console.log("Server on port", 8000);
  } catch (error) {
    console.error(error);
  }
}

main();