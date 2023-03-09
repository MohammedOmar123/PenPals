import { useSignout } from "@/hooks/auth.hook";
import authStore from "@/store/AuthStore";
import { arabicSignout } from "@/utils/constants";
import React, { useEffect } from "react";
import { observer } from "mobx-react";

const Header = () => {
  const { data, mutateAsync: signout } = useSignout();
  const user = authStore.currentUser;

  const handleSignout = async () => {
    await signout({});
    authStore.clearUser();
  };

  return (
    <div>
      {user && (
        <div>
          <button
            type="button"
            className="border border-[#222] p-2"
            onClick={handleSignout}
          >
            {arabicSignout.signout}
          </button>
          <p>{user?.name}</p>
        </div>
      )}
    </div>
  );
};

export default observer(Header);
