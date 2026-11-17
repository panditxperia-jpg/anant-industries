import {getProduct, productDetails} from "./data/products.js";
import "./index.css";
import "./product.css";

const asset = (name) => `/assets/${name}`;
const productUrl = (slug) => `/products/${slug}/`;

function logo() {
    return `<a class="logo" href="/" aria-label="Anant Industries home"><strong>ANANT</strong><span>INDUSTRIES</span></a>`;
}

function themeToggle() {
    return `<div class="theme-toggle" role="group" aria-label="Color theme">
    <button type="button" data-set-theme="light">Light</button>
    <button type="button" data-set-theme="dark">Dark</button>
  </div>`;
}

function mainHeader(product) {
    return `<header class="nav ${product ? "pd-main-nav" : ""}">
    ${logo()}
    <nav aria-label="Main navigation">
      <a href="/#products">Products</a>
      <a href="/#solutions">Solutions</a>
      <a href="/#why">Why Anant</a>
      <a href="/#works">Our works</a>
      <a href="${product ? "#quote" : "#contact"}">Contact</a>
    </nav>
    <div class="nav-actions">${themeToggle()}<a class="button button-outline quote-button" href="${product ? "#quote" : "#contact"}">Get a quote <span>↗</span></a></div>
  </header>`;
}

