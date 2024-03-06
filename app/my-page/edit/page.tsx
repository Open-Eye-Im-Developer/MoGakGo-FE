"use client";

import { useMemo } from "react";

import { useQuerySignUpUser } from "@/app/signup/_hooks/useQuerySignUpUser";

import EditForm from "../_components/EditForm";

function EditPage() {
  const { data: userData } = useQuerySignUpUser();

  const data = useMemo(() => {
    if (!userData) return;
    return {
      username: userData.username,
      avatarUrl: userData.avatarUrl,
      bio: userData.bio,
      wantedJobs: userData.wantedJobs ?? [],
      achievementId: 2,
    };
  }, [userData]);

  return (
    <main className="container min-h-screen max-w-2xl bg-gray-50 dark:bg-gray-950">
      {data ? (
        <EditForm defaultValues={data} />
      ) : (
        <EditForm key="skeleton" disabled={true} />
      )}
    </main>
  );
}

export default EditPage;
