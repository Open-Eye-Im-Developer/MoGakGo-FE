"use client";

import { useMemo } from "react";

import StackNavigator from "@/app/_common/components/StackNavigator";

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

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
    <>
      <StackNavigator element={"수정"} />
      <main className="container flex min-h-full max-w-2xl flex-col gap-8 pb-8">
        {data ? (
          <EditForm defaultValues={data} />
        ) : (
          <EditForm key="skeleton" disabled={true} />
        )}
      </main>
    </>
  );
}

export default EditPage;
