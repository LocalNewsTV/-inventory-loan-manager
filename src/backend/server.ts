/**
 * @summary Server listener Application Express API
 * @author LocalNewsTV
 */
import app from './express';


const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`[server]: Server started on port ${port}`);
});
