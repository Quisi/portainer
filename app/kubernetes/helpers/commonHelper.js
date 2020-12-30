import _ from 'lodash-es';

class KubernetesCommonHelper {
  static assignOrDeleteIfEmpty(obj, path, value) {
    if (!value || (value instanceof Array && !value.length)) {
      _.unset(obj, path);
    } else {
      _.set(obj, path, value);
    }
  }

  static ownerToLabel(owner) {
    return _.replace(owner, /[^-A-Za-z0-9_.]/g, '.');
  }

  static assignOrDeleteIfEmptyOrZero(obj, path, value) {
    if (!value || value === 0 || (value instanceof Array && !value.length)) {
      _.unset(obj, path);
    } else {
      _.set(obj, path, value);
    }
  }
}
export default KubernetesCommonHelper;
