import {async, Utils} from 'platypus';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;

   host: string = 'https://api.parse.com/1/classes/Grit';
    reqHeaders: any = {
				"X-Parse-Application-Id": "TsLHqTChMOhoOf8Cy4c1FKyvA7GH2TZnql9o5ZBX",
				"X-Parse-REST-API-Key": "MLkNeIT3hMxAICq1DSmAMnOwjfHI8opRmCDBzMQB"
	};
}