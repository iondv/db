/**
 * Created by krasilneg on 25.04.17.
 */
'use strict';

const { IonError } = require('@iondv/core');
const { w: t } = require('@iondv/i18n');

const PREFIX = 'data-source';

const codes = module.exports = {
  UNIQUENESS_VIOLATION: `${PREFIX}.uv`,
  BAD_QUERY: `${PREFIX}.bq`,
  OPER_FAILED: `${PREFIX}.of`
};

IonError.registerMessages({
  [codes.UNIQUENESS_VIOLATION]: t(`Uniqueness of key '%key' of dataset '%table' is violated`),
  [codes.BAD_QUERY]: t(`Error in query.`),
  [codes.OPER_FAILED]: t(`Operation '%oper' was not applied to '%table' dataset.`)
});