(() => {
  // ../dagaar_version/dagaar_version/public/dagaar_version.bundle.js
  (function() {
    "use strict";
    const DAGAAR_CONFIG = {
      title: "About",
      apps: [
        { name: "Frappe Framework", version: "v16.23.1" },
        { name: "ERPNext", version: "v16.22.0" }
      ]
    };
    let dagaar_dialog = null;
    function isSystemManager() {
      if (!window.frappe || !window.frappe.boot || !window.frappe.boot.user)
        return false;
      const roles = window.frappe.boot.user.roles || [];
      return roles.includes("System Manager");
    }
    function showDagaarVersionPopup() {
      if (!window.frappe)
        return;
      if (dagaar_dialog && dagaar_dialog.display) {
        return;
      }
      const html = `
            <style>
                .dagaar-v16-shell {
                    margin: -15px;
                    padding: 20px;
                    background: var(--bg-color, #ffffff);
                    color: var(--text-color, #1f2937);
                    font-family: var(--font-stack, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif);
                }
                .dagaar-section-label {
                    font-weight: 600;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted, #6b7280);
                    margin-bottom: 12px;
                }
                .dagaar-app-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 15px;
                    background: var(--card-bg, #ffffff);
                    border: 1px solid var(--border-color, #e5e7eb);
                    border-radius: 10px;
                    margin-bottom: 8px;
                    transition: border-color 0.2s;
                }
                .dagaar-app-row:hover {
                    border-color: var(--primary-color, #171717);
                }
                .dagaar-app-name {
                    font-weight: 500;
                    font-size: 14px;
                }
                .dagaar-app-ver {
                    font-family: var(--font-mono, monospace);
                    font-size: 12px;
                    background: var(--bg-light-gray, #f3f4f6);
                    padding: 2px 8px;
                    border-radius: 4px;
                    color: var(--text-muted, #4b5563);
                }
            </style>

            <div class="dagaar-v16-shell">
                <div class="dagaar-section-label">Core Frameworks</div>
                <div class="dagaar-apps-container">
                    ${DAGAAR_CONFIG.apps.map((app) => `
                        <div class="dagaar-app-row">
                            <span class="dagaar-app-name">${app.name}</span>
                            <span class="dagaar-app-ver">${app.version}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
      dagaar_dialog = new frappe.ui.Dialog({
        title: DAGAAR_CONFIG.title,
        size: "small",
        fields: [{ fieldtype: "HTML", fieldname: "dagaar_html" }]
      });
      dagaar_dialog.fields_dict.dagaar_html.$wrapper.html(html);
      dagaar_dialog.show();
      dagaar_dialog.$wrapper.find(".modal-title").html(DAGAAR_CONFIG.title);
      dagaar_dialog.$wrapper.find(".modal-content").css({ "border-radius": "12px", "overflow": "hidden" });
    }
    function addDagaarVersionMenu() {
      if (!window.jQuery || !isSystemManager())
        return;
      $(".dropdown-menu").each(function() {
        const $menu = $(this);
        const menuText = $menu.text() || "";
        const looksLikeUserMenu = menuText.indexOf("My Profile") !== -1 || menuText.indexOf("Log out") !== -1 || menuText.indexOf("Logout") !== -1 || menuText.indexOf("Keyboard Shortcuts") !== -1 || menuText.indexOf("Sound Settings") !== -1;
        if (!looksLikeUserMenu)
          return;
        if ($menu.find(".dagaar-version-menu-item").length)
          return;
        const item = `
                <li>
                    <a class="dropdown-item dagaar-version-menu-item" href="#" onclick="return false;">
                        <span class="dagaar-version-menu-icon"></span>About
                    </a>
                </li>
            `;
        const $sound = $menu.find("a:contains('Sound Settings'), button:contains('Sound Settings')").last();
        const $profile = $menu.find("a:contains('My Profile'), button:contains('My Profile')").last();
        if ($sound.length) {
          $sound.closest("li").after(item);
        } else if ($profile.length) {
          $profile.closest("li").after(item);
        } else {
          $menu.prepend(item);
        }
      });
    }
    window.show_dagaar_version_popup = showDagaarVersionPopup;
    $(document).off("click.dagaar").on("click.dagaar", ".dagaar-version-menu-item", function(e) {
      e.preventDefault();
      e.stopPropagation();
      showDagaarVersionPopup();
      return false;
    });
    $(document).on("shown.bs.dropdown", function() {
      setTimeout(addDagaarVersionMenu, 80);
    });
    function startDagaarVersionLoader() {
      if (!isSystemManager())
        return;
      addDagaarVersionMenu();
      if (window.MutationObserver) {
        let timer = null;
        const observer = new MutationObserver(function() {
          clearTimeout(timer);
          timer = setTimeout(addDagaarVersionMenu, 150);
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
})();
//# sourceMappingURL=dagaar_version.bundle.2BFONQYI.js.map
