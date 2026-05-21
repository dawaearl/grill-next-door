// ==========================================================================
// Menu Database
// ==========================================================================

const MENU_DATA = {
    starters: [
        {
            name: "Wood-Fired Charred Octopus",
            price: "Ksh 1,400",
            description: "Tender octopus charred over cherry oak wood, served with smoked paprika aioli, fingerling potatoes, and lemon-herb infusion.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80",
            tags: ["Chef's Special"]
        },
        {
            name: "Smoked Bone Marrow",
            price: "Ksh 1,200",
            description: "Roasted over embers, glazed with sweet bourbon soy, served with grilled sourdough and cherry wood smoked sea salt.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
            tags: ["Perfect for Sharing"]
        },
        {
            name: "Coal-Roasted Beet & Burrata",
            price: "Ksh 1,000",
            description: "Heirloom beets cooked directly in coals, creamy burrata, toasted pistachios, charred basil oil, and blood orange vinaigrette.",
            image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=300&q=80",
            tags: ["Perfect for Sharing"]
        },
        {
            name: "Whiskey-Glazed Pork Belly",
            price: "Ksh 1,400",
            description: "House-cured pork belly smoked for 12 hours, seared in cast iron, glazed with local single-malt whiskey and maple.",
            image: "https://images.unsplash.com/photo-1623130101592-331d9fb4cde3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: ["Chef's Special"]
        }
    ],
    mains: [
        {
            name: "Dry-Aged Tomahawk (for two)",
            price: "Ksh 10,500",
            description: "32oz hand-selected ribeye, dry-aged for 45 days, wood-grilled, sliced and served with smoked bone marrow garlic butter.",
            image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=300&q=80",
            tags: ["Perfect for Sharing", "Chef's Special"]
        },
        {
            name: "Cherrywood Smoked Duck",
            price: "Ksh 4,600",
            description: "Pan-roasted duck breast infused with cherrywood smoke, creamy parsnip purée, caramelized wild plums, and red wine reduction.",
            image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=300&q=80",
            tags: ["Chef's Special"]
        },
        {
            name: "Hickory Filet Mignon",
            price: "Ksh 5,800",
            description: "8oz center-cut beef tenderloin grilled over hickory logs, served with potato purée, asparagus, and a dark chocolate red wine demi-glace.",
            image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=300&q=80",
            tags: []
        },
        {
            name: "Cast-Iron Sea Bass",
            price: "Ksh 3,200",
            description: "Wild sea bass pan-seared with burnt butter, served over blistered heirloom tomatoes, charred fennel, and saffron lobster broth.",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80",
            tags: []
        }
    ],
    desserts: [
        {
            name: "Smoked Bourbon Vanilla Crème Brûlée",
            price: "Ksh 800",
            description: "Rich bourbon-infused vanilla bean custard with a caramelized glass sugar crust, served with flame-charred wild berries.",
            image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=300&q=80",
            tags: ["Chef's Special"]
        },
        {
            name: "Open-Flame Roasted S'mores",
            price: "Ksh 900",
            description: "Valrhona chocolate ganache, smoked honey-graham cracker tuile, and house-made marshmallow toasted over open flame at your table.",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&q=80",
            tags: ["Perfect for Sharing"]
        },
        {
            name: "Cast Iron Peach & Berry Cobbler",
            price: "Ksh 1,000",
            description: "Wood-fired sweet peaches and blackberries beneath a golden biscuit crust, topped with smoked vanilla bean ice cream.",
            image: "https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=300&q=80",
            tags: ["Perfect for Sharing"]
        }
    ],
    cocktails: [
        {
            name: "Smoke & Mirrors",
            price: "Ksh 1,200",
            description: "Artisanal Mezcal, grilled pineapple reduction, organic agave, fresh squeezed lime, served under a hickory wood smoke dome.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=300&q=80",
            tags: ["Chef's Special"]
        },
        {
            name: "The Secret Password",
            price: "Ksh 1,400",
            description: "Small-batch bourbon, cherry wood smoke essence, orange-peel bitters, served over a hand-carved ice sphere.",
            image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=300&q=80",
            tags: ["Chef's Special"]
        },
        {
            name: "Intimate Vesper",
            price: "Ksh 1,500",
            description: "Local botanist gin, premium vodka, white Lillet, infused with amber blossom honey and a double twist of lemon peel.",
            image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=300&q=80",
            tags: []
        },
        {
            name: "Rosemary Fire Bramble",
            price: "Ksh 1,200",
            description: "Smoked blackberry liqueur, dry gin, fresh lemon, sugar, garnished with a sprig of rosemary torched at the bar.",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
            tags: ["Perfect for Sharing"]
        }
    ]
};

