export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  { key: "navigation", label: "Navigation", isTitle: true },
  {
    key: "dashboards",
    label: "Dashboards",
    isTitle: false,
    icon: "airplay",
    badge: { variant: "success", text: "4" },
    children: [
      {
        key: "ds-dashboard-1",
        label: "Dashboard ",
        url: "/dashboard-1",
        parentKey: "dashboards",
      },
    ],
  },
  { key: "apps", label: "Apps", isTitle: true },


  {
    key: "apps-ecommerce",
    label: "Book Store",
    isTitle: false,
    icon: "users",
    children: [
      {
        key: "ecommerce-edit-product",
        label: "Add Catalogue",
        url: "/apps/ecommerce/edit-product",
        parentKey: "apps-ecommerce",
      },
      {
        key: "ecommerce-customers",
        label: "Books",
        url: "/apps/ecommerce/customers",
        parentKey: "apps-ecommerce",
      },
      {
        key: "ecommerce-sellers",
        label: "Sellers",
        url: "/apps/ecommerce/sellers",
        parentKey: "apps-ecommerce",
      },
    ],
  },




  {
    key: "apps-calendar",
    label: "Calendar",
    isTitle: false,
    icon: "calendar",
    url: "/apps/calendar",
  },





  {
    key: "apps-crm",
    label: "Administration ",
    isTitle: false,
    icon: "users",
    children: [
      {
        key: "crm-contacts",
        label: "staffs",
        url: "/apps/crm/contacts",
        parentKey: "apps-crm",
      },

      {
        key: "crm-customers",
        label: "Customers",
        url: "/apps/crm/customers",
        parentKey: "apps-crm",
      },
    ],
  },

  {
    key: "apps-projects",
    label: "Projects",
    isTitle: false,
    icon: "briefcase",
    children: [
      {
        key: "project-create-project",
        label: "Create Project",
        url: "/apps/projects/create",
        parentKey: "apps-projects",
      },
    ],
  },

  {
    key: "apps-tickets",
    label: "Tickets",
    isTitle: false,
    icon: "aperture",
    children: [
      {
        key: "tickets-list",
        label: "List",
        url: "/apps/tickets/list",
        parentKey: "apps-tickets",
      },
    ],
  },

  { key: "custom", label: "Custom", isTitle: true },
  {
    key: "extra-pages",
    label: "Extra Pages",
    isTitle: false,
    icon: "package",
    children: [
      {
        key: "page-gallery",
        label: "Gallery",
        url: "/pages/gallery",
        parentKey: "extra-pages",
      },

      {
        key: "page-error-404",
        label: "Error - 404",
        url: "/error-404",
        parentKey: "extra-pages",
      },
    ],
  },
  { key: "components", label: "Components", isTitle: true },
  {
    key: "base-ui",
    label: "Base UI",
    isTitle: false,
    icon: "pocket",
    children: [
      {
        key: "base-ui-buttons",
        label: "Buttons",
        url: "/ui/buttons",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-cards",
        label: "Cards",
        url: "/ui/cards",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-avatars",
        label: "Avatars",
        url: "/ui/avatars",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-portlets",
        label: "Portlets",
        url: "/ui/portlets",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-tabs-accordions",
        label: "Tabs & Accordions",
        url: "/ui/tabs-accordions",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-modals",
        label: "Modals",
        url: "/ui/modals",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-progress",
        label: "Progress",
        url: "/ui/progress",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-notifications",
        label: "Notifications",
        url: "/ui/notifications",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-offcanvas",
        label: "Offcanvas",
        url: "/ui/offcanvas",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-placeholders",
        label: "Placeholders",
        url: "/ui/placeholders",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-spinners",
        label: "Spinners",
        url: "/ui/spinners",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-images",
        label: "Images",
        url: "/ui/images",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-carousel",
        label: "Carousel",
        url: "/ui/carousel",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-listgroups",
        label: "List Groups",
        url: "/ui/listgroups",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-embedvideo",
        label: "Embed Video",
        url: "/ui/embedvideo",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-dropdown",
        label: "Dropdowns",
        url: "/ui/dropdowns",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-ribbons",
        label: "Ribbons",
        url: "/ui/ribbons",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-tooltips-popovers",
        label: "Tooltips & Popovers",
        url: "/ui/tooltips-popovers",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-general",
        label: "General UI",
        url: "/ui/general",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-typography",
        label: "Typography",
        url: "/ui/typography",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-grid",
        label: "Grid",
        url: "/ui/grid",
        parentKey: "base-ui",
      },
    ],
  },

  {
    key: "forms",
    label: "Forms",
    isTitle: false,
    icon: "bookmark",
    children: [
      {
        key: "form-basic",
        label: "General Elements",
        url: "/ui/forms/basic",
        parentKey: "forms",
      },
      {
        key: "form-advanced",
        label: "Form Advanced",
        url: "/ui/forms/advanced",
        parentKey: "forms",
      },

      {
        key: "form-upload",
        label: "File Uploads",
        url: "/ui/forms/upload",
        parentKey: "forms",
      },
    ],
  },
  {
    key: "tables",
    label: "Tables",
    isTitle: false,
    icon: "grid",
    children: [
      {
        key: "table-basic",
        label: "Basic Tables",
        url: "/ui/tables/basic",
        parentKey: "tables",
      },
      {
        key: "table-advanced",
        label: "Advanced Tables",
        url: "/ui/tables/advanced",
        parentKey: "tables",
      },
    ],
  },

  {
    key: "menu-levels",
    label: "Authentication",
    isTitle: false,
    icon: "share-2",
    children: [
      {
        key: "menu-levels-1-1",
        label: "Register",
        url: "/auth/register",
        parentKey: "menu-levels",
    
      },
      {
        key: "menu-levels-1-2",
        label: "Login",
        url: "/auth/login",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Forget Password",
        url: "/auth/forget-password",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Confirm",
        url: "/auth/confirm",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "SignIn-SignUp",
        url: "/auth/signin-signup",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Logout",
        url: "/auth/logout",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Lock Screen",
        url: "/auth/lock-screen",
        parentKey: "menu-levels",
      },
    ],
  },
];
















