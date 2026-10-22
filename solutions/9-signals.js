import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = (emails) => {
  const domains = emails.map((email) => email.split('@')[1]);

  return domains
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      acc[domain] = get(acc, domain, 0) + 1;
      return acc;
    }, {});
};

export default getFreeDomainsCount;