// ==========================================================================
// Initialization & Global Event Listeners
// ==========================================================================

const init = () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Initialize Scroll Reveal
    initScrollReveal();

    // Initialize Speakeasy Toggle
    initSpeakeasyToggle();

    // Initialize Menu Tabs and Default Page
    renderMenu("starters");
    initMenuTabs();

    // Initialize Reservation Form Constraints & Listeners
    initReservationForm();
};

// Initialization trigger moved to the bottom of the file to prevent Temporal Dead Zone errors.

// ==========================================================================
// Scroll Reveal Observer
// ==========================================================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// Speakeasy Ambiance Mode (The WOW factor)
// ==========================================================================

let emberInterval = null;

function initSpeakeasyToggle() {
    const toggleBtns = document.querySelectorAll(".speakeasy-toggle");
    const body = document.body;

    // Hero elements for crossfade
    const bgCozy = document.querySelector(".hero-bg.bg-cozy");
    const bgSpeakeasy = document.querySelector(".hero-bg.bg-speakeasy");

    // Concept section elements for crossfade
    const imgCozy = document.querySelector(".concept-image-container .img-cozy");
    const imgSpeakeasy = document.querySelector(".concept-image-container .img-speakeasy");

    // Check localStorage for saved mode
    const savedMode = localStorage.getItem("grill-next-door-mode");
    if (savedMode === "speakeasy") {
        enableSpeakeasyMode(body, null, bgCozy, bgSpeakeasy, imgCozy, imgSpeakeasy);
    } else {
        disableSpeakeasyMode(body, null, bgCozy, bgSpeakeasy, imgCozy, imgSpeakeasy);
    }

    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (body.classList.contains("storefront-mode")) {
                enableSpeakeasyMode(body, null, bgCozy, bgSpeakeasy, imgCozy, imgSpeakeasy);
            } else {
                disableSpeakeasyMode(body, null, bgCozy, bgSpeakeasy, imgCozy, imgSpeakeasy);
            }
        });
    });

    // Mobile nav toggle
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    mobileToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
        if (mobileNav.classList.contains("active")) {
            mobileToggle.innerHTML = '<i data-lucide="x"></i>';
        } else {
            mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
        }
        window.lucide.createIcons();
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
            window.lucide.createIcons();
        });
    });
}

function enableSpeakeasyMode(body, btn, bgCozy, bgSpeakeasy, imgCozy, imgSpeakeasy) {
    body.classList.replace("storefront-mode", "speakeasy-mode");
    localStorage.setItem("grill-next-door-mode", "speakeasy");

    // Crossfade Backgrounds
    if (bgCozy && bgSpeakeasy) {
        bgCozy.classList.remove("active");
        bgSpeakeasy.classList.add("active");
    }

    // Crossfade Story Images
    if (imgCozy && imgSpeakeasy) {
        imgCozy.classList.remove("active");
        imgSpeakeasy.classList.add("active");
    }

    // Start Floating Embers
    startEmberRain();
}

function disableSpeakeasyMode(body, btn, bgCozy, bgSpeakeasy, imgCozy, imgSpeakeasy) {
    body.classList.replace("speakeasy-mode", "storefront-mode");
    localStorage.setItem("grill-next-door-mode", "cozy");

    // Crossfade Backgrounds
    if (bgCozy && bgSpeakeasy) {
        bgSpeakeasy.classList.remove("active");
        bgCozy.classList.add("active");
    }

    // Crossfade Story Images
    if (imgCozy && imgSpeakeasy) {
        imgSpeakeasy.classList.remove("active");
        imgCozy.classList.add("active");
    }

    // Stop Floating Embers
    stopEmberRain();
}

