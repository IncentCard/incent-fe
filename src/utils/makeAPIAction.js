import { RSAA } from 'redux-api-middleware';
import { Base64 } from 'js-base64';

function makeTypes(type) {
  return [
    `${type}_REQUEST`,
    `${type}_RECEIVED`,
    `${type}_FAILURE`,
  ];
}

export default function makeAPIAction(type, options) {
  return {
    [RSAA]: {
      method: 'GET',
      types: makeTypes(type),
      headers: {
        'Authorization': 'Basic ' + Base64.encode(
          'user29801522987366:e743de98-88c8-41a9-9343-6e6c4f5729ab'
        ),
      },
      ...options,
    }
  }
}
