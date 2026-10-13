import { createContext, useContext, useState, type ReactNode } from "react";

type Profile = "frontend" | "salesforce";

interface ProfileContextType {
  profile: Profile;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

function getInitialProfile(): Profile {
  const params = new URLSearchParams(window.location.search);
  const queryProfile = params.get("profile");

  return queryProfile === "salesforce" ? "salesforce" : "frontend";
}

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile] = useState<Profile>(getInitialProfile);

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
};
