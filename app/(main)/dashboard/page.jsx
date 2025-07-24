
import { getUserOnboardingStatus } from "@/action/user";
import { redirect } from "next/navigation";
import { getIndustryInsights } from "@/action/dashboard";
import DashboardView from "./_components/dashboard-view";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
}