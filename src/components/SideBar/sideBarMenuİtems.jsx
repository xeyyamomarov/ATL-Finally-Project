import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import GroupsIcon from '@mui/icons-material/Groups';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';



const sideBarMenuİtems = [
  {
    key: "home",
    label: "Əsas səhifə",
    icon: <ViewCompactIcon />,
    path: "/",
    items: [],
  },
  {
    key: "employees",
    label: "Əməkdaşlar",
    icon: <GroupsIcon />,
    path: "/employees",
    items: [],
  },
  {
    key: "inquiries",
    label: "Sorğular",
    icon: <DriveFileRenameOutlineIcon />,
    path: "/",
    items: [
      { key: "day-off", label: "Day off", path: "/day-off" },
      { key: "business-trip", label: "Ezamiyyət", path: "/business-trip" },
      { key: "vacation", label: "Məzuniyyət", path: "/vacation" },
      { key: "guest", label: "Qonaq", path: "/guest" },
      { key: "in-supply", label: "IT təchizat", path: "/it-supply" },
      { key: "purchase", label: "Satınalma", path: "/purchase" },
    ],
  },
  {
    key: "notifications",
    label: "Elanlar",
    icon: <CampaignIcon />,
    path: "/",
    items: [{ key: "notification", label: "Elan", path: "/notifications" }],
  },
  {
    key: "settings",
    label: "Parametrlər",
    icon: <SettingsIcon />,
    path: "/",
    items: [
      { key: "users", label: "Istifadəçilər", path: "/users" },
      { key: "user-roles", label: "İstifadəçi rolları", path: "user-roles" },
    ],
  },
];

export default sideBarMenuİtems;
