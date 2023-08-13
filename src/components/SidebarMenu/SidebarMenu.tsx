import GitHubBtn from "./GitHubBtn";
import Discord from "./Discord";
import SettingsBtn from "./SettingsBtn";
import ShareBtn from "./ShareBtn";

interface SidebarMenu {
  OpenCloseSettings(): void;
  OpenCloseSharePost(): void;
}

function SidebarMenu({ OpenCloseSettings, OpenCloseSharePost }: SidebarMenu) {
  return (
    <div className="h-10 bg-neutral-900 absolute bottom-0 left-0 w-full flex justify-around items-center">
      <GitHubBtn />
      <Discord />
      <SettingsBtn OpenCloseSettings={OpenCloseSettings} />
      <ShareBtn OpenCloseSharePost={OpenCloseSharePost} />

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#0a0a0a"
          className="w-6 h-6 bg-neutral-300 px-1 rounded-lg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SidebarMenu;
