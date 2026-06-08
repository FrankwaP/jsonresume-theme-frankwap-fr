function formatAddress(address, postalCode, city, region, countryCode) {
  const parts = [];

  if (typeof address === 'string' && address.trim()) {
    parts.push(address.trim());
  }

  const postalCity = [postalCode, city]
    .filter(value => typeof value === 'string' && value.trim())
    .join(' ')
    .trim();

  if (postalCity) {
    parts.push(postalCity);
  }

  if (typeof region === 'string' && region.trim()) {
    parts.push(region.trim());
  }

  if (typeof countryCode === 'string' && countryCode.trim()) {
    parts.push(countryCode.trim());
  }

  return parts.join(', ');
}

module.exports = { formatAddress };