function startEmberRain() {
    const container = document.getElementById("ember-container");
    if (!container) return;

    // Clean old ones
    container.innerHTML = "";

    emberInterval = setInterval(() => {
        const ember = document.createElement("div");
        ember.classList.add("ember");

        // Random placement parameters
        const startX = Math.random() * window.innerWidth;
        const size = Math.random() * 4 + 2; // 2px to 6px
        const duration = Math.random() * 6 + 4; // 4s to 10s
        const drift = (Math.random() * 100 - 50) + "px"; // drift left/right
        const delay = Math.random() * 2;

        ember.style.left = startX + "px";
        ember.style.width = size + "px";
        ember.style.height = size + "px";
        ember.style.setProperty("--drift", drift);
        ember.style.animationDuration = duration + "s";
        ember.style.animationDelay = delay + "s";

        container.appendChild(ember);

        // Remove after animation finishes to prevent DOM bloating
        setTimeout(() => {
            ember.remove();
        }, (duration + delay) * 1000);
    }, 150);
}

function stopEmberRain() {
    if (emberInterval) {
        clearInterval(emberInterval);
        emberInterval = null;
    }
    const container = document.getElementById("ember-container");
    if (container) container.innerHTML = "";
}

// ==========================================================================
// Dynamic Tabbed Menu Section
// ==========================================================================

function initMenuTabs() {
    const tabs = document.querySelectorAll("#menu-tabs .menu-tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Add active to current
            tab.classList.add("active");

            // Get category and render with smooth fade-in
            const category = tab.getAttribute("data-category");
            renderMenu(category);
        });
    });
}

