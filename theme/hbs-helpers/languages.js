const fluencyDiv = (fluencyText) => {
    let fluencyCode = fluencyText.split(":")[0];
    return `<div class="level fluency${fluencyCode}">
              <em>${fluencyText}</em>
              <div class="bar"></div>
            </div>`
};

module.exports = { fluencyDiv };