function homePage() {
    const applications = [["For industrial builds", "Strength for factories, warehouses and large-span structures."], ["For commercial spaces", "Versatile roofing and cladding with a distinctive finish."], ["For residential projects", "Reliable protection. Comfortable spaces. Lasting value."],];
    const cards = productDetails.filter((product) => product.slug !== "turbo-fans");
    const steps = [["01", "Tell us what you need", "Share your product, dimensions, quantities and project location with our team.",], ["02", "Find the right solution", "We help you choose the right materials and prepare a project-specific quotation.",], ["03", "Build with confidence", "Move ahead with durable products and support from enquiry to supply.",],];

    return `<div id="top" class="site-shell">
    ${mainHeader()}
    <main>
      <section class="hero section-wrap">
        <div class="hero-image">
          <img src="${asset("45f2d.png")}" alt="Structural steel frame under construction">
          <div class="hero-shade"></div>
          <div class="hero-copy">
            <p class="eyebrow">ANANT INDUSTRIES</p>
            <h1>Strong foundations.<br>Limitless possibilities.</h1>
            <p>Roofing, decking and structural solutions.<br>Everything your next build is made of.</p>
            <div class="button-row">
              <a class="button button-primary" href="#products">Explore our products</a>
              <a class="button button-glass" href="#contact">Talk to our team <span>↗</span></a>
            </div>
          </div>
          <div class="hero-meta"><span>BUILT FOR INDUSTRY. DESIGNED TO LAST.</span><span>HYDERABAD, INDIA</span></div>
        </div>
        <p class="service-line">Roofing &nbsp;/&nbsp; Structural support &nbsp;/&nbsp; Cladding &nbsp;/&nbsp; Ventilation</p>
      </section>

      <section id="solutions" class="section-wrap application-grid">
        ${applications.map(([title, text], index) => `<a href="#contact" class="application-card ${index === 0 ? "featured" : ""}"><span class="arrow">↗</span><h3>${title}</h3><p>${text}</p></a>`).join("")}
      </section>

      <section id="products" class="section-wrap products-section">
        <p class="kicker teal">For {builders}</p>
        <h2>Great builds start here.</h2>
        <p class="section-intro">A complete range of roofing and structural products. One dependable partner.</p>
        <div class="product-grid">
          ${cards
        .map((product) => `<article class="product-card">
            <img src="${asset(product.image)}" alt="${product.name} photograph">
            <div class="card-copy"><h3>${product.name}</h3><p>${product.shortDescription}</p><a href="${productUrl(product.slug)}">Explore product <span>↗</span></a></div>
          </article>`,)
        .join("")}
        </div>
        <article class="turbo-card">
          <div class="turbo-copy"><p class="eyebrow">A BREATH OF FRESH AIR</p><h3>Turbo fans</h3><p>Natural ventilation for cooler, more comfortable factories, warehouses and commercial spaces. No electricity required.</p><a class="button button-primary" href="${productUrl("turbo-fans")}">Explore turbo fans <span>↗</span></a></div>
          <img src="${asset("58de0.png")}" alt="Roof-mounted turbo fan">
        </article>
      </section>

      <section id="why" class="section-wrap strength-section divided">
        <div class="strength-copy"><p class="kicker teal">Why Anant</p><h2>Strength you can<br>build on.</h2><p class="section-intro">From the first sheet to the final finish, we supply materials that bring durability, precision and performance together.</p>
          <div class="benefits"><div><h3>Quality, without compromise</h3><p>Premium materials and strict quality checks, at every step.</p></div><div><h3>Built around your project</h3><p>A complete product range for diverse construction needs.</p></div></div>
        </div>
        <figure><img src="${asset("a2953.png")}" alt="Profile sheet production line"><figcaption>PRECISION IN EVERY PROFILE.</figcaption></figure>
        <div class="metrics">${[["15+", "Years of experience"], ["500+", "Projects completed"], ["400+", "Happy clients"], ["10", "Product categories"],]
        .map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
        .join("")}</div>
      </section>

      <section class="trust-section">
        <div class="section-wrap trust-heading"><p class="kicker teal">Built on trust</p><div class="trust-title-row"><h2>Trusted by more than <span>500</span> builders</h2><div class="slider-controls"><button type="button" data-scroll-target="trust" data-direction="-1" aria-label="Previous">←</button><button type="button" data-scroll-target="trust" data-direction="1" aria-label="Next">→</button></div></div></div>
        <div class="trust-slider" data-rail="trust">
          ${[["Ready for demanding projects from day one", "Proven products, responsive support, and dependable supply for builds that cannot afford delays.", "a2953.png",], ["Complex requirements become simple", "Our team turns dimensions, finishes, and load requirements into the right material plan.", "3ac4f.png",], ["Every essential profile, in one place", "Roofing, decking, purlins, coils, accessories, and ventilation from one partner.", "ba3bd.png",], ["Consistency at every scale", "Careful production and quality checks deliver reliable performance across every rollout.", "45f2d.png",],]
        .map(([title, text, image], index) => `<article class="trust-slide trust-slide-${index + 1}"><div class="trust-slide-copy"><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p><a href="#contact">Start a project ↗</a></div><div class="trust-slide-image"><img src="${asset(image)}" alt=""><span>ANANT INDUSTRIES</span></div></article>`,)
        .join("")}
        </div>
      </section>

      <section id="works" class="section-wrap works-section"><p class="kicker pink">For every scale of ambition</p><h2>Made for the way you build.</h2><div class="works-grid">
        <article class="work-card"><img src="${asset("3ac4f.png")}" alt="Industrial structural construction"><div><h3>Industrial &amp; structural</h3><span>↗</span><p>Decking and purlins for demanding industrial construction.</p></div></article>
        <article class="work-card"><img src="${asset("161ff.png")}" alt="Red roofing sheets"><div><h3>Roofing &amp; architectural</h3><span>↗</span><p>Profiles, colour and protection for spaces that stand out.</p></div></article>
      </div></section>

      <section class="section-wrap order-section divided"><h2>From your plans to your project.</h2><div class="steps-grid">${steps.map(([number, title, text]) => `<article><span>${number}</span><div></div><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>

      <section id="contact" class="section-wrap contact-section">
        <div class="contact-copy"><p class="eyebrow pink">LET’S BUILD TOGETHER</p><h2>Your next project.<br>Our next commitment.</h2><p>Tell us what you’re building. We’ll help you find the right roofing and structural products.</p><small>Prefer a conversation?</small><a class="phone" href="tel:+917893318421">+91 78933 18421 ↗</a><p class="location">Based in Dulapally, Hyderabad.<br>Supplying strength for your next build.</p></div>
        <form data-enquiry-form><h3>Request a quote</h3><div class="form-row"><label>Your name<input required name="name" placeholder="Full name"></label><label>Phone number<input required name="phone" type="tel" placeholder="+91"></label></div><label>Product required<select required name="product"><option value="">Select a product</option>${productDetails.map((product) => `<option>${product.name}</option>`).join("")}</select></label><label>Project details<textarea required name="details" placeholder="Quantity, dimensions and delivery location"></textarea></label><button class="button button-primary" type="submit">Send enquiry ↗</button><small data-form-message>Your details will only be used to respond to your enquiry.</small></form>
      </section>
    </main>
    ${homeFooter()}
  </div>`;
}

function homeFooter() {
    return `<footer class="section-wrap footer divided">
    <div class="footer-brand">${logo()}<p>Roofing. Structure. Possibility.</p><span>Durable roofing and structural solutions for stronger, lasting structures.</span></div>
    <div><h3>Our products</h3>${productDetails.map((product) => `<a href="${productUrl(product.slug)}">${product.name}</a>`).join("")}</div>
    <div><h3>Explore</h3><a href="/#why">About Anant</a><a href="/#solutions">Our solutions</a><a href="/#works">Our works</a><a href="/#contact">Get a quote</a></div>
    <div><h3>Get in touch</h3><a class="footer-phone" href="tel:+917893318421">+91 78933 18421</a><a href="mailto:contact@aasthaenterprises.in">contact@aasthaenterprises.in</a><h4>FACTORY</h4><p>Plot No. 6 B, New Steel City,<br>Dulapally, Hyderabad – 500 055</p></div>
    <div class="footer-bottom"><span>© 2025 Anant Industries. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
  </footer>`;
}

function productPage(product) {
    const features = [...product.benefits, {
        title: "Support from enquiry to supply",
        description: "Practical guidance on product choice, quantities, finishes, and delivery requirements.",
    },];
    const featureImages = [product.image, "a2953.png", "45f2d.png", "3ac4f.png"];
    const related = productDetails.filter((item) => item.slug !== product.slug).slice(0, 6);
    const qualities = ["Strength", "Precision", "Durability", "Weather resistance", "Project support",];

    document.title = `${product.name} | Anant Industries`;
    document.documentElement.style.setProperty("--pd-accent", product.accent);
    document.documentElement.style.setProperty("--pd-accent-dark", product.accentAlt);

    return `<div class="pd-page">
    ${mainHeader(product)}
    <div class="pd-subnav"><a href="/">Anant Industries</a><span>${product.name}</span><nav><a href="#overview">Overview</a><a href="#features">Features</a><a href="#applications">Applications</a></nav><a href="#quote">Request pricing</a></div>
    <main>
      <section class="pd-brand-hero"><div class="pd-wrap pd-brand-layout"><div class="pd-brand-copy"><div class="pd-proof"><div><span>15+</span><span>500+</span><span>400+</span></div><p>Trusted across more than 500 completed projects</p></div><h1>The strength of<br>${product.name}<br>wherever you build.</h1><div class="pd-context-switcher"><span class="active">Industrial</span></div></div><div class="pd-brand-art"><div class="pd-art-ring ring-a"></div><div class="pd-art-ring ring-b"></div><img src="${asset(product.image)}" alt=""><span>ANANT</span></div></div></section>

      <section id="overview" class="pd-intro pd-wrap"><p class="pd-label">${product.eyebrow}</p><h2>${product.name}</h2><p class="pd-intro-line">${product.shortDescription}</p><div class="pd-intro-actions"><a class="pd-button pd-button-solid" href="#quote">Request a quote</a><span>Made in Hyderabad · Supplied across India</span></div><div class="pd-media-stage"><div class="pd-media-glow"></div><img src="${asset(product.image)}" alt="${product.name} by Anant Industries"><div class="pd-media-caption"><span>01 / PRODUCT VIEW</span><strong>${product.eyebrow}</strong></div></div></section>

      <section class="pd-organizations pd-wrap pd-reveal"><h2>Trusted across 500+ completed projects</h2><div>${["Factories", "Warehouses", "PEB structures", "Commercial spaces", "Industrial sheds", "Storage units", "Residential builds", "Infrastructure", "Contractors", "Fabricators", "Architects", "Developers"].map((item) => `<span>${item}</span>`).join("")}</div></section>
      <section class="pd-marquee"><div>${[...qualities, ...qualities].map((item) => `<span>${item} <i>·</i></span>`).join("")}</div></section>

      <section id="features" class="pd-features pd-wrap"><div class="pd-section-title pd-reveal"><span>EVERYTHING YOUR PROJECT NEEDS</span><h2>Built-in performance. No compromises.</h2></div><div class="pd-feature-player pd-reveal" data-feature-player>
        <div class="pd-feature-tabs" role="tablist">${features.map((feature, index) => `<button type="button" role="tab" aria-selected="${index === 0}" class="${index === 0 ? "active" : ""}" data-feature="${index}"><span>0${index + 1}</span><strong>${feature.title}</strong><p>${feature.description}</p>${index === 0 ? "<i></i>" : ""}</button>`).join("")}</div>
        <div class="pd-feature-media" role="tabpanel"><img data-feature-image src="${asset(featureImages[0])}" alt=""><div><span data-feature-number>01</span><strong data-feature-title>${features[0].title}</strong></div></div>
      </div></section>

      <section class="pd-story-block pd-wrap"><div class="pd-story-image pd-reveal"><img src="${asset("a2953.png")}" alt="Profile sheet production"><span>PRECISION IN EVERY PROFILE</span></div><div class="pd-story-copy pd-reveal"><p class="pd-label">MADE FOR ACTUAL USE</p><h2>Quality starts long before installation.</h2><p>${product.intro}</p><p>Premium raw materials, advanced production, and strict quality checks support accurate profiles and long service life.</p><a href="#quote">Talk to a product specialist ↗</a></div></section>

      <section id="applications" class="pd-applications"><div class="pd-wrap"><div class="pd-section-title pd-reveal"><span>WHERE IT WORKS</span><h2>One product. Many possibilities.</h2></div><div class="pd-application-grid">${product.applications.map((application, index) => `<article class="pd-reveal"><span>0${index + 1}</span><h3>${application}</h3><p>Built for dependable performance, efficient installation, and long-term project value.</p><a href="#quote">↗</a></article>`).join("")}</div></div></section>

      <section class="pd-numbers"><div class="pd-wrap">${product.highlights.map((item) => `<div class="pd-reveal"><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}<div class="pd-reveal"><strong>15+</strong><span>Years of experience</span></div></div></section>

      <section class="pd-quality pd-wrap"><div class="pd-quality-intro pd-reveal"><span>PRODUCTION-GRADE RELIABILITY</span><h2>Quality and support, built into every order.</h2><a href="#quote">Talk to our project team ↗</a></div><div class="pd-quality-cards"><article class="pd-reveal"><div class="pd-quality-icon">Q</div><div><h3>Quality checked</h3><span>VERIFIED</span></div><p>Premium materials, accurate profiles, and strict checks before products leave our facility.</p></article><article class="pd-reveal"><div class="pd-quality-icon">S</div><div><h3>Project support</h3><span>INCLUDED</span></div><p>Practical guidance on selection, quantities, finishes, and delivery planning.</p></article></div></section>

      <section id="stories" class="pd-testimonials"><div class="pd-wrap pd-testimonial-heading pd-reveal"><div class="pd-section-title"><span>CUSTOMER STORIES</span><h2>Trusted on the projects that matter.</h2></div><div class="pd-carousel-controls"><button type="button" data-scroll-target="stories" data-direction="-1">←</button><button type="button" data-scroll-target="stories" data-direction="1">→</button></div></div><div class="pd-testimonial-rail" data-rail="stories">${[["Rajesh Kumar", "Industrial project contractor", "The products are strong, precise, and arrived when promised. Coordination was straightforward from specification to delivery.",], ["Sneha Reddy", "Commercial project owner", "We received excellent guidance, reliable quality, and a finish that performs as well as it looks.",], ["Amit Verma", "Construction engineer", "The material matched our requirements and installation moved smoothly. Responsive support made a real difference.",],]
        .map(([name, role, quote], index) => `<article><div class="pd-avatar">${name[0]}</div><div><strong>${name}</strong><span>${role}</span></div><blockquote>“${quote}”</blockquote><small>0${index + 1} / VERIFIED PROJECT FEEDBACK</small></article>`,)
        .join("")}</div></section>

      <section class="pd-related"><div class="pd-wrap pd-related-heading pd-reveal"><div><span>THE ANANT PRODUCT SYSTEM</span><h2>Keep building.</h2></div><p>Drag horizontally to explore related roofing, structural, and ventilation products.</p></div><div class="pd-related-rail">${related.map((item) => `<a href="${productUrl(item.slug)}"><div><span>${item.eyebrow}</span><h3>${item.name}</h3></div><img src="${asset(item.image)}" alt=""><p>${item.shortDescription}</p><strong>Explore product ↗</strong></a>`).join("")}</div></section>

      <section id="quote" class="pd-quote pd-wrap pd-reveal"><p class="pd-label">LET’S BUILD TOGETHER</p><h2>Specify ${product.name.toLowerCase()} for your next project.</h2><p>Share your dimensions, quantity, finish, and delivery location. We’ll help prepare the right solution.</p><div><a class="pd-button pd-button-solid" href="tel:+917893318421">Call +91 78933 18421</a><a class="pd-button pd-button-outline" href="mailto:contact@aasthaenterprises.in">Email our team</a></div></section>
    </main>
    <footer class="pd-footer pd-wrap">${logo()}<p>Roofing. Structure. Possibility.</p><nav><a href="/">Home</a><a href="/#products">All products</a><a href="tel:+917893318421">Contact</a></nav><span>© 2025 Anant Industries. Hyderabad, India.</span></footer>
  </div>`;
}

function initializeTheme() {
    const saved = localStorage.getItem("anant-theme");
    const theme = saved === "light" || saved === "dark" ? saved : matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const apply = (next) => {
        document.documentElement.dataset.theme = next;
        document.documentElement.style.colorScheme = next;
        localStorage.setItem("anant-theme", next);
        document
            .querySelectorAll("[data-set-theme]")
            .forEach((button) => button.classList.toggle("active", button.dataset.setTheme === next));
    };
    apply(theme);
    document
        .querySelectorAll("[data-set-theme]")
        .forEach((button) => button.addEventListener("click", () => apply(button.dataset.setTheme)));
}

function initializeInteractions(product) {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(".reveal-target, .pd-reveal, .product-card, .application-card, .work-card",);
    if (reduced) targets.forEach((target) => target.classList.add("is-visible")); else {
        const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }), {threshold: 0.1, rootMargin: "0px 0px -6% 0px"},);
        targets.forEach((target) => {
            target.classList.add("reveal-target");
            observer.observe(target);
        });
    }

    document.querySelectorAll("[data-scroll-target]").forEach((button) => button.addEventListener("click", () => {
        const rail = document.querySelector(`[data-rail="${button.dataset.scrollTarget}"]`);
        rail?.scrollBy({
            left: Number(button.dataset.direction) * Math.min(700, innerWidth * 0.75),
            behavior: reduced ? "auto" : "smooth",
        });
    }),);

    const form = document.querySelector("[data-enquiry-form]");
    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        form.reset();
        form.querySelector("[data-form-message]").textContent = "Thank you. Our team will respond to your enquiry.";
        form.querySelector("button").textContent = "Enquiry sent";
    });

    if (product) {
        const player = document.querySelector("[data-feature-player]");
        const tabs = [...document.querySelectorAll("[data-feature]")];
        const images = [product.image, "a2953.png", "45f2d.png", "3ac4f.png"];
        const features = [...product.benefits, {title: "Support from enquiry to supply"}];
        let active = 0;
        let paused = false;
        const select = (index) => {
            active = index;
            tabs.forEach((tab, tabIndex) => {
                tab.classList.toggle("active", tabIndex === index);
                tab.setAttribute("aria-selected", String(tabIndex === index));
                tab.querySelector("i")?.remove();
                if (tabIndex === index) tab.insertAdjacentHTML("beforeend", "<i></i>");
            });
            document.querySelector("[data-feature-image]").src = asset(images[index]);
            document.querySelector("[data-feature-number]").textContent = `0${index + 1}`;
            document.querySelector("[data-feature-title]").textContent = features[index].title;
        };
        tabs.forEach((tab) => tab.addEventListener("click", () => select(Number(tab.dataset.feature))));
        player?.addEventListener("mouseenter", () => {
            paused = true;
        });
        player?.addEventListener("mouseleave", () => {
            paused = false;
        });
        if (!reduced) setInterval(() => {
            if (!paused) select((active + 1) % tabs.length);
        }, 6000);
    }
}

const root = document.querySelector("#app");
const page = document.body.dataset.page;
const product = page === "product" ? getProduct(document.body.dataset.product) : null;

if (page === "product" && !product) {
    root.innerHTML = `<main class="not-found"><span>404</span><h1>This product page could not be found.</h1><a class="button button-primary" href="/">Back to Anant Industries</a></main>`;
} else {
    root.innerHTML = product ? productPage(product) : homePage();
}

initializeTheme();
initializeInteractions(product);
