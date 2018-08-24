import { RequestLogger } from 'testcafe';
import { RequestMock } from 'testcafe';

const logger = RequestLogger('https://testcafe.devexpress.com/');
const mockApi = RequestMock().onRequestTo('https://testcafe.devexpress.com/').respond(null, 200);

fixture `test`
    .page('https://testcafe.devexpress.com');

test
    .requestHooks(logger)
    ('test', async t => {
     await t.expect(logger.contains(record => record.response.statusCode === 200)).ok(); 
 
        const logRecord = logger.requests[0];

        console.log(logRecord.userAgent);          
        console.log(logRecord.request.url);         
        console.log(logRecord.request.method);      
        console.log(logRecord.response.statusCode); 
});
