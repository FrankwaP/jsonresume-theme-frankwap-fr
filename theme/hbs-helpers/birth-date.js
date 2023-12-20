const moment = require('moment');
const { SafeString } = require('handlebars');

const birthDate = (birth) => {
  const out = [];
  if (birth && Object.keys(birth).length) {

    if (birth.date) {
      moment.locale('fr');
      const date = moment(birth.date, ['YYYY-MM-DD']).format('LL');
      //
      let pref
      if (birth.gender == "F") {
        pref = "Née le "
      } else {
        pref = "Né le "
      }
      //
      let suff
      if (birth.place) {
        suff = ` à ${birth.place}`;
      } else {
        suff = "";
      }
      //
      return `<div>${pref}${date}${suff}</div>`
    }
  }
};

module.exports = { birthDate };
