import { Metadata } from "next";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { AppearanceForm } from "@/components/appearance-form";
import { DashboardHeader } from "@/components/dashboard-header";
import { Shell } from "@/components/shell";
import { getCurrentUser } from "@/lib/session";

import { UserNameForm } from "@/components/users/user-name-form";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage account and app settings.",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin");
  }

  return (
    <Shell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and app settings."
      />
      <div className="flex gap-8">
        <UserNameForm user={{ id: user.id, name: user.name || "" }} />
        <AppearanceForm />
      </div>
    </Shell>
  );
}
