(function () {
    "use strict";

    const DAGAAR_VERSION = {
        title: "Dagaar ERP",
        subtitle: "Healthcare & Business System",
        version: "DH-2026.06.29",
        edition: "Dagaar Healthcare Edition",
        maintained_by: "Dagaar Technology",
        support: "Work smarter. Grow stronger.",
        footer: "Powered for hospitals, clinics, pharmacies, and business operations"
    };

    function dagaarLogoSvg() {
        return `
            <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="76" height="76" rx="22" fill="url(#g)"/>
                <path d="M20 20h18c12.2 0 21 7.6 21 18s-8.8 18-21 18H20V20Zm14 11v14h4c5 0 8.5-2.8 8.5-7S43 31 38 31h-4Z" fill="white"/>
                <path d="M18 60h40" stroke="#FFB703" stroke-width="5" stroke-linecap="round"/>
                <defs>
                    <linearGradient id="g" x1="8" y1="8" x2="68" y2="68" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0C2747"/>
                        <stop offset="0.55" stop-color="#145F9C"/>
                        <stop offset="1" stop-color="#20A4E8"/>
                    </linearGradient>
                </defs>
            </svg>`;
    }

    function showDagaarVersionPopup() {
        if (!window.frappe) return;

        const html = `
            <style>
                .dagaar-version-shell {
                    margin: -10px -15px -15px -15px;
                    border-radius: 24px;
                    overflow: hidden;
                    background: #071b32;
                    color: #fff;
                    font-family: Inter, Arial, sans-serif;
                    box-shadow: 0 24px 60px rgba(0,0,0,0.28);
                }
                .dagaar-version-card {
                    position: relative;
                    overflow: hidden;
                    padding: 28px;
                    background:
                        radial-gradient(circle at top right, rgba(255,183,3,0.32), transparent 32%),
                        radial-gradient(circle at bottom left, rgba(32,164,232,0.35), transparent 34%),
                        linear-gradient(135deg, #0c2747 0%, #145f9c 55%, #1f87c9 100%);
                }
                .dagaar-version-watermark {
                    position: absolute;
                    right: -36px;
                    bottom: -48px;
                    font-size: 190px;
                    font-weight: 900;
                    line-height: 1;
                    color: rgba(255,255,255,0.06);
                    pointer-events: none;
                }
                .dagaar-version-top {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    justify-content: space-between;
                    gap: 18px;
                    align-items: center;
                }
                .dagaar-version-brand {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
                .dagaar-version-logo {
                    width: 76px;
                    height: 76px;
                    border-radius: 22px;
                    box-shadow: 0 12px 28px rgba(0,0,0,0.28);
                    flex: 0 0 auto;
                }
                .dagaar-version-title {
                    font-size: 28px;
                    font-weight: 900;
                    letter-spacing: .2px;
                    line-height: 1.05;
                }
                .dagaar-version-subtitle {
                    margin-top: 6px;
                    font-size: 14px;
                    opacity: .88;
                }
                .dagaar-version-badge {
                    border-radius: 999px;
                    padding: 9px 14px;
                    font-size: 12px;
                    font-weight: 900;
                    color: #0c2747;
                    background: linear-gradient(135deg, #ffd166, #ffb703);
                    box-shadow: 0 8px 18px rgba(255,183,3,0.25);
                    white-space: nowrap;
                }
                .dagaar-version-panel {
                    position: relative;
                    z-index: 2;
                    margin-top: 22px;
                    padding: 16px 18px;
                    border: 1px solid rgba(255,255,255,0.18);
                    border-radius: 18px;
                    background: rgba(255,255,255,0.13);
                    backdrop-filter: blur(8px);
                }
                .dagaar-version-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 18px;
                    padding: 11px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.16);
                    font-size: 14px;
                }
                .dagaar-version-row:last-child {
                    border-bottom: none;
                }
                .dagaar-version-row span {
                    opacity: .84;
                }
                .dagaar-version-row b {
                    text-align: right;
                    font-weight: 800;
                }
                .dagaar-version-footer {
                    position: relative;
                    z-index: 2;
                    margin-top: 16px;
                    text-align: center;
                    font-size: 12px;
                    opacity: .86;
                }
                .dagaar-version-menu-icon {
                    display: inline-flex;
                    width: 22px;
                    height: 22px;
                    border-radius: 7px;
                    align-items: center;
                    justify-content: center;
                    margin-right: 8px;
                    color: #0c2747;
                    background: #ffb703;
                    font-weight: 900;
                    font-size: 12px;
                }
            </style>

            <div class="dagaar-version-shell">
                <div class="dagaar-version-card">
                    <div class="dagaar-version-watermark">D</div>
                    <div class="dagaar-version-top">
                        <div class="dagaar-version-brand">
                            <div class="dagaar-version-logo">${dagaarLogoSvg()}</div>
                            <div>
                                <div class="dagaar-version-title">${DAGAAR_VERSION.title}</div>
                                <div class="dagaar-version-subtitle">${DAGAAR_VERSION.subtitle}</div>
                            </div>
                        </div>
                        <div class="dagaar-version-badge">CUSTOM BUILD</div>
                    </div>

                    <div class="dagaar-version-panel">
                        <div class="dagaar-version-row"><span>Version</span><b>${DAGAAR_VERSION.version}</b></div>
                        <div class="dagaar-version-row"><span>Edition</span><b>${DAGAAR_VERSION.edition}</b></div>
                        <div class="dagaar-version-row"><span>Maintained By</span><b>${DAGAAR_VERSION.maintained_by}</b></div>
                        <div class="dagaar-version-row"><span>Support</span><b>${DAGAAR_VERSION.support}</b></div>
                    </div>

                    <div class="dagaar-version-footer">${DAGAAR_VERSION.footer}</div>
                </div>
            </div>
        `;

        const dialog = new frappe.ui.Dialog({
            title: "",
            size: "large",
            fields: [{ fieldtype: "HTML", fieldname: "dagaar_version_html" }]
        });

        dialog.fields_dict.dagaar_version_html.$wrapper.html(html);
        dialog.show();
        dialog.$wrapper.find(".modal-header").hide();
        dialog.$wrapper.find(".modal-content").css({ "border-radius": "24px", "overflow": "hidden" });
    }

    function addDagaarVersionMenu() {
        if (!window.jQuery) return;

        $(".dropdown-menu").each(function () {
            const $menu = $(this);
            const menuText = $menu.text() || "";

            const looksLikeUserMenu =
                menuText.indexOf("My Profile") !== -1 ||
                menuText.indexOf("Log out") !== -1 ||
                menuText.indexOf("Logout") !== -1 ||
                menuText.indexOf("Keyboard Shortcuts") !== -1 ||
                menuText.indexOf("Sound Settings") !== -1;

            if (!looksLikeUserMenu) return;
            if ($menu.find(".dagaar-version-menu-item").length) return;

            const item = `
                <a class="dropdown-item dagaar-version-menu-item" href="#">
                    <span class="dagaar-version-menu-icon">D</span>Dagaar Version
                </a>
            `;

            const $sound = $menu.find("a:contains('Sound Settings'), button:contains('Sound Settings')").last();
            const $profile = $menu.find("a:contains('My Profile'), button:contains('My Profile')").last();

            if ($sound.length) {
                $sound.after(item);
            } else if ($profile.length) {
                $profile.after(item);
            } else {
                $menu.prepend(item);
            }
        });
    }

    window.show_dagaar_version_popup = showDagaarVersionPopup;

    $(document).on("click", ".dagaar-version-menu-item", function (e) {
        e.preventDefault();
        e.stopPropagation();
        showDagaarVersionPopup();
    });

    $(document).on("click shown.bs.dropdown", function () {
        setTimeout(addDagaarVersionMenu, 80);
        setTimeout(addDagaarVersionMenu, 300);
    });

    function startDagaarVersionLoader() {
        addDagaarVersionMenu();
        setTimeout(addDagaarVersionMenu, 1000);
        setTimeout(addDagaarVersionMenu, 2500);

        if (window.MutationObserver) {
            let timer = null;
            const observer = new MutationObserver(function () {
                clearTimeout(timer);
                timer = setTimeout(addDagaarVersionMenu, 120);
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startDagaarVersionLoader);
    } else {
        startDagaarVersionLoader();
    }
})();
