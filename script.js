const faq_title = $(".faq-items_title");
const faq_content = $(".faq-items_content");

faq_title.click(() => {
  const this_title = $(this);
  const this_content = $(this).parent().find(faq_content);
  this_content.slideToggle("fast");
  faq_content.not(this_content).slideUp("fast");
});
