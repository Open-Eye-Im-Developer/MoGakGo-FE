"use client";

import { DUMMY_USER_DATA } from "../constants";
import EditForm from "../_components/EditForm";

function EditPage() {
  return (
    <main className="container min-h-screen max-w-2xl bg-gray-50 dark:bg-gray-950">
      <EditForm defaultValues={DUMMY_USER_DATA} />
    </main>
  );
}

export default EditPage;