const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    icon: "home",
    label: "Dashboard",
    isTitle: true,
    children: [
      {
        key: "ds-dashboard-1",
        label: "Dashboard 1",
        url: "/dashboard-1",
        parentKey: "dashboard",
      },
    ],
  },
  {
    key: "apps",
    icon: "grid",
    label: "Apps",
    isTitle: true,
    children: [
      {
        key: "apps-calendar",
        label: "Calendar",
        isTitle: false,
        icon: "calendar",
        url: "/apps/calendar",
        parentKey: "apps",
      },

      {
        key: "apps-ecommerce",
        label: "Ecommerce",
        isTitle: false,
        icon: "shopping-cart",
        children: [
          {
            key: "ecommerce-edit-product",
            label: "Add Product",
            url: "/apps/ecommerce/edit-product",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-customers",
            label: "Customers",
            url: "/apps/ecommerce/customers",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-sellers",
            label: "Sellers",
            url: "/apps/ecommerce/sellers",
            parentKey: "apps-ecommerce",
          },
        ],
      },
      {
        key: "apps-crm",
        label: "CRM",
        isTitle: false,
        icon: "users",
        parentKey: "apps",
        children: [
          {
            key: "crm-dashboard",
            label: "Dashboard",
            url: "/apps/crm/dashboard",
            parentKey: "apps-crm",
          },
          {
            key: "crm-contacts",
            label: "Contacts",
            url: "/apps/crm/contacts",
            parentKey: "apps-crm",
          },
          {
            key: "crm-opportunities",
            label: "Opportunities",
            url: "/apps/crm/opportunities",
            parentKey: "apps-crm",
          },
          {
            key: "crm-leads",
            label: "Leads",
            url: "/apps/crm/leads",
            parentKey: "apps-crm",
          },
          {
            key: "crm-customers",
            label: "Customers",
            url: "/apps/crm/customers",
            parentKey: "apps-crm",
          },
        ],
      },
      {
        key: "apps-email",
        label: "Email",
        isTitle: false,
        icon: "mail",
        parentKey: "apps",
        children: [
          {
            key: "email-inbox",
            label: "Inbox",
            url: "/apps/email/inbox",
            parentKey: "apps-email",
          },
          {
            key: "email-read-email",
            label: "Read Email",
            url: "/apps/email/details",
            parentKey: "apps-email",
          },
          {
            key: "email-compose-email",
            label: "Compose Email",
            url: "/apps/email/compose",
            parentKey: "apps-email",
          },
        ],
      },
      {
        key: "apps-social",
        label: "Social Feed",
        isTitle: false,
        icon: "rss",
        url: "/apps/social-feed",
        badge: { variant: "pink", text: "Hot" },
        parentKey: "apps",
      },
      {
        key: "apps-companies",
        label: "Companies",
        isTitle: false,
        icon: "activity",
        url: "/apps/companies",
        parentKey: "apps",
      },
      {
        key: "apps-projects",
        label: "Projects",
        isTitle: false,
        icon: "briefcase",
        parentKey: "apps",
        children: [
          {
            key: "project-list",
            label: "List",
            url: "/apps/projects/list",
            parentKey: "apps-projects",
          },
          {
            key: "project-details",
            label: "Details",
            url: "/apps/projects/:id/details",
            parentKey: "apps-projects",
          },
          {
            key: "project-create-project",
            label: "Create Project",
            url: "/apps/projects/create",
            parentKey: "apps-projects",
          },
        ],
      },
      {
        key: "apps-tasks",
        label: "Tasks",
        isTitle: false,
        icon: "clipboard",
        parentKey: "apps",
        children: [
          {
            key: "task-list",
            label: "List",
            url: "/apps/tasks/list",
            parentKey: "apps-tasks",
          },
          {
            key: "task-details",
            label: "Details",
            url: "/apps/tasks/details",
            parentKey: "apps-tasks",
          },
          {
            key: "task-kanban",
            label: "Kanban Board",
            url: "/apps/tasks/kanban",
            parentKey: "apps-tasks",
          },
        ],
      },
      {
        key: "apps-contacts",
        label: "Contacts",
        isTitle: false,
        icon: "book",
        parentKey: "apps",
        children: [
          {
            key: "contacts-list",
            label: "Members List",
            url: "/apps/contacts/list",
            parentKey: "apps-contacts",
          },
          {
            key: "contacts-profile",
            label: "Profile",
            url: "/apps/contacts/profile",
            parentKey: "apps-contacts",
          },
        ],
      },
      {
        key: "apps-tickets",
        label: "Tickets",
        isTitle: false,
        icon: "aperture",
        parentKey: "apps",
        children: [
          {
            key: "tickets-list",
            label: "List",
            url: "/apps/tickets/list",
            parentKey: "apps-tickets",
          },
          {
            key: "tickets-details",
            label: "Details",
            url: "/apps/tickets/details",
            parentKey: "apps-tickets",
          },
        ],
      },
      {
        key: "apps-file-manager",
        label: "File Manager",
        isTitle: false,
        icon: "folder-plus",
        url: "/apps/file-manager",
        parentKey: "apps",
      },
    ],
  },
  {
    key: "base-ui",
    icon: "briefcase",
    label: "UI Elements",
    isTitle: true,
    children: [
      {
        key: "base-ui-buttons",
        label: "Buttons",
        url: "/ui/buttons",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-cards",
        label: "Cards",
        url: "/ui/cards",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-avatars",
        label: "Avatars",
        url: "/ui/avatars",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-portlets",
        label: "Portlets",
        url: "/ui/portlets",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-tabs-accordions",
        label: "Tabs & Accordions",
        url: "/ui/tabs-accordions",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-modals",
        label: "Modals",
        url: "/ui/modals",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-progress",
        label: "Progress",
        url: "/ui/progress",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-notifications",
        label: "Notifications",
        url: "/ui/notifications",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-offcanvas",
        label: "Offcanvas",
        url: "/ui/offcanvas",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-placeholders",
        label: "Placeholders",
        url: "/ui/placeholders",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-spinners",
        label: "Spinners",
        url: "/ui/spinners",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-images",
        label: "Images",
        url: "/ui/images",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-carousel",
        label: "Carousel",
        url: "/ui/carousel",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-listgroups",
        label: "List Groups",
        url: "/ui/listgroups",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-embedvideo",
        label: "Embed Video",
        url: "/ui/embedvideo",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-dropdown",
        label: "Dropdowns",
        url: "/ui/dropdowns",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-ribbons",
        label: "Ribbons",
        url: "/ui/ribbons",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-tooltips-popovers",
        label: "Tooltips & Popovers",
        url: "/ui/tooltips-popovers",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-general",
        label: "General UI",
        url: "/ui/general",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-typography",
        label: "Typography",
        url: "/ui/typography",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-grid",
        label: "Grid",
        url: "/ui/grid",
        parentKey: "base-ui",
      },
    ],
  },
  {
    key: "components",
    icon: "package",
    label: "Components",
    isTitle: true,
    children: [
      {
        key: "extended-ui",
        label: "Extended UI",
        isTitle: false,
        icon: "layers",
        badge: { variant: "info", text: "Hot" },
        parentKey: "components",
        children: [
          {
            key: "extended-ui-nestable",
            label: "Nestable List",
            url: "/extended-ui/nestable",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-dragdrop",
            label: "Drag and Drop",
            url: "/extended-ui/dragdrop",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-rangesliders",
            label: "Range Sliders",
            url: "/extended-ui/rangesliders",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-animation",
            label: "Animation",
            url: "/extended-ui/animation",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-sweet-alert",
            label: "Sweet Alert",
            url: "/extended-ui/sweet-alert",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-tour",
            label: "Tour Page",
            url: "/extended-ui/tour",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-loading-buttons",
            label: "Loading Buttons",
            url: "/extended-ui/loading-buttons",
            parentKey: "extended-ui",
          },
        ],
      },
      {
        key: "widgets",
        label: "Widgets",
        isTitle: false,
        icon: "gift",
        url: "/ui/widgets",
        parentKey: "components",
      },
      {
        key: "icons",
        label: "Icons",
        isTitle: false,
        icon: "cpu",
        parentKey: "components",
        children: [
          {
            key: "icon-two-tone",
            label: "Two Tone Icons",
            url: "/ui/icons/two-tone",
            parentKey: "icons",
          },
          {
            key: "icon-feather",
            label: "Feather Icons",
            url: "/ui/icons/feather",
            parentKey: "icons",
          },
          {
            key: "icon-mdiicons",
            label: "Material Design Icons",
            url: "/ui/icons/mdi",
            parentKey: "icons",
          },
          {
            key: "icon-dripicons",
            label: "Dripicons",
            url: "/ui/icons/dripicons",
            parentKey: "icons",
          },
          {
            key: "icon-font-awesome",
            label: "Font Awesome 5",
            url: "/ui/icons/font-awesome",
            parentKey: "icons",
          },
          {
            key: "icon-themify",
            label: "Themify",
            url: "/ui/icons/themify",
            parentKey: "icons",
          },
          {
            key: "icon-simple-line",
            label: "Simple Line",
            url: "/ui/icons/simple-line",
            parentKey: "icons",
          },
          {
            key: "icon-weather",
            label: "Weather",
            url: "/ui/icons/weather",
            parentKey: "icons",
          },
        ],
      },
      {
        key: "forms",
        label: "Forms",
        isTitle: false,
        icon: "bookmark",
        parentKey: "components",
        children: [
          {
            key: "form-basic",
            label: "General Elements",
            url: "/ui/forms/basic",
            parentKey: "forms",
          },
          {
            key: "form-advanced",
            label: "Form Advanced",
            url: "/ui/forms/advanced",
            parentKey: "forms",
          },
          {
            key: "form-validation",
            label: "Validation",
            url: "/ui/forms/validation",
            parentKey: "forms",
          },
          {
            key: "form-wizard",
            label: "Wizard",
            url: "/ui/forms/wizard",
            parentKey: "forms",
          },
          {
            key: "form-upload",
            label: "File Uploads",
            url: "/ui/forms/upload",
            parentKey: "forms",
          },
          {
            key: "form-editors",
            label: "Editors",
            url: "/ui/forms/editors",
            parentKey: "forms",
          },
        ],
      },
      {
        key: "tables",
        label: "Tables",
        isTitle: false,
        icon: "grid",
        parentKey: "components",
        children: [
          {
            key: "table-basic",
            label: "Basic Tables",
            url: "/ui/tables/basic",
            parentKey: "tables",
          },
          {
            key: "table-advanced",
            label: "Advanced Tables",
            url: "/ui/tables/advanced",
            parentKey: "tables",
          },
        ],
      },
      {
        key: "charts",
        label: "Charts",
        isTitle: false,
        parentKey: "components",
        icon: "bar-chart-2",
        children: [
          {
            key: "chart-apex",
            label: "Apex Charts",
            url: "/ui/charts/apex",
            parentKey: "charts",
          },
          {
            key: "chart-chartjs",
            label: "Chartjs",
            url: "/ui/charts/chartjs",
            parentKey: "charts",
          },
        ],
      },
      {
        key: "maps",
        label: "Maps",
        isTitle: false,
        icon: "map",
        parentKey: "components",
        children: [
          {
            key: "maps-googlemaps",
            label: "Google Maps",
            url: "/ui/googlemaps",
            parentKey: "maps",
          },
          {
            key: "maps-vectormaps",
            label: "Vector Maps",
            url: "/ui/vectormaps",
            parentKey: "maps",
          },
        ],
      },
      {
        key: "menu-levels",
        label: "Menu Levels",
        isTitle: false,
        icon: "share-2",
        parentKey: "components",
        children: [
          {
            key: "menu-levels-1-1",
            label: "Level 1.1",
            url: "/",
            parentKey: "menu-levels",
            children: [
              {
                key: "menu-levels-2-1",
                label: "Level 2.1",
                url: "/",
                parentKey: "menu-levels-1-1",
                children: [
                  {
                    key: "menu-levels-3-1",
                    label: "Level 3.1",
                    url: "/",
                    parentKey: "menu-levels-2-1",
                  },
                  {
                    key: "menu-levels-3-2",
                    label: "Level 3.2",
                    url: "/",
                    parentKey: "menu-levels-2-1",
                  },
                ],
              },
              {
                key: "menu-levels-2-2",
                label: "Level 2.2",
                url: "/",
                parentKey: "menu-levels-1-1",
              },
            ],
          },
          {
            key: "menu-levels-1-2",
            label: "Level 1.2",
            url: "/",
            parentKey: "menu-levels",
          },
        ],
      },
    ],
  },
  {
    key: "pages",
    icon: "file-text",
    label: "Pages",
    isTitle: true,
    children: [
      {
        key: "error-pages",
        label: "Errors",
        isTitle: false,
        parentKey: "pages",
        children: [
          {
            key: "page-error-404",
            label: "Error - 404",
            url: "/error-404",
            parentKey: "error-pages",
          },
          {
            key: "page-error-404-two",
            label: "Error - 404 Two",
            url: "/error-404-two",
            parentKey: "error-pages",
          },
          {
            key: "page-error-404-alt",
            label: "Error - 404-alt",
            url: "/pages/error-404-alt",
            parentKey: "error-pages",
          },
          {
            key: "page-error-500",
            label: "Error - 500",
            url: "/error-500",
            parentKey: "error-pages",
          },
          {
            key: "page-error-500-two",
            label: "Error - 500 Two",
            url: "/error-500-two",
            parentKey: "error-pages",
          },
        ],
      },
      {
        key: "extra-pages",
        label: "Utility",
        isTitle: false,
        parentKey: "pages",
        children: [
          {
            key: "page-starter",
            label: "Starter",
            url: "/pages/starter",
            parentKey: "extra-pages",
          },
          {
            key: "page-timeline",
            label: "Timeline",
            url: "/pages/timeline",
            parentKey: "extra-pages",
          },
          {
            key: "page-sitemap",
            label: "Sitemap",
            url: "/pages/sitemap",
            parentKey: "extra-pages",
          },
          {
            key: "page-invoice",
            label: "Invoice",
            url: "/pages/invoice",
            parentKey: "extra-pages",
          },
          {
            key: "page-faq",
            label: "FAQs",
            url: "/pages/faq",
            parentKey: "extra-pages",
          },
          {
            key: "page-search-result",
            label: "Search Results",
            url: "/pages/serach-results",
            parentKey: "extra-pages",
          },
          {
            key: "page-pricing",
            label: "Pricing",
            url: "/pages/pricing",
            parentKey: "extra-pages",
          },
          {
            key: "page-maintenance",
            label: "Maintenance",
            url: "/maintenance",
            target: "_blank",
            parentKey: "extra-pages",
          },
          {
            key: "page-upcoming",
            label: "Coming Soon",
            url: "/upcoming",
            parentKey: "extra-pages",
          },
          {
            key: "page-gallery",
            label: "Gallery",
            url: "/pages/gallery",
            parentKey: "extra-pages",
          },
        ],
      },
    ],
  },
];

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    icon: "home",
    label: "Dashboard",
    isTitle: true,
    children: [
      {
        key: "ds-dashboard-1",
        label: "Dashboard 1",
        url: "/dashboard-1",
        parentKey: "dashboard",
      },
    ],
  },
  {
    key: "apps",
    icon: "grid",
    label: "Apps",
    isTitle: true,
    children: [
      {
        key: "apps-calendar",
        label: "Calendar",
        isTitle: false,
        icon: "calendar",
        url: "/apps/calendar",
        parentKey: "apps",
      },

      {
        key: "apps-ecommerce",
        label: "Ecommerce",
        isTitle: false,
        icon: "shopping-cart",
        children: [
          {
            key: "ecommerce-edit-product",
            label: "Add Product",
            url: "/apps/ecommerce/edit-product",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-customers",
            label: "Customers",
            url: "/apps/ecommerce/customers",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-sellers",
            label: "Sellers",
            url: "/apps/ecommerce/sellers",
            parentKey: "apps-ecommerce",
          },
        ],
      },
      {
        key: "apps-crm",
        label: "CRM",
        isTitle: false,
        icon: "users",
        parentKey: "apps",
        children: [
          {
            key: "crm-dashboard",
            label: "Dashboard",
            url: "/apps/crm/dashboard",
            parentKey: "apps-crm",
          },
          {
            key: "crm-contacts",
            label: "Contacts",
            url: "/apps/crm/contacts",
            parentKey: "apps-crm",
          },
          {
            key: "crm-opportunities",
            label: "Opportunities",
            url: "/apps/crm/opportunities",
            parentKey: "apps-crm",
          },
          {
            key: "crm-leads",
            label: "Leads",
            url: "/apps/crm/leads",
            parentKey: "apps-crm",
          },
          {
            key: "crm-customers",
            label: "Customers",
            url: "/apps/crm/customers",
            parentKey: "apps-crm",
          },
        ],
      },
      {
        key: "apps-email",
        label: "Email",
        isTitle: false,
        icon: "mail",
        parentKey: "apps",
        children: [
          {
            key: "email-inbox",
            label: "Inbox",
            url: "/apps/email/inbox",
            parentKey: "apps-email",
          },
          {
            key: "email-read-email",
            label: "Read Email",
            url: "/apps/email/details",
            parentKey: "apps-email",
          },
          {
            key: "email-compose-email",
            label: "Compose Email",
            url: "/apps/email/compose",
            parentKey: "apps-email",
          },
        ],
      },
      {
        key: "apps-social",
        label: "Social Feed",
        isTitle: false,
        icon: "rss",
        url: "/apps/social-feed",
        badge: { variant: "pink", text: "Hot" },
        parentKey: "apps",
      },
      {
        key: "apps-companies",
        label: "Companies",
        isTitle: false,
        icon: "activity",
        url: "/apps/companies",
        parentKey: "apps",
      },
      {
        key: "apps-projects",
        label: "Projects",
        isTitle: false,
        icon: "briefcase",
        parentKey: "apps",
        children: [
          {
            key: "project-list",
            label: "List",
            url: "/apps/projects/list",
            parentKey: "apps-projects",
          },
          {
            key: "project-details",
            label: "Details",
            url: "/apps/projects/:id/details",
            parentKey: "apps-projects",
          },
          {
            key: "project-create-project",
            label: "Create Project",
            url: "/apps/projects/create",
            parentKey: "apps-projects",
          },
        ],
      },
      {
        key: "apps-tasks",
        label: "Tasks",
        isTitle: false,
        icon: "clipboard",
        parentKey: "apps",
        children: [
          {
            key: "task-list",
            label: "List",
            url: "/apps/tasks/list",
            parentKey: "apps-tasks",
          },
          {
            key: "task-details",
            label: "Details",
            url: "/apps/tasks/details",
            parentKey: "apps-tasks",
          },
          {
            key: "task-kanban",
            label: "Kanban Board",
            url: "/apps/tasks/kanban",
            parentKey: "apps-tasks",
          },
        ],
      },
      {
        key: "apps-contacts",
        label: "Contacts",
        isTitle: false,
        icon: "book",
        parentKey: "apps",
        children: [
          {
            key: "contacts-list",
            label: "Members List",
            url: "/apps/contacts/list",
            parentKey: "apps-contacts",
          },
          {
            key: "contacts-profile",
            label: "Profile",
            url: "/apps/contacts/profile",
            parentKey: "apps-contacts",
          },
        ],
      },
      {
        key: "apps-tickets",
        label: "Tickets",
        isTitle: false,
        icon: "aperture",
        parentKey: "apps",
        children: [
          {
            key: "tickets-list",
            label: "List",
            url: "/apps/tickets/list",
            parentKey: "apps-tickets",
          },
          {
            key: "tickets-details",
            label: "Details",
            url: "/apps/tickets/details",
            parentKey: "apps-tickets",
          },
        ],
      },
      {
        key: "apps-file-manager",
        label: "File Manager",
        isTitle: false,
        icon: "folder-plus",
        url: "/apps/file-manager",
        parentKey: "apps",
      },
    ],
  },
  {
    key: "extra-pages",
    icon: "file-text",
    label: "Pages",
    isTitle: true,
    children: [
      {
        key: "page-starter",
        label: "Starter",
        url: "/pages/starter",
        parentKey: "extra-pages",
      },
      {
        key: "page-timeline",
        label: "Timeline",
        url: "/pages/timeline",
        parentKey: "extra-pages",
      },
      {
        key: "page-sitemap",
        label: "Sitemap",
        url: "/pages/sitemap",
        parentKey: "extra-pages",
      },
      {
        key: "page-invoice",
        label: "Invoice",
        url: "/pages/invoice",
        parentKey: "extra-pages",
      },
      {
        key: "page-faq",
        label: "FAQs",
        url: "/pages/faq",
        parentKey: "extra-pages",
      },
      {
        key: "page-search-result",
        label: "Search Results",
        url: "/pages/serach-results",
        parentKey: "extra-pages",
      },
      {
        key: "page-pricing",
        label: "Pricing",
        url: "/pages/pricing",
        parentKey: "extra-pages",
      },
      {
        key: "page-maintenance",
        label: "Maintenance",
        url: "/maintenance",
        target: "_blank",
        parentKey: "extra-pages",
      },
      {
        key: "page-upcoming",
        label: "Coming Soon",
        url: "/upcoming",
        parentKey: "extra-pages",
      },
      {
        key: "page-gallery",
        label: "Gallery",
        url: "/pages/gallery",
        parentKey: "extra-pages",
      },

      {
        key: "page-error-404",
        label: "Error - 404",
        url: "/error-404",
        parentKey: "extra-pages",
      },
      {
        key: "page-error-404-two",
        label: "Error - 404 Two",
        url: "/error-404-two",
        parentKey: "extra-pages",
      },
      {
        key: "page-error-404-alt",
        label: "Error - 404-alt",
        url: "/pages/error-404-alt",
        parentKey: "extra-pages",
      },
      {
        key: "page-error-500",
        label: "Error - 500",
        url: "/error-500",
        parentKey: "extra-pages",
      },
      {
        key: "page-error-500-two",
        label: "Error - 500 Two",
        url: "/error-500-two",
        parentKey: "extra-pages",
      },
    ],
  },
  {
    key: "base-ui",
    icon: "briefcase",
    label: "UI Elements",
    isTitle: true,
    children: [
      {
        key: "base-ui-buttons",
        label: "Buttons",
        url: "/ui/buttons",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-cards",
        label: "Cards",
        url: "/ui/cards",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-avatars",
        label: "Avatars",
        url: "/ui/avatars",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-portlets",
        label: "Portlets",
        url: "/ui/portlets",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-tabs-accordions",
        label: "Tabs & Accordions",
        url: "/ui/tabs-accordions",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-modals",
        label: "Modals",
        url: "/ui/modals",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-progress",
        label: "Progress",
        url: "/ui/progress",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-notifications",
        label: "Notifications",
        url: "/ui/notifications",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-offcanvas",
        label: "Offcanvas",
        url: "/ui/offcanvas",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-placeholders",
        label: "Placeholders",
        url: "/ui/placeholders",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-spinners",
        label: "Spinners",
        url: "/ui/spinners",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-images",
        label: "Images",
        url: "/ui/images",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-carousel",
        label: "Carousel",
        url: "/ui/carousel",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-listgroups",
        label: "List Groups",
        url: "/ui/listgroups",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-embedvideo",
        label: "Embed Video",
        url: "/ui/embedvideo",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-dropdown",
        label: "Dropdowns",
        url: "/ui/dropdowns",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-ribbons",
        label: "Ribbons",
        url: "/ui/ribbons",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-tooltips-popovers",
        label: "Tooltips & Popovers",
        url: "/ui/tooltips-popovers",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-general",
        label: "General UI",
        url: "/ui/general",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-typography",
        label: "Typography",
        url: "/ui/typography",
        parentKey: "base-ui",
      },
      {
        key: "base-ui-grid",
        label: "Grid",
        url: "/ui/grid",
        parentKey: "base-ui",
      },
    ],
  },
  {
    key: "components",
    icon: "package",
    label: "Components",
    isTitle: true,
    children: [
      {
        key: "extended-ui",
        label: "Extended UI",
        isTitle: false,
        icon: "layers",
        badge: { variant: "info", text: "Hot" },
        parentKey: "components",
        children: [
          {
            key: "extended-ui-nestable",
            label: "Nestable List",
            url: "/extended-ui/nestable",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-dragdrop",
            label: "Drag and Drop",
            url: "/extended-ui/dragdrop",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-rangesliders",
            label: "Range Sliders",
            url: "/extended-ui/rangesliders",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-animation",
            label: "Animation",
            url: "/extended-ui/animation",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-sweet-alert",
            label: "Sweet Alert",
            url: "/extended-ui/sweet-alert",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-tour",
            label: "Tour Page",
            url: "/extended-ui/tour",
            parentKey: "extended-ui",
          },
          {
            key: "extended-ui-loading-buttons",
            label: "Loading Buttons",
            url: "/extended-ui/loading-buttons",
            parentKey: "extended-ui",
          },
        ],
      },
      {
        key: "icons",
        label: "Icons",
        isTitle: false,
        icon: "cpu",
        parentKey: "components",
        children: [
          {
            key: "icon-two-tone",
            label: "Two Tone Icons",
            url: "/ui/icons/two-tone",
            parentKey: "icons",
          },
          {
            key: "icon-feather",
            label: "Feather Icons",
            url: "/ui/icons/feather",
            parentKey: "icons",
          },
          {
            key: "icon-mdiicons",
            label: "Material Design Icons",
            url: "/ui/icons/mdi",
            parentKey: "icons",
          },
          {
            key: "icon-dripicons",
            label: "Dripicons",
            url: "/ui/icons/dripicons",
            parentKey: "icons",
          },
          {
            key: "icon-font-awesome",
            label: "Font Awesome 5",
            url: "/ui/icons/font-awesome",
            parentKey: "icons",
          },
          {
            key: "icon-themify",
            label: "Themify",
            url: "/ui/icons/themify",
            parentKey: "icons",
          },
          {
            key: "icon-simple-line",
            label: "Simple Line",
            url: "/ui/icons/simple-line",
            parentKey: "icons",
          },
          {
            key: "icon-weather",
            label: "Weather",
            url: "/ui/icons/weather",
            parentKey: "icons",
          },
        ],
      },
      {
        key: "forms",
        label: "Forms",
        isTitle: false,
        icon: "bookmark",
        parentKey: "components",
        children: [
          {
            key: "form-basic",
            label: "General Elements",
            url: "/ui/forms/basic",
            parentKey: "forms",
          },
          {
            key: "form-advanced",
            label: "Form Advanced",
            url: "/ui/forms/advanced",
            parentKey: "forms",
          },
          {
            key: "form-validation",
            label: "Validation",
            url: "/ui/forms/validation",
            parentKey: "forms",
          },
          {
            key: "form-wizard",
            label: "Wizard",
            url: "/ui/forms/wizard",
            parentKey: "forms",
          },
          {
            key: "form-upload",
            label: "File Uploads",
            url: "/ui/forms/upload",
            parentKey: "forms",
          },
          {
            key: "form-editors",
            label: "Editors",
            url: "/ui/forms/editors",
            parentKey: "forms",
          },
        ],
      },
      {
        key: "tables",
        label: "Tables",
        isTitle: false,
        icon: "grid",
        parentKey: "components",
        children: [
          {
            key: "table-basic",
            label: "Basic Tables",
            url: "/ui/tables/basic",
            parentKey: "tables",
          },
          {
            key: "table-advanced",
            label: "Advanced Tables",
            url: "/ui/tables/advanced",
            parentKey: "tables",
          },
        ],
      },
      {
        key: "charts",
        label: "Charts",
        isTitle: false,
        parentKey: "components",
        icon: "bar-chart-2",
        children: [
          {
            key: "chart-apex",
            label: "Apex Charts",
            url: "/ui/charts/apex",
            parentKey: "charts",
          },
          {
            key: "chart-chartjs",
            label: "Chartjs",
            url: "/ui/charts/chartjs",
            parentKey: "charts",
          },
        ],
      },
      {
        key: "maps",
        label: "Maps",
        isTitle: false,
        icon: "map",
        parentKey: "components",
        children: [
          {
            key: "maps-googlemaps",
            label: "Google Maps",
            url: "/ui/googlemaps",
            parentKey: "maps",
          },
          {
            key: "maps-vectormaps",
            label: "Vector Maps",
            url: "/ui/vectormaps",
            parentKey: "maps",
          },
        ],
      },
      {
        key: "menu-levels",
        label: "Menu Levels",
        isTitle: false,
        icon: "share-2",
        parentKey: "components",
        children: [
          {
            key: "menu-levels-1-1",
            label: "Level 1.1",
            url: "/",
            parentKey: "menu-levels",
            children: [
              {
                key: "menu-levels-2-1",
                label: "Level 2.1",
                url: "/",
                parentKey: "menu-levels-1-1",
                children: [
                  {
                    key: "menu-levels-3-1",
                    label: "Level 3.1",
                    url: "/",
                    parentKey: "menu-levels-2-1",
                  },
                  {
                    key: "menu-levels-3-2",
                    label: "Level 3.2",
                    url: "/",
                    parentKey: "menu-levels-2-1",
                  },
                ],
              },
              {
                key: "menu-levels-2-2",
                label: "Level 2.2",
                url: "/",
                parentKey: "menu-levels-1-1",
              },
            ],
          },
          {
            key: "menu-levels-1-2",
            label: "Level 1.2",
            url: "/",
            parentKey: "menu-levels",
          },
        ],
      },
    ],
  },
  {
    isTitle: true,
    key: "widgets",
    label: "Other page",
    icon: "gift",
    url: "/ui/widgets",
    children: [
      {
        key: "widgets1",
        label: "Widgets",
        url: "/ui/widgets",
        parentKey: "widgets",
      },
    ],
  },
  // {
  //     key: 'widgets',
  //     label: 'Widgets',
  //     isTitle: false,
  //     icon: 'gift',
  //     url: '/ui/widgets',
  // },
];

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
