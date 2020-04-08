import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // endpoint to get a filtered image
  app.get("/filteredimage", async (req: Request, res: Response) => {
    
    const image_url = req.query.image_url;

    if (!image_url) {
      res.status(400).send("Invalid req! image_url is missing in query params.");
    }
    
    const filteredPath = await filterImageFromURL(image_url);
    res.sendFile(filteredPath, async (error) => {
      await deleteLocalFiles([filteredPath]);
      if (!error) {
        res.status(200);
      }
      else {
        res.status(422).send(" Error encountered while returning filteredPath of the image.");
      }
    });

  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();