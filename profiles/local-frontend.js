/*global module*/

const SECTION = 'insights';
const APP_ID = 'starter';
const FRONTEND_PORT = 8002;
const routes = {};

const localhost = (process.env.PLATFORM === 'linux') ? 'localhost' : 'host.docker.internal';

routes[`/beta/${SECTION}/${APP_ID}`] = { host: `https://${localhost}:${FRONTEND_PORT}` };
routes[`/${SECTION}/${APP_ID}`]      = { host: `https://${localhost}:${FRONTEND_PORT}` };
routes[`/beta/apps/${APP_ID}`]       = { host: `https://${localhost}:${FRONTEND_PORT}` };
routes[`/apps/${APP_ID}`]            = { host: `https://${localhost}:${FRONTEND_PORT}` };

module.exports = { routes };
