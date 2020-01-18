// Start the server
import { logger } from "./shared";
import app from "./Server";

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});
