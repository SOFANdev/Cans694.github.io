const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () =>{
        faq.classlist.toggle("active");
    });
});