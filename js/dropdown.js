$(document).ready(function () {
    document.querySelectorAll(".option-placeholder").forEach(op => {
        op.setAttribute("selected", "");
        op.setAttribute("disabled", "");
        op.setAttribute("hidden", "");
    });

    document.querySelectorAll(".form-select-container").forEach(sc => {
        let select_html = sc.querySelector("select");

        let select = document.createElement("div");
        select.classList.add("form-select-cus");

        let option_wrapper = document.createElement("div");
        option_wrapper.classList.add("form-option-wrapper");

        let option_placeholder = document.createElement("div");
        option_placeholder.classList.add("form-option-placeholder");
        option_placeholder.textContent = sc.querySelector(".option-placeholder").textContent;
        option_placeholder.setAttribute("data-default", sc.querySelector(".option-placeholder").textContent);

        let option_placeholder_container = document.createElement("div");
        option_placeholder_container.classList.add("form-option-placeholder-container");
        option_placeholder_container.appendChild(option_placeholder);
        option_wrapper.appendChild(option_placeholder_container);

        let option_container = document.createElement("div");
        option_container.classList.add("form-option-container");

        Array.from(select_html.children)
            .filter(o => { return !o.classList.contains("option-placeholder") })
            .forEach(o => {
                let option = document.createElement("div");
                option.classList.add("form-option");
                option.textContent = o.textContent;
                option_container.appendChild(option);
            });

        option_wrapper.appendChild(option_container);

        let select_option_placeholder = option_placeholder.cloneNode(true);

        select.appendChild(select_option_placeholder);
        select.appendChild(option_wrapper);
        sc.appendChild(select);
    });

    document.querySelectorAll(".form-select-container > .form-select-cus > .form-option-placeholder").forEach(f_o_p => {
        f_o_p.addEventListener("click", openOptionList);
        f_o_p.addEventListener("blur", closeOptionList, true);
        f_o_p.closest(".form-select-cus").querySelector(".form-option-wrapper").querySelectorAll(".form-option-placeholder-container > .form-option-placeholder, .form-option-container > .form-option").forEach(f_o => f_o.addEventListener("click", closeOptionList));
    });

    function openOptionList(e) {
        let form_select_container = e.currentTarget.closest(".form-select-container");

        // Kiểm tra nếu form-select-container có class 'disabled'
        if (form_select_container.classList.contains('disabled')) {
            return;
        }

        // Kiểm tra không gian phía dưới và điều chỉnh hướng dropdown
        let rect = form_select_container.getBoundingClientRect();
        let spaceBelow = window.innerHeight - rect.bottom;
        let dropdownHeight = form_select_container.querySelector(".form-option-wrapper").scrollHeight;

        if (spaceBelow < dropdownHeight) {
            form_select_container.classList.add("open-upwards");
        } else {
            form_select_container.classList.remove("open-upwards");
        }
        if (form_select_container.classList.contains('active')) {
            form_select_container.classList.remove("active");
        } else {
            form_select_container.classList.add("active");
        }

        let form_option_container = e.currentTarget.closest(".form-select-cus").querySelector(".form-option-wrapper > .form-option-container");
        form_option_container.style.height = "calc(" + form_option_container.scrollHeight + "px)";
    }

    function closeOptionList(e) {
        let form_select_container = e.currentTarget.closest(".form-select-container");
        form_select_container.classList.remove("active");

        let form_option_container = e.currentTarget.closest(".form-select-cus").querySelector(".form-option-wrapper > .form-option-container");
        form_option_container.style.height = 0;
    }

    document.querySelectorAll(".form-select-container > .form-select-cus > .form-option-wrapper").forEach(f_o_w => {
        let form_options = f_o_w.querySelectorAll(".form-option-placeholder-container > .form-option-placeholder, .form-option-container > .form-option");

        form_options.forEach(option => {
            option.addEventListener("click", (e) => updateOption(e, form_options));
        });
    });

    function updateOption(e, options) {
        let form_option_placeholder = e.currentTarget.closest(".form-select-cus").querySelector(".form-option-placeholder");
        form_option_placeholder.textContent = e.currentTarget.textContent;

        let select_html = e.currentTarget.closest(".form-select-container").querySelector("select");

        if (e.currentTarget.classList.contains("form-option-placeholder")) {
            select_html.selectedIndex = 0;
            options.forEach(o => o.classList.remove("active"));
        } else if (e.currentTarget.classList.contains("form-option")) {
            select_html.selectedIndex = Array.prototype.indexOf.call(options, e.currentTarget);

            options.forEach(o => o.classList.remove("active"));
            e.currentTarget.classList.add("active");
        }

        if (select_html.classList.contains('link')) {
            console.log('aaa');
        }

        console.log("Selected Option Value:", select_html.value);

        let hasInput = e.currentTarget.closest('.has-input');
        if (hasInput && select_html.value == hasInput.getAttribute('data-require')) {
            hasInput.style.display = 'none';

            let nextElement = hasInput.nextElementSibling;
            if (nextElement) {
                nextElement.style.display = 'block';
            }
        }

        if (select_html.value.startsWith("http://") || select_html.value.startsWith("https://")) {
            let url = select_html.value;
            window.open(url, "_blank");
        }
    }


    document.addEventListener("click", function (e) {
        document.querySelectorAll(".form-select-container").forEach(f_s_c => {
            if (f_s_c.classList.contains("active") && !f_s_c.contains(e.target)) {
                f_s_c.classList.remove("active");
                f_s_c.querySelector(".form-option-container").style.height = 0;
            }
        });
    });
});
