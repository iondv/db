/**
 * Created by krasilneg on 25.04.17.
 */
'use strict';

const { IonError } = require('@iondv/core');

const PREFIX = 'data-source';

const errors = module.exports = {
  UNIQUENESS_VIOLATION: `${PREFIX}.uv`,
  BAD_QUERY: `${PREFIX}.bq`,
  OPER_FAILED: `${PREFIX}.of`
};

IonError.registerMessages(errors);