function renderMenu(category) {
    const grid = document.getElementById("menu-grid");
    if (!grid) return;

    // Clear current items
    grid.innerHTML = "";

    const items = MENU_DATA[category] || [];

    items.forEach((item, index) => {
        const itemEl = document.createElement("div");
        itemEl.classList.add("menu-item");
        itemEl.style.animationDelay = `${index * 0.1}s`;

        // Tags rendering
        let tagsHtml = "";
        if (item.tags && item.tags.length > 0) {
            item.tags.forEach(tag => {
                const tagClass = tag === "Chef's Special" ? "tag-chef" : "tag-share";
                tagsHtml += `<span class="menu-tag ${tagClass}">${tag}</span>`;
            });
        }

        itemEl.innerHTML = `
            <div class="menu-item-img-container">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <div class="menu-item-line"></div>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.description}</p>
                <div class="menu-item-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;

        grid.appendChild(itemEl);
    });
}

// ==========================================================================
// Reservation Form Logic (Dynamic hours, slots, validation)
// ==========================================================================

const API_BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    ? "http://localhost:8000"
    : "";

const LOCATION_SESSIONS = {
    "The Hidden Alley": {
        lunch: { start: 12, end: 15.5, label: "Lunch Session (12:00 PM - 3:30 PM)" },
        dinner: { start: 18, end: 23, label: "Romantic Dinner (6:00 PM - 11:00 PM)" }
    },
    "The Downtown Loft": {
        lunch: { start: 12, end: 15.5, label: "Lunch Session (12:00 PM - 3:30 PM)" },
        dinner: { start: 18, end: 24, label: "Romantic Dinner (6:00 PM - 12:00 AM)" }
    }
};

function initReservationForm() {
    const form = document.getElementById("reservation-form");
    if (!form) return;

    const locationSelect = document.getElementById("location");
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time-slot");
    const sessionIndicator = document.getElementById("session-indicator");

    // Restrict Date Input to Today and Future Dates (Up to 30 days)
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDateStr = `${yyyy}-${mm}-${dd}`;

    dateInput.min = minDateStr;

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);
    const max_yyyy = maxDate.getFullYear();
    const max_mm = String(maxDate.getMonth() + 1).padStart(2, '0');
    const max_dd = String(maxDate.getDate()).padStart(2, '0');
    dateInput.max = `${max_yyyy}-${max_mm}-${max_dd}`;

    // Enable/Update Time slots dynamically
    const updateTimeSlots = () => {
        const locationVal = locationSelect.value;
        const dateVal = dateInput.value;

        if (!locationVal || !dateVal) {
            timeSelect.disabled = true;
            timeSelect.innerHTML = `<option value="" disabled selected>Select location & date first</option>`;
            sessionIndicator.style.display = "none";
            return;
        }

        timeSelect.disabled = false;
        timeSelect.innerHTML = `<option value="" disabled selected>Select an available time</option>`;

        const sessions = LOCATION_SESSIONS[locationVal];
        const dateSelected = new Date(dateVal + "T00:00:00");
        const isToday = dateSelected.toDateString() === today.toDateString();
        const currentHour = today.getHours() + (today.getMinutes() / 60);

        // Helper to format decimal time to readable standard string
        const getFormattedTime = (hoursDecimal) => {
            const h = Math.floor(hoursDecimal);
            const m = Math.round((hoursDecimal - h) * 60);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const displayH = h % 12 === 0 ? 12 : h % 12;
            const displayM = String(m).padStart(2, '0');
            return `${displayH}:${displayM} ${ampm}`;
        };

        let addedSlotsCount = 0;

        // Generate Lunch Slots
        const lunchSess = sessions.lunch;
        for (let t = lunchSess.start; t < lunchSess.end; t += 0.5) {
            // If today, filter out past slots
            if (isToday && t <= currentHour + 0.5) continue;

            const optText = `${getFormattedTime(t)} - Lunch Session`;
            const optVal = getFormattedTime(t);
            const opt = document.createElement("option");
            opt.value = optVal;
            opt.textContent = optText;
            opt.dataset.session = "lunch";
            timeSelect.appendChild(opt);
            addedSlotsCount++;
        }

        // Generate Dinner Slots
        const dinnerSess = sessions.dinner;
        for (let t = dinnerSess.start; t < dinnerSess.end; t += 0.5) {
            if (isToday && t <= currentHour + 0.5) continue;

            const optText = `${getFormattedTime(t)} - Romantic Dinner`;
            const optVal = getFormattedTime(t);
            const opt = document.createElement("option");
            opt.value = optVal;
            opt.textContent = optText;
            opt.dataset.session = "dinner";
            timeSelect.appendChild(opt);
            addedSlotsCount++;
        }

        if (addedSlotsCount === 0) {
            timeSelect.innerHTML = `<option value="" disabled selected>No slots available for today</option>`;
            timeSelect.disabled = true;
        }
    };

    locationSelect.addEventListener("change", updateTimeSlots);
    dateInput.addEventListener("change", updateTimeSlots);

    // Watch time slot selection to show custom helper labels
    timeSelect.addEventListener("change", () => {
        const selectedOption = timeSelect.options[timeSelect.selectedIndex];
        const session = selectedOption.dataset.session;

        sessionIndicator.style.display = "flex";
        sessionIndicator.className = "session-indicator"; // reset classes

        if (session === "lunch") {
            sessionIndicator.classList.add("lunch");
            sessionIndicator.innerHTML = `<i data-lucide="sun" style="width: 14px; height: 14px;"></i> Selected slot is during Lunch Session.`;
        } else if (session === "dinner") {
            sessionIndicator.classList.add("dinner");
            sessionIndicator.innerHTML = `<i data-lucide="moon" style="width: 14px; height: 14px;"></i> Selected slot is during our Romantic Candlelit Dinner.`;
        }
        window.lucide.createIcons();
    });

    // Form submission validation
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (!isValid) return;

        const submitBtn = form.querySelector(".submit-btn");
        const originalBtnHTML = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending Confirmation...</span><i data-lucide="loader" style="animation: spin 1s linear infinite;"></i>`;
        window.lucide.createIcons();

        const formData = {
            name: document.getElementById("full-name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            location: document.getElementById("location").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time-slot").value,
            guests: document.getElementById("guests").value,
            notes: document.getElementById("notes").value.trim()
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/reserve`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                showSuccessModal(result.bookingRef, result.table);
            } else {
                showApiError(result.error || "Reservation failed. Please try again.");
            }
        } catch (err) {
            console.error("Reservation API error:", err);
            showApiError("Could not reach the reservation server. Please check your connection and try again.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
            window.lucide.createIcons();
        }
    });

    // Helper: show inline API error
    function showApiError(message) {
        let errEl = document.getElementById("api-error-msg");
        if (!errEl) {
            errEl = document.createElement("p");
            errEl.id = "api-error-msg";
            errEl.style.cssText = "color:#e05c5c; font-size:14px; text-align:center; margin-top:12px; padding:12px; background:rgba(224,92,92,0.1); border:1px solid rgba(224,92,92,0.3); border-radius:8px;";
            form.appendChild(errEl);
        }
        errEl.textContent = message;
        setTimeout(() => errEl.remove(), 6000);
    }

    // Clean validation errors on input change
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const group = input.closest(".form-group");
            if (group) group.classList.remove("has-error");
        });
        input.addEventListener("change", () => {
            const group = input.closest(".form-group");
            if (group) group.classList.remove("has-error");
        });
    });
}

function validateForm() {
    let isValid = true;

    // Inputs to validate
    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const guestsSelect = document.getElementById("guests");
    const locationSelect = document.getElementById("location");
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time-slot");

    // Helper function to set errors
    const setError = (element, hasError) => {
        const group = element.closest(".form-group");
        if (!group) return;
        if (hasError) {
            group.classList.add("has-error");
            isValid = false;
        } else {
            group.classList.remove("has-error");
        }
    };

    // Validate Name
    setError(nameInput, nameInput.value.trim().length < 3);

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(emailInput, !emailRegex.test(emailInput.value.trim()));

    // Validate Phone
    const phoneRegex = /^\+?[\d\s\-()]{7,15}$/;
    setError(phoneInput, !phoneRegex.test(phoneInput.value.trim()));

    // Validate Guests
    setError(guestsSelect, !guestsSelect.value);

    // Validate Location
    setError(locationSelect, !locationSelect.value);

    // Validate Date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateSelected = new Date(dateInput.value + "T00:00:00");
    setError(dateInput, !dateInput.value || dateSelected < today);

    // Validate Time Slot
    setError(timeSelect, !timeSelect.value || timeSelect.disabled);

    return isValid;
}

// ==========================================================================
// Success Modal & Speakeasy Easter Eggs
// ==========================================================================

function showSuccessModal(bookingRef, table) {
    const modal = document.getElementById("success-modal");

    // Get form values
    const nameVal = document.getElementById("full-name").value;
    const locVal = document.getElementById("location").value;
    const dateVal = document.getElementById("date").value;
    const timeVal = document.getElementById("time-slot").value;
    const guestsVal = document.getElementById("guests").value;

    // Format Date for Summary
    const dateObj = new Date(dateVal + "T00:00:00");
    const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    // Populate modal values
    document.getElementById("sum-name").textContent = nameVal;
    document.getElementById("sum-location").textContent = locVal;
    document.getElementById("sum-datetime").textContent = `${formattedDate} at ${timeVal}`;
    document.getElementById("sum-guests").textContent = `${guestsVal} ${guestsVal === "1" ? "Guest" : "Guests"}`;

    // Show booking reference if returned from backend
    const refEl = document.getElementById("sum-booking-ref");
    if (refEl && bookingRef) {
        refEl.textContent = bookingRef;
        refEl.closest(".summary-item").style.display = "flex";
    }

    // Show table number if returned from backend
    const tableEl = document.getElementById("sum-table");
    if (tableEl && table) {
        tableEl.textContent = table;
        tableEl.closest(".summary-item").style.display = "flex";
    }

    // Update speakeasy secrets depending on location
    const entryMsg = document.getElementById("speakeasy-entry-msg");
    if (locVal === "The Hidden Alley") {
        entryMsg.innerHTML = `Please enter through the cozy front cafe on Kilmarnock Road, Kilimani. Tap three times on the mahogany bookshelf next to the fireplace. Secret code: <strong>"The hearth fires burn bright tonight."</strong>`;
    } else {
        entryMsg.innerHTML = `Take the Westlands Heights service elevator to the 8th Floor in Westlands. Tap the brass door handle and state the code phrase: <strong>"Vesper sent me."</strong>`;
    }

    // Trigger open
    modal.classList.add("active");

    // Close button trigger
    const closeBtn = document.getElementById("close-modal");
    closeBtn.onclick = () => {
        modal.classList.remove("active");
        // Reset the form
        document.getElementById("reservation-form").reset();
        document.getElementById("time-slot").disabled = true;
        document.getElementById("time-slot").innerHTML = `<option value="" disabled selected>Select location & date first</option>`;
        document.getElementById("session-indicator").style.display = "none";
    };
}

// ==========================================================================
// Initialization & Global Event Listeners (Trigger)
// ==========================================================================
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
