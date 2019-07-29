import * as express from 'express';
import * as bodyParser from 'body-parser';

const server = express();

server.set('port', process.env.PORT || 9000);

server.use(bodyParser.urlencoded({ extended: false, type: 'application/x-www-form-urlencoded' }));

const port = server.get('port');
const env = server.get('env');

server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port} in ${env} mode`);
});
