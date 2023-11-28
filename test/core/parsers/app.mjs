const logger = {
  debug: function () {},
  verbose: function () {},
  info: function () {},
  warn: function () {},
  error: function () {},
};

const app = {
  options: {}, // see defaults
  log: logger,
  generator: {},
  packageInfos: {},
  markdownParser: false,
  filters: {
    apierror: './filters/api_error.js',
    apiheader: './filters/api_header.js',
    apiparam: './filters/api_param.js',
    apisuccess: './filters/api_success.js',
  },
  languages: {
    '.clj': './languages/clj.js',
    '.coffee': './languages/coffee.js',
    '.erl': './languages/erl.js',
    '.ex': './languages/ex.js',
    '.exs': './languages/ex.js',
    '.litcoffee': './languages/coffee.js',
    '.lua': './languages/lua.js',
    '.pl': './languages/pm.js',
    '.pm': './languages/pm.js',
    '.py': './languages/py.js',
    '.rb': './languages/rb.js',
    default: './languages/default.js',
  },
  parsers: {
    api: './parsers/api.js',
    apibody: './parsers/api_body.js',
    apiquery: './parsers/api_query.js',
    apidefine: './parsers/api_define.js',
    apidescription: './parsers/api_description.js',
    apierror: './parsers/api_error.js',
    apierrorexample: './parsers/api_error_example.js',
    apiexample: './parsers/api_example.js',
    apiheader: './parsers/api_header.js',
    apiheaderexample: './parsers/api_header_example.js',
    apigroup: './parsers/api_group.js',
    apiname: './parsers/api_name.js',
    apiparam: './parsers/api_param.js',
    apiparamexample: './parsers/api_param_example.js',
    apipermission: './parsers/api_permission.js',
    apisuccess: './parsers/api_success.js',
    apisuccessexample: './parsers/api_success_example.js',
    apiuse: './parsers/api_use.js',
    apiversion: './parsers/api_version.js',
    apisamplerequest: './parsers/api_sample_request.js',
    apideprecated: './parsers/api_deprecated.js',
    apiprivate: './parsers/api_private.js',
    apitag: './parsers/api_tag.js',
  },
  workers: {
    apierrorstructure: './workers/api_error_structure.js',
    apierrortitle: './workers/api_error_title.js',
    apigroup: './workers/api_group.js',
    apiheaderstructure: './workers/api_header_structure.js',
    apiheadertitle: './workers/api_header_title.js',
    apiname: './workers/api_name.js',
    apiparamtitle: './workers/api_param_title.js',
    apipermission: './workers/api_permission.js',
    apisamplerequest: './workers/api_sample_request.js',
    apistructure: './workers/api_structure.js',
    apisuccessstructure: './workers/api_success_structure.js',
    apisuccesstitle: './workers/api_success_title.js',
    apiuse: './workers/api_use.js',
    apitag: './workers/api_tag.js'
  },
  hooks: {}
};

export {
  logger,
  app
};
