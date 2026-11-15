export const PHONE_NUMBER = "919958810865";
export const DISPLAY_PHONE = "+91 99588 10865";

export const openWhatsApp = (data = {}) => {
  let message = "";

  if (data.name) {
    message = `Hello Nexora Builders and Interior!\n\nI want to inquire about your services:\n- Name: ${data.name}\n- Phone: ${data.phone}\n- City: ${data.city}\n- Service Required: ${data.service}${data.package ? `\n- Package: ${data.package}` : ''}`;
  } else if (data.serviceName) {
    message = `Hello Nexora Builders and Interior! I am interested in getting a quote/site visit for: ${data.serviceName}.`;
  } else if (data.package) {
    message = `Hello Nexora Builders and Interior! I would like to book a Free Site Visit for the ${data.package} package.`;
  } else {
    message = `Hello Nexora Builders and Interior! I would like to book a Free Site Visit and consultation for my project.`;
  }

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
