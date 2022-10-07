import type { NextApiRequest, NextApiResponse } from 'next';

const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const __toString = Object.prototype.toString;
const encode = (val: any) => { return encodeURIComponent(val) }
const isDate = (val: any) => { return __toString.call(val) === '[object Date]' || val instanceof Date }
const serialize = (name: string, val: any, options: any) => {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString()
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority

    switch (priority) {
      case 'low':
        str += '; Priority=Low'
        break
      case 'medium':
        str += '; Priority=Medium'
        break
      case 'high':
        str += '; Priority=High'
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const csrfState = Math.random().toString(36).substring(2);

  res.setHeader('Set-Cookie', serialize('csrfState', csrfState, { maxAge: 6000 }));

  let url = 'https://www.tiktok.com/auth/authorize/';
  url += '?client_key=awnchltazls6245t';
  url += '&scope=user.info.basic';
  url += '&response_type=code';
  const redirectURI = encode('http://localhost:3000/');
  url += `&redirect_uri=${redirectURI}`;
  url += '&state=' + csrfState;

  try {
    res.redirect(307, url);
  } catch (error) {
    res.status(500).send({message: error})
  }

  // res.status(200).json({ name: 'John Doe' })
}
