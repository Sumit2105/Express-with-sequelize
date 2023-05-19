function requiredParam(param) {
    const requiredParamError = new Error(
      `Required parameter, ${param} is missing.`,
    );
    requiredParamError.status = 400;
    // preserve original stack trace
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(requiredParamError, requiredParam);
    }
    throw requiredParamError;
  }

  module.exports = Object.assign(
    {},
    {
      requiredParam,
    },
  );