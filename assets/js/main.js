// counter up animation logic //
const counters = document.querySelectorAll(".countup");
let started = false;

const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;

            counters.forEach((el) => {
                const endVal = Number(el.getAttribute("data-count"));

                const counter = new countUp.CountUp(el, endVal, {
                    duration: 1.6,
                    separator: ",",
                    enableScrollSpy: false
                });

                if (!counter.error) counter.start();
            });
        }
    });
}, { threshold: 0.4 });

obs.observe(document.querySelector("#features"));



// PRICING PLAN TOGGLE //

const toggle = document.getElementById("billingToggle");

toggle.addEventListener("change", () => {
    const yearly = toggle.checked;

    // prices
    document.querySelectorAll(".plan-price").forEach((el) => {
        el.textContent = yearly ? el.dataset.year : el.dataset.month;
    });

    // attacks
    document.querySelectorAll(".plan-attack").forEach((el) => {
        el.textContent = yearly ? el.dataset.year : el.dataset.month;
    });

    // letters
    document.querySelectorAll(".letters").forEach((el) => {
        el.textContent = yearly ? el.dataset.year : el.dataset.month;
    });

    // /mo text
    document.querySelectorAll(".per").forEach((el) => {
        el.textContent = yearly ? "/yr" : "/mo";
    });
});

