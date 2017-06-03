System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var host, apiConfig;
    return {
        setters:[],
        execute: function() {
            // Host Configuration
            host = 'http://localhost:3100/';
            exports_1("apiConfig", apiConfig = {
                apiServer: {
                    cmsUrl: host + 'cms',
                    cmsfinelistUrl: host + 'cmsfinelist',
                    cmscorrectfinelistUrl: host + 'cmscorrectfinelist',
                    savecmsUrl: host + 'savecms',
                    savefiledataUrl: host + 'savefiledata'
                },
                contentTypeJson: {
                    'Content-Type': 'application/json'
                },
                errors: {
                    dataSaved: 'data-saved-to-db',
                    dataNotSaved: 'data-not-saved-to-db',
                    fileUpload: 'file-uploaded',
                    fileNotUploaded: 'file-not-uploaded',
                    dbConnectError: 'unable-to-connect-to-db',
                    dataFetchedFromdb: 'data-fetched-from-db',
                    dataFetchFromdbError: 'unable-to-get-data-from-db',
                    serverStarted: 'server-started'
                }
            });
        }
    }
});
//# sourceMappingURL=app.config.js.map